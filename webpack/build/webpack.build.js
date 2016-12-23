var path = require('path');
var {paths, settings} = require('../../config');
var baseWebpackConfig = require('../webpack.config');
var plugins = require('./plugins');
var webpack = require('webpack');
var merge = require('webpack-merge');
var loaders = require('./loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders')

const config = merge(baseWebpackConfig, {
  devtool: settings.productionSourceMap ? '#source-map' : false,
  plugins,
  module: {
    loaders
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract(
        'vue-style-loader',
        combineLoaders([
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ])
      )
    }
  }
});

module.exports = config;
