const Game = require('../models/game.js')

exports.home = function(request, reply) {
  Game.find({}, function(err, games) {
    if(err) {
      throw err
    }

    return reply.view('home', {games: games})
  })
}

exports.newGameView = function(request, reply) {
  return reply.view('newGame')
}

exports.newGame = function(request, reply) {
  const game = new Game({
    title: request.payload.title,
    description: request.payload.description,
    code: request.payload.code
  })

  game.save(function(err, game) {
    if(err) {
      throw err
    }

    return reply.redirect('/')
  })
}

exports.showGame = function(request, reply) {
  const id = encodeURIComponent(request.params.id)

  Game.findById(id, function(err, game) {
    if(err) {
      throw err
    }
    console.log(game)

    return reply.view('showGame', {game: game})
  })
}
