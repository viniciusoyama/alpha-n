var dummy = require('dummy-data');

var spec = {
  name: "String",
  email: "String"
};

module.exports = {
  handler: (request, response) => {
    return response.view('index', { customers: dummy.generate(spec, null, 10) });
  }
}
