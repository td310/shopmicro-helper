const fs = require('fs');

// Read the original package.json
const pkg = require('../package.json');

// Modify paths to be relative to build directory
pkg.main = './cjs/index.js';
pkg.module = './esm/index.js';
pkg.types = './src/index.d.ts';
pkg.exports['.'] = {
  require: './cjs/index.js',
  import: './esm/index.js',
  types: './src/index.d.ts'
};

// Write the modified package.json to build directory
fs.writeFileSync('build/package.json', JSON.stringify(pkg, null, 2));