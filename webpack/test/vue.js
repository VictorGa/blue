var postcss = require('../postcss')

module.exports = {
  loaders: {
    js: 'babel',
    html: 'vue-loader/lib/template-compiler'
  },
  cssModules: {
    localIdentName: '[name]__[local]___[hash:base64:5]--[hash:base64:5]',
    camelCase: true
  },
  postcss
}
