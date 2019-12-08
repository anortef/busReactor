const request = require('supertest')

describe('loading express', function () {
  let server

  beforeEach(function () {
    server = require('../src/index')
  })

  afterEach(function () {
    server.close()
  })

  it('Don´t listen to nonsense', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  })

  it('misc status: /status', (done) => {
    request(server)
      .get('/status')
      .expect(200, done)
  })

  it('swagger is there: /api-docs', (done) => {
    request(server)
      .get('/api-docs')
      .expect(200, done)
  })
})
