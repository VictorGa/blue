var path = require('path');
var {paths, settings} = require('../../config');
var baseWebpackConfig = require('../webpack.config');
var plugins = require('./plugins');
var webpack = require('webpack');
var merge = require('webpack-merge');
var loaders = require('./loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = merge(baseWebpackConfig, {
  devtool: settings.productionSourceMap ? '#source-map' : false,
  plugins,
  module: {
    loaders
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('vue-style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
    }
  }
});

module.exports = config;
