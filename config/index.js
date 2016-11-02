const configMap = {
  dev: require('./dev'),
  production: require('./production')
};

const env = (process.env.NODE_ENV || 'dev');

module.exports = configMap[env];
