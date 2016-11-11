module.exports = [{
  test: /\.css$/,
  loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
}];
