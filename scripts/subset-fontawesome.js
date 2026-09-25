// Regenerates the Font Awesome webfont files to contain only the icons this
// app actually uses, overwriting the full free-tier fonts in place. The CSS
// (all.min.css) is left completely untouched — it still declares every icon
// in the free set, but only the glyphs listed below actually exist in the
// font binary, so unused glyphs cost nothing to ship.
//
// Runs automatically before every `npm run build` (see package.json's
// "prebuild" script) since node_modules — and this subset — gets wiped and
// recreated on every fresh `npm install`/`npm ci`.
const { fontawesomeSubset } = require('fontawesome-subset');

fontawesomeSubset(
  {
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
  },
  'node_modules/@fortawesome/fontawesome-free/webfonts',
);
