const ecc = require('eosjs-ecc')



ecc.randomKey().then(privateKey => {
  console.log('Private Key:\t', privateKey) // wif
  console.log('Public Key:\t', ecc.privateToPublic(privateKey)) // EOSkey...
  })
