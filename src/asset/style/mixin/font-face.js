const path = require('path')
const fs = require('fs')

module.exports = function (mixin, str) {
  const fontDir = path.join(__dirname, '../../font')
  const reg = /\.(woff|woff2|ttf)$/
  const exts = [
    'woff2',
    'woff',
    'ttf'
  ]

  const fonts = []
  let fontFace = ''

  /**
   * Loop trough each file in the font directory and
   * create an object with font-faces
   */
  fs.readdirSync(fontDir).forEach((file) => {
    let fontName = file.replace(/\.[^/.]+$/, '')

    if (fonts.indexOf(fontName) > -1) {
      return
    }

    fonts.push(fontName)

    fontFace += `
      @font-face {
        font-family: '${fontName}';
        font-path: 'font/${fontName}';
      }
    `
  })

  console.log(fontFace)

  return fontFace
}
