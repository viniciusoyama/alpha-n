const index = require('./request_handlers/index.js');
const users = require('./request_handlers/users.js');

module.exports = [
  {
      method: 'GET',
      path: '/index',
      handler: index.handler
  },
  {
      method: 'GET',
      path: '/users',
      handler: users.handler
  }
]
