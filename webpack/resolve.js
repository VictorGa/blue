var path = require('path');

module.exports = {
  extensions: ['', '.js'],
  fallback: [path.join(__dirname, '../node_modules')],
  alias: {
    'src': path.resolve(__dirname, '../src'),
    'assets': path.resolve(__dirname, '../src/assets'),
    'fonts': path.resolve(__dirname, '../src/assets/fonts'),
    'components': path.resolve(__dirname, '../src/app/components')
  }
}
