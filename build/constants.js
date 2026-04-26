const SITE_URL = "https://volumeboosting.com/";
const APP_ID = '6741472421';
const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;
const DEFAULT_LANGUAGE = 'en';

const LANGUAGES = [
    DEFAULT_LANGUAGE,
    'de',
    'es',
    'fr',
    'it',
    'ko',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'th',
    'tr',
    'uk',
    'vi',
];

const URLS = LANGUAGES.map((code) => ({
    code,
    hreflang: code,
    lang: code,
    url: code === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${code}/`
}));

const ADDITIONAL_URLS = [
    `${SITE_URL}llms.txt`
];

// Expected JSON-LD types that should be present on each generated page.
// Keep this list in sync with `build/template.html` structured data scripts.
// Note: MobileApplication is a subtype of SoftwareApplication and is acceptable
const EXPECTED_JSON_LD_TYPES = [
    'MobileApplication', // or 'SoftwareApplication' - MobileApplication is more specific
    'Organization',
    'WebSite',
    'HowTo',
    'FAQPage',
    'WebPage',
    'BreadcrumbList'
];

const INDEX_NOW_KEY = 'ANmc63xrMRZdnah1f1N7xyzD';

// https://www.indexnow.org/searchengines.json
const INDEX_NOW_ENGINES = [
    'indexnow.yep.com',
    'search.seznam.cz',
    'searchadvisor.naver.com',
    'indexnow.amazonbot.amazon',
    'api.indexnow.org',
    'yandex.com',
    'bing.com'
];

module.exports = {
    SITE_URL,
    APP_ID,
    APP_STORE_URL,
    URLS,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    EXPECTED_JSON_LD_TYPES,
    INDEX_NOW_KEY,
    INDEX_NOW_ENGINES,
    ADDITIONAL_URLS
};