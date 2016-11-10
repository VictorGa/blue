var path = require('path');

module.exports = function () {
  const fontPath = path.join(__dirname, '../src/asset/font')

  return [
    require('postcss-nested'),

    require('postcss-mixins')({
      mixinsDir: path.join(__dirname, '../src/asset/style/mixin')
    }),

    require('postcss-cssnext')({
      browsers: ['last 3 versions', 'iOS >= 8']
    })
  ]
}
