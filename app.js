const Hapi = require('Hapi')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 4000
})

const routes = require('./routes')(server)

server.start((err) => {
  if(err) {
    throw err
  }

  console.log("listening on port 3000")
})
