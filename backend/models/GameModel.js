const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
