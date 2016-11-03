const path = require('path');
const _ = require('lodash');
const fs = require('fs');
const yaml = require('js-yaml');

const cfgDir = path.resolve(__dirname, './');
const env = process.env.NODE_ENV || 'dev';
const envCfgDir = `${cfgDir}/${env}`
const regex = /\.yaml$/;

const getYamlMap = (directory) => {
  return fs.readdirSync(directory)
      .filter(file => regex.test(file))
      .reduce((cfg, file) => {
        const buffer = fs.readFileSync(path.join(directory, file), 'utf-8');
        const options = {};
        const key = file.replace('.yaml', '')

        options[key] = yaml.safeLoad(buffer);

        return options[key] ? Object.assign(cfg, options) : cfg;
      }, {})
}

const baseConfig = getYamlMap(cfgDir);
const envConfig = getYamlMap(envCfgDir);
const config = _.merge(baseConfig, envConfig);

module.exports = config;
