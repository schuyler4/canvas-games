const Code = require('code')
const expect = Code.expect
const Lab = require('lab')
const lab = exports.lab = Lab.script();
const server = require('../app.js')
const Game = require('../models/game.js')

lab.experiment('views', () => {

  lab.test('the home page will work', (done) => {
    server.inject('/', (response) => {
      expect(response.statusCode).to.equal(200)
      expect(response.result).to.equal
        ('<h1> this is the home page </h1>\n<p>this is the home page</p>\n')
      done()
    })
  })

  lab.test('new game page', (done) => {
    server.inject('/game/new', (response) => {
      expect(response.statusCode).to.equal(200)
      done()
    })
  })

  lab.test('create a game', (done) => {
    const gameOptions = {
      method: 'POST',
      url: '/game/new',
      payload: JSON.stringify({
        title: 'a game',
        description: 'a fun game',
        code: 'console.log("hello game")'
      })
    }

    const query = {}
    Game.find(query, function(err, beforeGames) {
      if(err) {
        throw err
      }

      const before = beforeGames.length
      server.inject(gameOptions, (response) => {

        Game.find(query, function(err, afterGames) {
          const after = afterGames.length
          expect(after).to.equal(before + 1)
          done()
        })

      })
    })
  })

  /* this should be a test for form validation once that part is done */
  /*lab.test('bad new game page', (done) => {
    const gameOptions = {
      method: 'POST',
      url: '/game/new',
      payload: {
        title: 'dafsf',
        description: 'hello',
        code: 'fdsafadsf'
      }
    }

    let beforeCount
    Game.find({}, function(err, games) {
      beforeCount = games.length

    })

    server.inject(gameOptions, (response) => {
      let afterCount

      Game.find({}, function(err, games) {
        afterCount = games.length
      })

      expect(beforeCount).to.equal(afterCount + 1)
      done()
    })
  })*/
  lab.test('show a game', function(done) {
    const firstQuery = {}
    Game.find(firstQuery, function(err, games) {
      if(err) {
        throw err
      }
      const gameId = games[7].id

      server.inject('/game/' + game.id, (response) {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })
})
