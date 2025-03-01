const fs = require('fs');
const pkg = require('../package.json');

pkg.main = './cjs/index.js';
pkg.module = './esm/index.js';
pkg.types = './src/index.d.ts';
pkg.exports['.'] = {
  require: './cjs/index.js',
  import: './esm/index.js',
  types: './src/index.d.ts'
};

fs.writeFileSync('build/package.json', JSON.stringify(pkg, null, 2));