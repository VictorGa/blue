const {definitions} = require('../config');
const webpack = require('webpack');

module.exports = [
  new webpack.DefinePlugin({
    ENV: JSON.stringify(definitions)
  })
];
