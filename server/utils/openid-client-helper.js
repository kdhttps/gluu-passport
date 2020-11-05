const { JWK: { generateSync }, JWKS: { KeyStore, asKeyStore } } = require('jose')
const { Issuer } = require('openid-client')
const fs = require('fs')
const path = require('path')
const R = require('ramda')
const Promise = require('bluebird')
const misc = require('../utils/misc')
const openF = misc.curry2AndFlip(Promise.promisify(fs.open))
const writeF = misc.curry2AndFlip(Promise.promisify(fs.write))
const logger = require('../utils/logging')

function writeJWKS (fileName, jwks) {
  let fd
  const chain = misc.pipePromise(
    openF('w'),
    fdesc => {
      // Save file descriptor in a temp variable (will be needed afterwards)
      fd = fdesc
      return fd
    },
    writeF(jwks),
    written => {
      logger.log2('verbose', `${written} bytes were written`)
      return fs.closeSync(fd) // returns undefined
    }
  )

  logger.log2('info', `Creating file ${fileName}`)
  return chain(fileName)
}

const jwksDir = R.once(() => {
  const clientJWKSPath = path.join(`${process.cwd()}/server`, 'jwks')
  if (!fs.existsSync(clientJWKSPath)) {
    fs.mkdirSync(clientJWKSPath)
  }
  return clientJWKSPath
})

// generate jwks
async function generateJWKS (provider) {
  const keyType = generateSync('RSA')
  const keyStore = new KeyStore(keyType)
  const fileName = path.join(jwksDir(), provider.id + '.json')
  if (!fs.existsSync(fileName)) {
    await writeJWKS(fileName, JSON.stringify(keyStore.toJWKS(true)))
  }
}

const clients = []

// Creates a client
async function getClient (provider) {
  const { options } = provider
  let client = clients.find(c => c.id === provider.id)
  if (client) {
    return client.client
  }

  const issuer = await Issuer.discover(options.issuer)

  if (options.token_endpoint_auth_method && options.token_endpoint_auth_method === 'private_key_jwt') {
    // generate jwks
    await generateJWKS(provider)
    const jwks = require(path.join(jwksDir(), provider.id + '.json'))
    const ks = asKeyStore(jwks)
    client = new issuer.Client(options, ks.toJWKS(true))
  } else {
    client = new issuer.Client(options)
  }

  clients.push({ id: provider.id, client })
  return client
}

module.exports = {
  getClient,
  generateJWKS
}
