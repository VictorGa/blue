var path = require('path');

module.exports = [
  {
    include: path.resolve(__dirname, '../node_modules/pixi.js'),
    loader: 'ify'
  },
  {
    test: /\.js$/,
    loader: 'ify'
  }
];
