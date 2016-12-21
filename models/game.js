const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  title: {
    type: String,
    max: [100, 'Your title is to long'],
    required: [true, 'the title is required']
  },
  description: {
    type: String,
    required: [true, 'the description is required']
  },
  code: String
})

/*gameSchema.pre('save', function(next) {

})*/

module.exports = mongoose.model('Game', gameSchema)
