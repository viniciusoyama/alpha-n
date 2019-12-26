const index = require('./request_handlers/index.js');

module.exports = [
  {
      method: 'GET',
      path: '/index',
      handler: index.handler
  }
]
