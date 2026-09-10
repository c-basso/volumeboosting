const fs = require('fs');
const path = require('path');

const {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  EXPECTED_JSON_LD_TYPES,
  EXPECTED_GUIDE_JSON_LD_TYPES,
  EXPECTED_GUIDES_HUB_JSON_LD_TYPES,
  GUIDE_URLS,
  GUIDES_PATH_SEGMENT
} = require('../constants');

const PROJECT_ROOT = path.join(__dirname, '..', '..');

/**
 * Every generated HTML page the validators should check.
 * `lang` drives locale-specific heuristics; `kind` selects the expected JSON-LD type set.
 */
function listPages() {
  const pages = LANGUAGES.map((lang) => ({
    id: lang,
    lang,
    kind: 'home',
    file: path.join(PROJECT_ROOT, lang === DEFAULT_LANGUAGE ? 'index.html' : `${lang}/index.html`),
    expectedJsonLdTypes: EXPECTED_JSON_LD_TYPES
  }));

  if (GUIDE_URLS.length > 0) {
    const hubFile = path.join(PROJECT_ROOT, GUIDES_PATH_SEGMENT, 'index.html');
    if (fs.existsSync(hubFile)) {
      pages.push({
        id: 'guides-hub',
        lang: DEFAULT_LANGUAGE,
        kind: 'hub',
        file: hubFile,
        expectedJsonLdTypes: EXPECTED_GUIDES_HUB_JSON_LD_TYPES
      });
    }
    for (const { slug, outputPath } of GUIDE_URLS) {
      pages.push({
        id: `guide:${slug}`,
        lang: DEFAULT_LANGUAGE,
        kind: 'guide',
        file: outputPath,
        expectedJsonLdTypes: EXPECTED_GUIDE_JSON_LD_TYPES
      });
    }
  }

  return pages;
}

module.exports = { listPages, PROJECT_ROOT };
