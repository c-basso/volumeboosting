const fs = require('fs');
const path = require('path');

const { SITE_URL, URLS, DEFAULT_LANGUAGE, GUIDE_URLS, GUIDES_HUB_URL, GUIDES_PATH_SEGMENT } = require('./constants');

function resolvePagePathByUrl(loc) {
  const parsed = new URL(loc);
  const cleanPath = parsed.pathname.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) {
    return path.join(__dirname, '..', 'index.html');
  }
  return path.join(__dirname, '..', ...cleanPath.split('/'), 'index.html');
}

function getLastmodForUrl(loc) {
  const pagePath = resolvePagePathByUrl(loc);
  const stats = fs.statSync(pagePath);
  return stats.mtime.toISOString().slice(0, 10);
}

/** English-only pages: hub + guides. No hreflang cluster (single language), self x-default. */
function englishOnlyUrls() {
  if (GUIDE_URLS.length === 0) {
    return [];
  }
  const hubPath = path.join(__dirname, '..', GUIDES_PATH_SEGMENT, 'index.html');
  const list = [];
  if (fs.existsSync(hubPath)) {
    list.push({ loc: GUIDES_HUB_URL, priority: '0.8' });
  }
  for (const { url, outputPath } of GUIDE_URLS) {
    if (fs.existsSync(outputPath)) {
      list.push({ loc: url, priority: '0.9' });
    }
  }
  return list;
}

(function main() {
  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
  const robotsPath = path.join(__dirname, '..', 'robots.txt');

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  lines.push('<urlset ');
  lines.push('  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  lines.push('  xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  lines.push('  ');
  const defaultUrl = URLS.find(({ lang }) => lang === DEFAULT_LANGUAGE)?.url ?? SITE_URL;
  for (const { url: loc } of URLS) {
    const lastmod = getLastmodForUrl(loc);
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    for (const { hreflang, url } of URLS) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${url}" />`);
    }
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`);
    lines.push('    <priority>1.0</priority>');
    lines.push('  </url>');
    lines.push('');
  }
  for (const { loc, priority } of englishOnlyUrls()) {
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    lines.push(`    <lastmod>${getLastmodForUrl(loc)}</lastmod>`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${loc}" />`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`);
    lines.push(`    <priority>${priority}</priority>`);
    lines.push('  </url>');
    lines.push('');
  }
  lines.push('</urlset>');

  fs.writeFileSync(sitemapPath, lines.join('\n') + '\n', 'utf8');
  console.log(`✅ Successfully built sitemap.xml`);
  console.log(`📁 Output saved to: ${sitemapPath}`);
  console.log()

  const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml 
  `;
  fs.writeFileSync(robotsPath, robots.trim() + '\n', 'utf8');
  console.log(`✅ Successfully built robots.txt`);
  console.log(`📁 Output saved to: ${robotsPath}`);
  console.log()

})();

