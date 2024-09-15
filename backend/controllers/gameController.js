const Game = require('../models/gameModel');

// Create Single Game
const createGame = async (req, res) => {
  const { name, url, author, publishedDate } = req.body;
  const game = new Game({ name, url, author, publishedDate });
  await game.save();
  res.status(201).json(game);
};

// Read Single Game
const getGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};

// Get All Games
const getAllGames = async (req, res) => {
  const games = await Game.find({});
  res.json(games);
};

// Update Single Game
const updateGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (game) {
    game.name = req.body.name || game.name;
    game.url = req.body.url || game.url;
    game.author = req.body.author || game.author;
    game.publishedDate = req.body.publishedDate || game.publishedDate;
    const updatedGame = await game.save();
    res.json(updatedGame);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};

// Delete Single Game
const deleteGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (game) {
    await Game.findByIdAndDelete(req.params.id); // Use findByIdAndDelete
    res.json({ message: 'Game deleted' });
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};


module.exports = { createGame, getGame, getAllGames, updateGame, deleteGame };
