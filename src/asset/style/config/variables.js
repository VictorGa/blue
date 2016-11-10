var merge = require('webpack-merge');

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

module.exports = merge(colors, sizes)
