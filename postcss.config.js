const postCssImports = require('postcss-import');

module.exports = {
  parser: 'postcss',
  plugins: [
    postCssImports(),
  ],
};
