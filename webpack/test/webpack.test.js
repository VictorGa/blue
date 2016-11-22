var webpack = require('webpack')
var merge = require('webpack-merge')
var loaders = require('./loaders')
var preLoaders = require('./preLoaders')
var vue = require('./vue')
var isparta = require('./isparta')
var baseWebpackConfig = require('../webpack.config')

const config = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  entry: null,
  isparta,
  module: {
    preLoaders,
    loaders
  },
  vue
});

module.exports = config;
