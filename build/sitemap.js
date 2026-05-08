const fs = require('fs');
const path = require('path');

const { SITE_URL, URLS, DEFAULT_LANGUAGE } = require('./constants');

function resolvePagePathByUrl(loc) {
  const parsed = new URL(loc);
  const cleanPath = parsed.pathname.replace(/^\/+|\/+$/g, '');
  if (!cleanPath) {
    return path.join(__dirname, '..', 'index.html');
  }
  const [lang] = cleanPath.split('/');
  return path.join(__dirname, '..', lang, 'index.html');
}

function getLastmodForUrl(loc) {
  const pagePath = resolvePagePathByUrl(loc);
  const stats = fs.statSync(pagePath);
  return stats.mtime.toISOString().slice(0, 10);
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
    for (const { lang, url } of URLS) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`);
    }
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`);
    lines.push('    <priority>1.0</priority>');
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

