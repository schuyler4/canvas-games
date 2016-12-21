const controllers = require('./controllers/game.js')
const inert = require('inert')

module.exports = function(server) {
  server.register(inert, (err) => {
    if(err) {
      throw err
    }

    server.route({ method: 'GET', path:'/', handler: controllers.home});

    server.route({ method: 'GET', path:'/game/new', handler: controllers.newGameView})
    server.route({ method: 'POST', path: '/game/new', handler: controllers.newGame})

    server.route({ method: 'GET', path: '/game/{id}', handler: controllers.showGame})
  })
}
