var path = require('path');

module.exports = {
  // env: prod,
  index: path.resolve(__dirname, '../../backend/resources/views/layouts/build.blade.php'),
  assetsRoot: path.resolve(__dirname, '../../htdocs'),
  // timestamp: prod.TIMESTAMP,
  // assetsSubDirectory: 'version/' + prod.TIMESTAMP + '/',
  assetsPublicPath: '/',
  productionSourceMap: true,
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: false,
  productionGzipExtensions: ['js', 'css']
};
