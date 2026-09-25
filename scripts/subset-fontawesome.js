// Regenerates Font Awesome down to only the icons this app actually uses.
// Runs automatically before every `npm run build` (see package.json's
// "prebuild" script) since node_modules gets wiped and recreated on every
// fresh `npm install`/`npm ci`.
//
// Two pieces of dead weight, one shared icon list so they can't drift apart:
//   1. Webfont binaries — via the official `fontawesome-subset` tool, which
//      resolves icon names to correct glyph outlines internally (no manual
//      unicode lookup, no risk of a wrong codepoint).
//   2. CSS text — fontawesome.css/brands.css each glyph-to-codepoint mapping
//      as its own self-contained 3-line block (e.g. `.fa-bars {\n  --fa:
//      "\f0c9";\n}`). Every other rule (base styles, @font-face, sizing
//      utilities, etc.) is left completely untouched — only blocks matching
//      that exact single-purpose pattern are candidates for removal, and
//      only if their icon name isn't in the list below.
const fs = require('fs');
const path = require('path');
const { fontawesomeSubset } = require('fontawesome-subset');

const ICONS = {
  solid: [
    'bars',
    'briefcase',
    'chevron-down',
    'code',
    'envelope',
    'file-pdf',
    'futbol',
    'home',
    'link',
    'user',
  ],
  brands: ['apple', 'github', 'google-play', 'linkedin', 'youtube'],
};

const FA_DIR = path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free');
const usedNames = new Set([...ICONS.solid, ...ICONS.brands]);

function trimIconBlocks(css) {
  return css.replace(
    /\.fa-([a-z0-9-]+) \{\n  --fa: "\\f[0-9a-f]+";\n\}\n\n?/g,
    (block, name) => (usedNames.has(name) ? block : ''),
  );
}

// 1. Subset the webfont binaries (overwrites in place; CSS @font-face src
//    paths are unaffected since the filenames don't change).
fontawesomeSubset(ICONS, path.join(FA_DIR, 'webfonts'));

// 2. Trim the CSS text and combine into one file, referenced from
//    angular.json instead of all.min.css.
const fontawesomeCss = trimIconBlocks(
  fs.readFileSync(path.join(FA_DIR, 'css/fontawesome.css'), 'utf8'),
);
const solidCss = fs.readFileSync(path.join(FA_DIR, 'css/solid.css'), 'utf8');
const brandsCss = trimIconBlocks(
  fs.readFileSync(path.join(FA_DIR, 'css/brands.css'), 'utf8'),
);

const combined = [fontawesomeCss, solidCss, brandsCss]
  .join('\n')
  .replace(/font-display: block;/g, 'font-display: swap;');

fs.writeFileSync(path.join(FA_DIR, 'css/portfolio.css'), combined);
