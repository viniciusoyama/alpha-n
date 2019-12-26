const User = require('../models/user');

module.exports = {
  handler: (request, response) => {
    return response.view('users', { users: User.all() });
  }
}
