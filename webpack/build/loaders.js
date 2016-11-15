var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
  }
];
