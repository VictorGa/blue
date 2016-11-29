const path = require('path')
const _ = require('lodash')
const fs = require('fs')
const yaml = require('js-yaml')

const getDefaultEnv = () => {
  const args = process.argv.slice(2)

  const arg = _.find(args, arg => {
    return _.includes(arg, '--env')
  })

  const envArgIsValid = _.includes(arg, '=')

  if (!envArgIsValid) {
    return false
  }

  return _.last(arg.split('='))
}

const cfgDir = path.resolve(__dirname, './')
const env = getDefaultEnv() || process.env.NODE_ENV || 'production'
const envCfgDir = `${cfgDir}/${env}`
const regex = /\.yaml$/


const getYamlMap = directory => {
  return fs.readdirSync(directory)
      .filter(file => regex.test(file))
      .reduce((cfg, file) => {
        const buffer = fs.readFileSync(path.join(directory, file), 'utf-8')
        const options = {}
        const key = path.basename(file, '.yaml')

        options[key] = yaml.safeLoad(buffer)

        if (options[key]) {
          return Object.assign(cfg, options)
        }

        return cfg
      }, {})
}

const baseConfig = getYamlMap(cfgDir)
const envConfig = getYamlMap(envCfgDir)
const config = _.merge(baseConfig, envConfig)

module.exports = config
