const Hapi = require('hapi');
const Routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {
  server.route(Routes);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
