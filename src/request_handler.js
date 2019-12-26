var dummy = require('dummy-data');

var spec = {
  name: "String",
  email: "String"
};

var customers = dummy.generate(spec, null, 10);

module.exports = {
  handler: (request, response) => {
    return `
      <html>
        <head>
        </head>
        <body>
          ${
            customers.map((c) => `<li>Name: ${c.name} - Email: ${c.email}</li>`).join('')
          }
        </body>
      </html>
    `;
  }
}
