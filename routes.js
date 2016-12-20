const controllers = require('./controller')
const inert = require('inert')

module.exports = function(server) {
  server.register(inert), (err) => {
    if(err) {
      throw err
    }
    console.log("panda")

    server.route({ method: 'GET', path:'/', handler: controllers.home});
  }
}
