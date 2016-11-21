const testsContext = require.context('./src', true, /\.spec$/)
const sourceContext = require.context('../src/app', true, /\.js$/)

testsContext.keys().forEach(testsContext)
sourceContext.keys().forEach(sourceContext)
