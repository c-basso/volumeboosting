const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    APP_ID,
    APP_STORE_URL
} = require('./constants');

const ROOT_DIR = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');
const URLS_PATH = path.join(ROOT_DIR, 'urls.txt');
const LLMS_PATH = path.join(ROOT_DIR, 'llms.txt');
const STYLE_CSS_PATH = path.join(ROOT_DIR, 'style.css');
const WEBMANIFEST_PATH = path.join(ROOT_DIR, 'site.webmanifest');

const APP_STORE_PLACEHOLDER = '__APP_STORE_URL__';

const BUILD_TIMESTAMP = Date.now();
const BUILD_DATE_ISO = new Date(BUILD_TIMESTAMP).toISOString().slice(0, 10);
const CURRENT_YEAR = new Date().getFullYear();

const DEFAULT_SITE_NAME = 'Increase Volume – Sound Boost';
const DEFAULT_OG_LOGO = `${SITE_URL}img/logo.webp`;

const ALTERNATE_LANGUAGE_LINKS = URLS.map(({ code, hreflang, url }) => ({
    code,
    hreflang,
    lang: hreflang,
    url
}));

const HTML_LANG_BY_CODE = {
    en: 'en',
    de: 'de',
    es: 'es',
    fr: 'fr',
    it: 'it',
    ko: 'ko',
    nl: 'nl',
    pl: 'pl',
    pt: 'pt',
    ro: 'ro',
    ru: 'ru',
    th: 'th',
    tr: 'tr',
    uk: 'uk',
    vi: 'vi'
};

const OG_LOCALE_BY_LANGUAGE = {
    en: 'en_US',
    ru: 'ru_RU',
    es: 'es_ES',
    fr: 'fr_FR',
    de: 'de_DE',
    it: 'it_IT',
    pt: 'pt_PT',
    ko: 'ko_KR',
    nl: 'nl_NL',
    pl: 'pl_PL',
    ro: 'ro_RO',
    th: 'th_TH',
    tr: 'tr_TR',
    uk: 'uk_UA',
    vi: 'vi_VN'
};

const CANONICAL_URL_BY_LANGUAGE = new Map(URLS.map(({ code, url }) => [code, url]));

function assertStyleCssExists() {
    if (!fs.existsSync(STYLE_CSS_PATH)) {
        throw new Error(`Missing ${STYLE_CSS_PATH} (create or restore style.css next to index.html)`);
    }
    console.log(`✅ style.css present: ${STYLE_CSS_PATH}`);
    console.log();
}

function syncWebManifest() {
    if (!fs.existsSync(WEBMANIFEST_PATH)) {
        return;
    }
    const manifest = JSON.parse(fs.readFileSync(WEBMANIFEST_PATH, 'utf8'));
    const rel = Array.isArray(manifest.related_applications) ? manifest.related_applications[0] : null;
    if (rel) {
        rel.url = APP_STORE_URL;
        rel.id = String(APP_ID);
    }
    fs.writeFileSync(WEBMANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    console.log(`✅ site.webmanifest -> App Store id ${APP_ID}`);
    console.log();
}

function writeUrlsFile() {
    fs.writeFileSync(URLS_PATH, URLS.map(({ url }) => url).join('\n'), 'utf8');
    console.log('✅ Successfully built urls.txt file');
    console.log(`📁 Output saved to: ${URLS_PATH}`);
    console.log();
}

function absoluteSiteUrl(maybe) {
    if (maybe == null || maybe === '') {
        return SITE_URL;
    }
    const value = String(maybe);
    if (/^https?:\/\//i.test(value)) {
        return value;
    }
    return `${SITE_URL.replace(/\/?$/, '/')}${value.replace(/^\//, '')}`;
}

function writeLlmsFile(defaultLocaleData) {
    const appName = defaultLocaleData.header?.app_name || DEFAULT_SITE_NAME;
    const version = defaultLocaleData.seo?.structured_data?.software_application?.softwareVersion;

    const lines = [
        `# ${appName}`,
        '',
        `> ${stripHtml(defaultLocaleData.meta?.description) || 'iPhone app to boost audio and video volume.'}`,
        '',
        '## Main sections',
        `- [Home](${SITE_URL}): App overview, use cases, and download`,
        `- [FAQ](${SITE_URL}#geo-faq-heading): Common questions and direct answers`,
        `- [Localized pages](${SITE_URL}): Language-specific landing pages`,
        '',
        '## Key facts',
        '- Product type: iPhone app for boosting quiet audio/video files',
        `- App Store: ${APP_STORE_URL} (id ${APP_ID})`,
        '- Max boost claim: up to ~10x',
        '- Core flow: import -> boost -> save',
        `- Supported page languages: ${LANGUAGES.length}`,
        `- Software version: ${version || '—'}`,
        `- Last build date: ${BUILD_DATE_ISO}`,
        '',
        '## Language pages',
        ...ALTERNATE_LANGUAGE_LINKS.map(({ hreflang, url }) => `- [${hreflang}](${url})`),
        '',
        '## Contact and policies',
        `- Website: ${SITE_URL}`,
        `- Privacy: ${absoluteSiteUrl(defaultLocaleData.footer?.privacy_url)}`,
        `- Terms: ${absoluteSiteUrl(defaultLocaleData.footer?.terms_url)}`
    ];

    fs.writeFileSync(LLMS_PATH, `${lines.join('\n')}\n`, 'utf8');
    console.log('✅ Successfully built llms.txt file');
    console.log(`📁 Output saved to: ${LLMS_PATH}`);
    console.log();
}

function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function readJsonFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function stripHtml(value) {
    if (typeof value !== 'string') {
        return value;
    }
    return value
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function getOutputDirectory(lang) {
    return path.join(ROOT_DIR, lang === DEFAULT_LANGUAGE ? '.' : lang);
}

function getJsonPath(lang) {
    return path.join(__dirname, `${lang}.json`);
}

function getOutputPath(lang) {
    return path.join(getOutputDirectory(lang), 'index.html');
}

function getMissingTranslationFiles() {
    return LANGUAGES
        .map((lang) => ({ lang, jsonPath: getJsonPath(lang) }))
        .filter(({ jsonPath }) => !fs.existsSync(jsonPath));
}

function getPreviewImageUrl(lang) {
    const relative = lang === DEFAULT_LANGUAGE ? 'site_preview.png' : `${lang}/site_preview.png`;
    const absolute = path.join(ROOT_DIR, relative);
    const usePath = fs.existsSync(absolute) ? relative : 'site_preview.png';
    return `${SITE_URL}${usePath}`;
}

function getCanonicalUrl(meta, lang) {
    return (
        meta.canonical ||
        meta.alternate_url ||
        meta.altenate_url ||
        CANONICAL_URL_BY_LANGUAGE.get(lang) ||
        SITE_URL
    );
}

function removeAlternateMetaFields(meta) {
    for (const key of Object.keys(meta)) {
        if (key.startsWith('alternate_')) {
            delete meta[key];
        }
    }
}

function normalizeMeta(data, lang) {
    data.meta = data.meta || {};
    removeAlternateMetaFields(data.meta);

    const canonicalUrl = getCanonicalUrl(data.meta, lang);
    const previewUrl = getPreviewImageUrl(lang);

    data.meta.lang = data.meta.lang || lang;
    data.meta.html_lang = data.meta.html_lang || HTML_LANG_BY_CODE[lang] || data.meta.lang;
    data.meta.version = BUILD_TIMESTAMP;
    data.meta.canonical = canonicalUrl;
    data.meta.alternate_default = SITE_URL;
    data.meta.alternate_languages = ALTERNATE_LANGUAGE_LINKS;
    data.meta.og_url = canonicalUrl;
    data.meta.twitter_url = canonicalUrl;
    data.meta.og_image = previewUrl;
    data.meta.twitter_image = previewUrl;
    data.meta.og_logo = data.meta.og_logo || DEFAULT_OG_LOGO;
    data.meta.og_site_name = data.meta.og_site_name || data.header?.app_name || DEFAULT_SITE_NAME;
    data.meta.og_locale = data.meta.og_locale || OG_LOCALE_BY_LANGUAGE[lang] || OG_LOCALE_BY_LANGUAGE.en;
    data.meta.last_updated_iso = BUILD_DATE_ISO;
}

function normalizeFooter(data) {
    if (!data.footer) {
        data.footer = {};
    }
    if (typeof data.footer.copyright === 'string') {
        data.footer.copyright = data.footer.copyright.replace(/\{year\}/g, String(CURRENT_YEAR));
    }
    data.footer.last_updated_iso = BUILD_DATE_ISO;
}

function ensureSeoShape(data) {
    data.seo = data.seo || {};
    data.seo.structured_data = data.seo.structured_data || {};
}

function applyAppStoreFromConstants(data) {
    data.meta = data.meta || {};
    data.meta.app_store_id = String(APP_ID);
    data.header = data.header || {};
    data.header.download_url = APP_STORE_URL;

    function visit(node) {
        if (Array.isArray(node)) {
            for (const element of node) {
                visit(element);
            }
            return;
        }
        if (node && typeof node === 'object') {
            for (const key of Object.keys(node)) {
                const value = node[key];
                if (typeof value === 'string' && value.includes(APP_STORE_PLACEHOLDER)) {
                    node[key] = value.split(APP_STORE_PLACEHOLDER).join(APP_STORE_URL);
                } else {
                    visit(value);
                }
            }
        }
    }

    visit(data);
}

function localeTagForIntl(lang) {
    const ogLocale = OG_LOCALE_BY_LANGUAGE[lang];
    return ogLocale ? ogLocale.replace('_', '-') : lang;
}

function setSeoLastUpdatedFromBuild(data, lang) {
    const buildDate = new Date(BUILD_TIMESTAMP);
    try {
        data.seo.last_updated = buildDate.toLocaleDateString(localeTagForIntl(lang), {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch {
        data.seo.last_updated = BUILD_DATE_ISO;
    }
}

function buildWebPageStructuredData(data) {
    data.seo.structured_data.webpage = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.meta?.title,
        url: data.meta?.canonical,
        description: data.meta?.description,
        dateModified: BUILD_DATE_ISO,
        inLanguage: data.meta?.lang
    };
}

function buildOrganizationStructuredData(data) {
    if (data.seo.structured_data.organization) {
        return;
    }
    data.seo.structured_data.organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.meta?.og_site_name || data.header?.app_name || DEFAULT_SITE_NAME,
        description: stripHtml(data.meta?.description),
        url: data.meta?.canonical || SITE_URL,
        logo: data.meta?.og_logo || DEFAULT_OG_LOGO
    };
}

function buildSoftwareApplicationStructuredData(data) {
    const app = data.seo.structured_data.software_application;
    if (!app || typeof app !== 'object') {
        return;
    }
    app.url = data.meta?.canonical;
    app.downloadUrl = data.header?.download_url;
    if (app.offers && typeof app.offers === 'object') {
        app.offers.url = APP_STORE_URL;
    }
    app.dateModified = BUILD_DATE_ISO;
}

function buildWebsiteStructuredData(data) {
    const fallbackName = data.meta?.og_site_name || data.header?.app_name || DEFAULT_SITE_NAME;
    if (!data.seo.structured_data.website) {
        data.seo.structured_data.website = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: fallbackName,
            description: stripHtml(data.meta?.description),
            inLanguage: data.meta?.lang,
            url: data.meta?.canonical || SITE_URL
        };
        return;
    }
    if (typeof data.seo.structured_data.website === 'object') {
        const website = data.seo.structured_data.website;
        website.url = data.meta?.canonical;
        website.name = website.name || fallbackName;
        website.description = website.description || stripHtml(data.meta?.description);
        website.inLanguage = website.inLanguage || data.meta?.lang;
    }
}

function buildHowToStructuredData(data) {
    const howto = data.seo.structured_data.howto;
    if (!howto || typeof howto !== 'object') {
        return;
    }
    if (!Array.isArray(howto.step)) {
        howto.step = [];
    }
    if (howto.step[0] && typeof howto.step[0] === 'object') {
        howto.step[0].url = APP_STORE_URL;
    }
}

function buildFaqStructuredData(data) {
    const items = Array.isArray(data.seo?.faq) ? data.seo.faq : [];
    data.seo.structured_data.faqpage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((faq) => ({
            '@type': 'Question',
            name: stripHtml(faq?.question),
            acceptedAnswer: {
                '@type': 'Answer',
                text: stripHtml(faq?.answer)
            }
        }))
    };
}

function buildBreadcrumbStructuredData(data) {
    data.seo.breadcrumb_home = data.seo.breadcrumb_home || data.meta?.title || 'Home';
    data.seo.structured_data.breadcrumb_list = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: data.seo.breadcrumb_home,
                item: data.meta?.canonical
            }
        ]
    };
}

function preparePageData(data, lang) {
    normalizeMeta(data, lang);
    normalizeFooter(data);
    ensureSeoShape(data);
    applyAppStoreFromConstants(data);
    setSeoLastUpdatedFromBuild(data, lang);
    buildWebPageStructuredData(data);
    buildOrganizationStructuredData(data);
    buildSoftwareApplicationStructuredData(data);
    buildWebsiteStructuredData(data);
    buildHowToStructuredData(data);
    buildFaqStructuredData(data);
    buildBreadcrumbStructuredData(data);
    return data;
}

function getValue(obj, keyPath) {
    return keyPath.split('.').reduce((value, key) => {
        if (value && typeof value === 'object' && key in value) {
            return value[key];
        }
        return undefined;
    }, obj);
}

function getValueFromContext(context, keyPath) {
    const direct = getValue(context, keyPath);
    if (direct !== undefined) {
        return direct;
    }
    if (!keyPath.includes('.')) {
        return undefined;
    }
    const parts = keyPath.split('.');
    const first = parts[0];
    if (first in context) {
        const firstValue = context[first];
        if (firstValue && typeof firstValue === 'object' && firstValue !== null) {
            const rest = parts.slice(1).join('.');
            return rest ? getValue(firstValue, rest) : firstValue;
        }
    }
    return undefined;
}

function warnForTemplateIssue(lang, message) {
    console.warn(`Warning [${lang}]: ${message}`);
}

const LOOP_PLACEHOLDER_ROOTS = new Set(['item', 'feature', 'section', 'lang', 'screenshot', 'fact', 'row', 'faq']);

function shouldWarnMissingVar(pathExpression) {
    if (pathExpression.startsWith('seo.structured_data.')) {
        return false;
    }
    const root = pathExpression.split('.')[0];
    return !LOOP_PLACEHOLDER_ROOTS.has(root);
}

function applyFilters(value, filters, rawKey, lang) {
    let output = value;
    for (const filter of filters) {
        if (filter === 'json') {
            output = JSON.stringify(output);
        } else {
            warnForTemplateIssue(lang, `Unknown filter "${filter}" in ${rawKey}`);
        }
    }
    return output;
}

function replaceVariables(template, context, lang) {
    return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        const rawKey = key.trim();
        if (rawKey.startsWith('#each') || rawKey === '/each') {
            return match;
        }
        const [pathExpression, ...filters] = rawKey
            .split('|')
            .map((part) => part.trim())
            .filter(Boolean);

        const value = getValueFromContext(context, pathExpression);
        if (value === undefined) {
            if (shouldWarnMissingVar(pathExpression)) {
                warnForTemplateIssue(lang, `Variable ${pathExpression} not found in data`);
            }
            return match;
        }

        return applyFilters(value, filters, rawKey, lang);
    });
}

function cleanupJsonArtifacts(content) {
    return content
        .replace(/,\s*\n[\s\n]*\]/g, '\n            ]')
        .replace(/,\s*\]/g, ']');
}

function processEachBlocks(template, context, lang) {
    const eachPattern = /\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}([\s\S]*?)\{\{\/each\}\}/;
    let result = template;
    let match = result.match(eachPattern);

    while (match) {
        const [fullMatch, arrayPathRaw, variableNameRaw, block] = match;
        const arrayPath = arrayPathRaw.trim();
        const variableName = variableNameRaw.trim();
        const array = getValueFromContext(context, arrayPath);

        if (!Array.isArray(array)) {
            if (array != null) {
                warnForTemplateIssue(lang, `${arrayPath} is not an array (got ${typeof array})`);
            } else if (!arrayPath.includes('.')) {
                warnForTemplateIssue(lang, `${arrayPath} is not an array or not found`);
            }
            result = result.replace(fullMatch, '');
            match = result.match(eachPattern);
            continue;
        }

        const rendered = cleanupJsonArtifacts(array.map((item) => {
            const mergedContext = { ...context, [variableName]: item };
            const nested = processEachBlocks(block, mergedContext, lang);
            return replaceVariables(nested, mergedContext, lang);
        }).join(''));

        result = result.replace(fullMatch, rendered);
        match = result.match(eachPattern);
    }

    return result;
}

function renderTemplate(template, data, lang) {
    return cleanupJsonArtifacts(replaceVariables(processEachBlocks(template, data, lang), data, lang));
}

function buildPage(template, lang) {
    const outputDir = getOutputDirectory(lang);
    const outputPath = getOutputPath(lang);
    const jsonPath = getJsonPath(lang);

    ensureDirectoryExists(outputDir);
    const data = preparePageData(readJsonFile(jsonPath), lang);
    fs.writeFileSync(outputPath, renderTemplate(template, data, lang), 'utf8');

    console.log(`✅ Successfully built index.html from template and ${lang}.json`);
    console.log(`📁 Output saved to: ${outputPath}`);
}

function main() {
    const missing = getMissingTranslationFiles();
    if (missing.length > 0) {
        console.error(
            `❌ Missing translation files: ${missing.map((item) => `${item.lang}: ${path.basename(item.jsonPath)}`).join(', ')}`
        );
        process.exit(1);
    }

    assertStyleCssExists();
    syncWebManifest();
    writeUrlsFile();

    const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
    const defaultData = preparePageData(readJsonFile(getJsonPath(DEFAULT_LANGUAGE)), DEFAULT_LANGUAGE);
    writeLlmsFile(defaultData);

    for (const lang of LANGUAGES) {
        try {
            buildPage(template, lang);
        } catch (error) {
            console.error(`❌ Error building ${lang}:`, error.message);
            process.exit(1);
        }
    }
}

main();
