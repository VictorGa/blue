module.exports = function (config, webpackConfig, publicPath) {
  const path = require('path')
  const fs = require('fs');
  const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
  const name = require('./../../../package.json').name

  const {
    path:faviconPath,
    background:faviconBackground,
    out:faviconOut,
    title:faviconTitle
  } = config

  if (!faviconPath) {
    console.log(`  [favicon-generator]: WARNING - favicon is incorrectly configured.....SKIPPING`)
    return
  }
  if (faviconPath) {
    const iconPath = path.resolve(__dirname, '../../../', faviconPath);
    if (!fs.existsSync(iconPath)) {
        console.log(`  [favicon-generator]: WARNING - can't generate favicons. REASON: file does not exists @ ${faviconPath}`)
        return
    }
    console.log(`  [favicon-generator]: creating favicons for ${faviconPath}`)

    webpackConfig.plugins.push(
      new FaviconsWebpackPlugin({
        logo: iconPath,
        prefix: `${publicPath}${faviconOut || "static/favicons/icon-[hash]"}`,
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: false,
        inject: true,
        background: faviconBackground || '#fff',
        title: faviconTitle || name || '',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      })
    )
  }
}
