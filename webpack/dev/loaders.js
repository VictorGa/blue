var combineLoaders = require('webpack-combine-loaders')

module.exports = [{
  test: /\.css$/,
  loader: combineLoaders([
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      query: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    },
    {
      loader: 'postcss-loader'
    }
  ])
}];
