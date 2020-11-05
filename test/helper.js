// Use this file to avoid repeating yourself (DRY!), helper functions.

const InitMock = require('./testdata/init-mock')
const config = require('config')

/**
 * Mocks external endpoints for app initalization
 */
const mockedAppInit = function () {
  const initMock = new InitMock()
  initMock.passportConfigEndpoint()
  initMock.umaConfigurationEndpoint()
  initMock.umaTokenEndpoint()

  // Mock discoveryURL of providers who has openid-client strategy
  const providers = config.get('passportConfigAuthorizedResponse').providers
  providers.forEach((provider) => {
    if (provider.passportStrategyId === 'openid-client') {
      initMock.discoveryURL(provider.options.issuer)
    }
  })
}

module.exports = {
  mockedAppInit
}
