const Customer = require('../models/customer');

module.exports = {
  handler: (request, response) => {
    return response.view('index', { customers: Customer.all() });
  }
}
