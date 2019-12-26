const url = require('url');
const http = require('http');
const requestHandler = require('./request_handler.js');

const app = http.createServer(requestHandler.handler);

app.listen(3000);
