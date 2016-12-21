const Hapi = require('Hapi')
const inert = require('inert')
const mongoose = require('mongoose')
const handlebars = require('handlebars')
const vision = require('vision')

const server = new Hapi.Server()
module.exports = server

server.connection({port: 4000 })

server.register(vision, (err) => {
  if(err) {
    throw err
  }

  server.views({
    engines: {
      html: handlebars
    },
    relativeTo: __dirname,
    path: 'public/html'
  })
})

mongoose.Promise = global.Promise;
mongoose.connect
  ('mongodb://mareknewton:123456@ds141088.mlab.com:41088/canvas-games')

require('./routes')(server)

server.start((err) => {
  if(err) {
    throw err
  }

  console.log("listening on port 4000");
})
