const { Given, When, Then, Before } = require('cucumber')
const got = require('got')
const chai = require('chai')
const assert = chai.assert
const InitMock = require('../../testdata/init-mock')
const server = require('../../../server/app')

Before({ timeout: 600 * 1000 }, (done) => {
  // mock init external endpoints
  const initMock = new InitMock()
  initMock.passportConfigEndpoint()
  initMock.umaTokenEndpoint()
  initMock.umaConfigurationEndpoint()

  // waits for the server to start (app.listen)
  server.on('appStarted', () => {
    console.log('app started...')
    done()
  })
})

Given('endpoint requested {int} times by the same client', { timeout: 600 * 1000 }, async (max) => {
  for (let i = 0; i < max; i++) {
    const response = await got('http://127.0.0.1:8090/passport/health-check', { retry: 0 })
    assert.equal(response.statusCode, 200,
      'response.statusCode is NOT 200')
  }
})

When('endpoint is requested one more times', async () => {
  const response = await got('http://127.0.0.1:8090/passport/health-check', { retry: 0, throwHttpErrors: false })
  assert.equal(response.statusCode, 429,
    'response.statusCode is NOT 429')
})

Then('response status code should be {int}', async (httpStatusCode) => {
  const response = await got('http://127.0.0.1:8090/passport/health-check', { retry: 0, throwHttpErrors: false })
  assert.equal(response.statusCode, httpStatusCode,
    'response.statusCode is NOT 429')
})

Then('response body shoulb be {string}', async (message) => {
  const response = await got('http://127.0.0.1:8090/passport/health-check', { retry: 0, throwHttpErrors: false })
  assert.equal(response.body, message)
})
