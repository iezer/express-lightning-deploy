var nconf = require('nconf');

//error if envornment is not set correctly
if (['production', 'staging', 'test', 'development'].indexOf(process.env.NODE_ENV) === -1) {
  throw new Error('NODE_ENV must be production, staging, test or development');
}

nconf.file('localOverrides', __dirname + '/' + process.env.NODE_ENV + '.json');

//common options
nconf.defaults({
  server: {
    runPort: 3800,
  },

  lightning: {
    appName: 'lightning-app',
  },

  redis: {
    port: 6379,
    host: '127.0.0.1',
  },
});

module.exports = nconf.get();
