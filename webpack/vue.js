var postcss = require('./postcss')

module.exports = {
  loaders: {
    js: 'babel!eslint',
    html: 'vue-loader/lib/template-compiler'
  },
  cssModules: {
    localIdentName: '[name]__[local]__[hash:base64:5]',
    camelCase: true
  },
  postcss
}
