var dummy = require('dummy-data');

var spec = {
  name: "String",
  email: "String"
};

var customers = dummy.generate(spec, null, 10);

module.exports = {
  handler: (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    const html = `
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

    response.write(html);

    response.end();
  }
}
