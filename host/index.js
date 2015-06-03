var Host = require('./host');

exports.help = {
  group: {
    title: 'Graphene Host',
    description: 'Graphene host lets you run marionette tests in graphene'
  },

  arguments: {
    '--runtime': {
      help: 'path to find graphene'
    },
    '--start-manifest': {
      help: 'start manifest url'
    },
  }
};

exports.createHost = Host.createHost;
exports.createSession = Host.createSession;
