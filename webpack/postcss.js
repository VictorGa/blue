module.exports = function () {
  return [
    require('postcss-cssnext')({
      browsers: ['last 3 versions', 'iOS >= 8']
    })
  ]
}
