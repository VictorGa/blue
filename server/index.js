const fs = require('fs')
const path = require('path')
const express = require('express')
const Vue = require('vue')

const app = express()
const port = 4040

const layout = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8')
const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server-bundle.js'), 'utf-8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle)
const indexHTML = parseIndex(fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8'))

function parseIndex (template) {
  const contentMarker = '<!-- APP -->'
  const i = template.indexOf(contentMarker)
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length)
  }
}

// @TODO serve statics here

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  res.setHeader('Content-Type', 'text/html')
  var s = Date.now()
  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)

  renderStream.once('data', () => {
    res.write(indexHTML.head)
  })

  renderStream.on('data', chunk => {
    res.write(chunk)
  })

  renderStream.on('end', () => {
    // embed initial store state
    if (context.initialState) {
      res.write(
        `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      )
    }
    res.end(indexHTML.tail)
    console.log(`whole request: ${Date.now() - s}ms`)
  })

  renderStream.on('error', err => {
    if (err && err.code === '404') {
      res.status(404).end('404 | Page Not Found')
      return
    }
    // Render Error Page or Redirect
    res.status(500).end('Internal Error 500')
    console.error(`error during render : ${req.url}`)
    console.error(err)
  })
})

// app.get('*', (request, response) => {
//   // @TODO require the app root here
//   const url = request.url
//   const context = { url }
//
//   renderer.renderToString(context, (error, html) => {
//     if (error) {
//       console.log('error', error)
//
//       return response.status(500).send('Internal server error')
//     }
//
//     response.send(layout.replace('<div id="app"></div>', html))
//   })
// })

app.listen(port, error => {
  if (error) {
    throw error
  }

  console.log(`Server is running at http://localhost:${port}`)
})
