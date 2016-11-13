const merge = require('webpack-merge')
const font = require('./font')

/**
 * Settings
 */
const mobileFirst = false

/**
 * Colors
 */
const colors = {
  'black': '#000'
}

/**
 * Sizes
 */
const sizes = {
  'site-width': '960px'
}

/**
 * Fonts
 */
const fonts = {
  fonts: font.getFonts()
}

/**
 * Media queries
 */
let mediaQueries = {
  'xs': 'max-width: 480px',
  's': 'max-width: 768px',
  'm': 'max-width: 1024px',
  'l': 'min-width: 1025px',
  'xl': 'min-width: 1480px'
}

if (mobileFirst) {
  mediaQueries = {
    's': 'min-width: 481px',
    'm': 'min-width: 769px',
    'l': 'min-width: 1025px',
    'xl': 'min-width: 1480px'
  }
}

module.exports = merge(colors, mediaQueries, sizes, fonts)
