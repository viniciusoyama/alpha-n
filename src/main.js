const Hapi = require('hapi');
const Vision = require('@hapi/vision');
const Ejs = require('ejs');
const Routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {

  await server.register(Vision);

  server.views({
    engines: { ejs: Ejs },
    relativeTo: __dirname,
    path: 'templates'
  });

  server.route(Routes);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
