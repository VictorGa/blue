const webpack = require('webpack')
const loaders = require('./loaders')
const baseWebpackConfig = require('../webpack.config')
const merge = require('webpack-merge')

const config = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  module: {
    loaders
  },
  output: {
    path: './dist/',
    publicPath: '/',
    filename: 'server-bundle.js',
    libaryTarget: 'commonjs2'
  },
  // externals: Object.keys(require('../../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"server"',
      'process.env.NODE_ENV': '"production"'
    })
  ]
})

module.exports = config
