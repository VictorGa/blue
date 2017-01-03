const _ = require('lodash')
const shell = require('shelljs')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.build')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { definitions, paths, settings } = require('../../config')
const timestamp = Math.floor(new Date().getTime() / 1000)
const publicPath = `version/${timestamp}/`
const buildTarget = path.join(__dirname, '../../', paths.buildPath)
const versionFolder = `${buildTarget}/${publicPath}`
const processEnv = _.merge(definitions, { publicPath })
const favicon = require('../util/favicon/faviconGenerator')

webpackConfig.output = {
  publicPath: '/',
  path: buildTarget,
  filename: `${publicPath}js/[name].js`,
  chunkFilename: `${publicPath}js/[id].js`
}

webpackConfig.module.loaders.push(
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: `${publicPath}static/image/[name].[hash:7].[ext]`
    }
  }
)

webpackConfig.module.loaders.push(
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: `${publicPath}static/font/[name].[hash:7].[ext]`
    }
  }
)

webpackConfig.plugins.unshift(
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, '../../', paths.index),
    template: path.resolve(__dirname, '../../', paths.template),
    timestamp,
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunksSortMode: 'dependency'
  })
)

webpackConfig.plugins.unshift(
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(processEnv)
  })
)

// generate favicons
favicon(processEnv.favicon, webpackConfig, publicPath)

shell.mkdir('-p', versionFolder)
shell.cp('-R', paths.staticPath, versionFolder)

webpack(webpackConfig, function (err, stats) {
  if (err) throw err;

  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
});
