const index = require('./controllers/index.js');
const users = require('./controllers/users.js');

module.exports = [
  {
      method: 'GET',
      path: '/index',
      handler: index.handler
  },
  {
      method: 'GET',
      path: '/users',
      handler: users.index
  },
  {
      method: 'GET',
      path: '/users/destroy',
      handler: users.destroy
  },
  {
      method: 'GET',
      path: '/users/update',
      handler: users.update
  },
  {
      method: 'GET',
      path: '/users/create',
      handler: users.create
  }
]
