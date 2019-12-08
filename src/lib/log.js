const settings = require('../settings')
const bunyan = require('bunyan')

let instance = null

module.exports.getInstance = function () {
  if (!instance) {
    instance = bunyan.createLogger({
      name: 'busReactor',
      level: settings.logLevel,
      stream: process.stdout
    })
  }
  return instance
}
