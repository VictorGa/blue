var path = require('path');
var projectRoot = path.resolve(__dirname, '../');

module.exports = [
  {
    test: /\.vue$/,
    loader: 'vue'
  },
  {
    test: /\.js$/,
    loader: 'babel!eslint',
    include: projectRoot,
    exclude: /node_modules/
  },
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.html$/,
    loader: 'vue-html'
  }
];
