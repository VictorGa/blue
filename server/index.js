const fs = require('fs')
const path = require('path')
const express = require('express')
const Vue = require('vue')

const renderer = require('vue-server-renderer').createRenderer()
const layout = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8')
const app = express()
const port = 4040

// @TODO serve statics here

app.get('*', (request, response) => {
  // @TODO require the app root here
  const root = new Vue({
    template: '<h1>Hello {{ name }}</h1>',

    data () {
      return {
        name: 'Jonas Kuiler'
      }
    }
  })

  renderer.renderToString(root, (error, html) => {
    if (error) {
      return response.status(500).send('Internal server error')
    }

    response.send(layout.replace('<div id="app"></div>', html))
  })
})

app.listen(port, error => {
  if (error) {
    throw error
  }

  console.log(`Server is running at http://localhost:${port}`)
})
