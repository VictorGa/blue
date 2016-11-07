const {definitions} = require('../config');
const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin({
    'CONFIG': JSON.stringify(definitions)
  })
];
