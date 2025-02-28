const fs = require('fs');
const path = require('path');

const package = require('../package.json');
const buildPackage = {
  ...package,
  main: './cjs/index.js',
  module: './esm/index.js',
  types: './src/index.d.ts'
};

fs.writeFileSync(
  path.join(__dirname, '../build/package.json'),
  JSON.stringify(buildPackage, null, 2)
);