var dummy = require('dummy-data');

module.exports = {
  handler: (request, response) => {
    return response.view('users', { users: [{
        name: 'Test 1'
      },
      {
        name: 'Test 2'
      }]
    });
  }
}
