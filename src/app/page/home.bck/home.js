import template from './home.html'

const style = require('./home.scss')

export default {
  template,

  data () {
    return {
      style
    }
  },

  mounted () {
    // console.log(this.style)
  }
}
