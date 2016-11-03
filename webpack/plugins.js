const {definitions} = require('../config');
const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(definitions)
  })
];
