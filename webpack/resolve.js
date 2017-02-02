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

    'CSSPlugin': path.resolve(__dirname, '../node_modules/gsap/src/uncompressed/plugins/CSSPlugin'),
    'ThrowPropsPlugin': path.resolve(__dirname, '../src/vendor/ThrowPropsPlugin'),
    'ScrollToPlugin': path.resolve(__dirname, '../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin'),
    'pixi.js': path.resolve(__dirname, '../src/vendor/pixi/pixi'),
    'PixiExtraFilters': path.resolve(__dirname, '../src/vendor/pixi-extra-filters'),
    'Draggable': path.resolve(__dirname, '../node_modules/gsap/src/uncompressed/utils/Draggable'),
    'TweenLite': 'gsap'
  }
}
