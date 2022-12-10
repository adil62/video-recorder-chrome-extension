const fs = require('fs-extra');

// Compile scripts
require('esbuild').build({
    entryPoints: ['./popup/Popup.jsx'],
    bundle: true,
    outfile: 'dist/Popup.js',
}).catch(() => process.exit(1))
require('esbuild').build({
    entryPoints: ['./content/Content.jsx'],
    bundle: true,
    outfile: 'dist/content.js',
}).catch(() => process.exit(1))

// Move static assets to dist
const files = [
    {from: './popup/popup.html', to: 'dist/Popup.html'},
    {from: './content/content.css', to: 'dist/content.css'},
].forEach(({from, to}) => {
    fs.copyFile(from, to, (err) => { if (err) throw err });
});

fs.copySync('images', './dist/images', { overwrite: true })
