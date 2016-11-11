const path = require('path');
const {definitions} = require('../config');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(definitions)
  }),

  new StyleLintPlugin({
    configFile: '.stylelintrc',
    context: 'inherits from webpack',
    files: ['../src/**/*.css', '../src/**/*.vue'],
    configBasedir: path.join(__dirname) + '../src',
    failOnError: false,
  })
];
