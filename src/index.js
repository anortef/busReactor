const express = require('express')
const log = require('./lib/log').getInstance()
const settings = require('./settings')

const app = express()

const expressSwagger = require('express-swagger-generator')(app)

const options = {
  swaggerDefinition: {
    info: {
      title: 'busReactor',
      version: '1.0.0'
    },
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http']
  },
  basedir: __dirname,
  files: ['./routes/**/*.js']
}

const healthRoutes = require('./routes/health')

app.use(function (req, res, next) {
  log.debug({
    call: req.originalUrl,
    method: req.method
  })
  next()
})

app.use(healthRoutes)
expressSwagger(options)
const server = app.listen(settings.appPort, settings.appHost, () => {
  log.info(`server started at http://${settings.appHost}:${settings.appPort}`)
})

module.exports = server
