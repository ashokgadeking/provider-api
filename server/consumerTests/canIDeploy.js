'use strict'

const pact = require('@pact-foundation/pact-node')

const opts = {
  pactBroker: 'http://pact-broker:9292',
  pacticipants: [ { name: 'Client', latest: true }, { name: 'ProductService', latest: true } ]
}

pact.canDeploy(opts).then(() => {
  console.log('success')
  process.exit(0)
}).catch((error) => {
  console.log('failed', error)
  process.exit(1)
})