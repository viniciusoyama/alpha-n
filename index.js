const url = require('url');
const http = require('http');
var dummy = require('dummy-data');

var spec = {
  name: "String",
  email: "String"
};

var customers = dummy.generate(spec, null, 10);

const app = http.createServer((request, response) => {

  response.writeHead(200, { "Content-Type": "text/html" });

  const html = `
    <html>
      <head>
      </head>
      <body>
        ${
          customers.map((c) => `<li>${c.name} - ${c.email}</li>`).join('')
        }
      </body>
    </html>
  `;
  response.write(html);

  response.end();
});

app.listen(3000);
