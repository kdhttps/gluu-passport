const chai = require('chai')
const testConfig = require('../config/test')
const { Strategy } = require('openid-client')
const path = require('path')
const rewire = require('rewire')
const rewiredOpenIDClientHelper = rewire('../server/utils/openid-client-helper')

const InitMock = require('./testdata/init-mock')

const assert = chai.assert

describe('Test OpenID Client Helper', () => {
  const testProvider = testConfig.passportConfigAuthorizedResponse.providers.find(p => p.id === 'oidccedev6privatejwt')
  let kid = null
  const jwksFilePath = `../server/jwks/${testProvider.id}.json`

  describe('jwksDir', () => {
    const jwksDir = rewiredOpenIDClientHelper.__get__('jwksDir')

    it('jwksDir should exist', () => {
      assert.exists(jwksDir)
    })

    it('jwksDir should be function', () => {
      assert.isFunction(jwksDir, 'jwksDir is not a function')
    })

    it('jwksDir should be return correct path', () => {
      const expectedJWKSFolderPath = path.join(__dirname, '../server/jwks')
      assert.equal(jwksDir(), expectedJWKSFolderPath)
    })
  })

  describe('writeJWKS test', () => {
    const writeJWKS = rewiredOpenIDClientHelper.__get__('writeJWKS')

    it('writeJWKS should exist', () => {
      assert.exists(writeJWKS)
    })

    it('writeJWKS should be function', () => {
      assert.isFunction(writeJWKS, 'writeJWKS is not a function')
    })

    it('writeJWKS should write content in file', async () => {
      const jwksDir = rewiredOpenIDClientHelper.__get__('jwksDir')
      const fileName = path.join(jwksDir(), testProvider.id + '-unit-test.json')
      await writeJWKS(fileName, JSON.stringify({ ktype: 'RS256' }))
      const jwksFile = require(fileName)
      assert.equal(jwksFile.ktype, 'RS256')
    })
  })

  describe('generateJWKS test', () => {
    const generateJWKS = rewiredOpenIDClientHelper.__get__('generateJWKS')

    it('generateJWKS should exist', () => {
      assert.exists(generateJWKS)
    })

    it('generateJWKS should be function', () => {
      assert.isFunction(generateJWKS, 'generateJWKS is not a function')
    })

    it('generateJWKS should generate jwks for provider in jwks folder', async () => {
      await generateJWKS(testProvider)
      assert.exists(jwksFilePath, `${jwksFilePath} file not found`)
    })

    it('make sure jwks has keys and kid', () => {
      const jwks = require(jwksFilePath)
      assert.isArray(jwks.keys, 'keys not found in jwks')
      kid = jwks.keys[0].kid
      assert.exists(kid, 'kid not found in jwks')
    })

    it('make sure generateJWKS not regenerating jwks again and rewrite existing jwks data', async () => {
      await generateJWKS(testProvider)
      const jwks = require(jwksFilePath)
      assert.equal(kid, jwks.keys[0].kid, `${kid} is not matching with ${jwks.keys[0].kid}`)
    })
  })

  describe('getClient test', () => {
    const getClient = rewiredOpenIDClientHelper.__get__('getClient')

    it('getClient should exist', () => {
      assert.exists(getClient)
    })

    it('getClient should be function', () => {
      assert.isFunction(getClient, 'getClient is not a function')
    })

    it('getClient should return the client object to initialize openid-client strategy', async () => {
      const initMock = new InitMock()
      initMock.discoveryURL(testProvider.options.issuer)

      const client = await getClient(testProvider)
      assert.exists(client, 'failed to make client for openid-client strategy')
      const strategy = new Strategy({ client }, () => {})
      assert.exists(strategy, 'Failed to create strategy')
    })

    it('we have now already client initialize so we should get client from state', async () => {
      const client = await getClient(testProvider)
      assert.exists(client, 'failed to make client for openid-client strategy')
      const strategy = new Strategy({ client }, () => {})
      assert.exists(strategy, 'Failed to create strategy')
    })
  })
})
