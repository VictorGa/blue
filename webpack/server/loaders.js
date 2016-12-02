var path = require('path')
var projectRoot = path.resolve(__dirname, '../../')

module.exports = [
  {
    test: /\.js$/,
    loader: 'babel!eslint',
    include: projectRoot,
    exclude: /node_modules/
  }
];
