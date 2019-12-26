const requestHandler = require('./request_handler.js');

class FakeResponse {
  constructor() {
    this.wroteValues = [];
  }

  write(value) {
    this.wroteValues.push(value)
  }

  end() {}
  writeHead() {}
}

test('Responds with 10 customers', () => {
  let myFakeResponse = new FakeResponse();
  requestHandler.handler({}, myFakeResponse);
  let htmlResponse = myFakeResponse.wroteValues[0];
  expect(htmlResponse.match(/<li>Name:/g).length).toBe(10)
});
