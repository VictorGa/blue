var path = require('path');

module.exports = {
  extensions: ['', '.js'],
  fallback: [path.join(__dirname, '../node_modules')],
  alias: {
    vue: 'vue/dist/vue.js',
    src: path.resolve(__dirname, '../src'),
    asset: path.resolve(__dirname, '../src/asset'),
    style: path.resolve(__dirname, '../src/asset/style'),
    font: path.resolve(__dirname, '../src/asset/font'),
    component: path.resolve(__dirname, '../src/app/component'),
    page: path.resolve(__dirname, '../src/app/page'),
    store: path.resolve(__dirname, '../src/app/store/modules'),
    container: path.resolve(__dirname, '../src/app/container')
  }
}
