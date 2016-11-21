var path = require('path')
var projectRoot = path.resolve(__dirname, '../../')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.js$/,
    loader: 'babel!eslint',
    include: projectRoot,
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
  }
];
