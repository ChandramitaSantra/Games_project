const express = require('express');
const { createGame, getGame, getAllGames, updateGame, deleteGame } = require('../controllers/gameController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       required:
 *         - name
 *         - url
 *         - author
 *         - publishedDate
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the game
 *         name:
 *           type: string
 *           description: The name of the game
 *         url:
 *           type: string
 *           description: The URL of the game
 *         author:
 *           type: string
 *           description: The author of the game
 *         publishedDate:
 *           type: string
 *           format: date
 *           description: The published date of the game
 *       example:
 *         id: 603eeb4b5e39fb00171adf6c
 *         name: "The Legend of Zelda"
 *         url: "https://example.com/zelda"
 *         author: "Nintendo"
 *         publishedDate: "1986-02-21"
 */

/**
 * @swagger
 * /api/games:
 *   post:
 *     summary: Create a new game
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       201:
 *         description: Game created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       500:
 *         description: Server error
 * 
 *   get:
 *     summary: Get all games
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: List of all games
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Game'
 *       500:
 *         description: Server error
 */
router.route('/').post(createGame).get(getAllGames);

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     summary: Get a game by ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The game ID
 *     responses:
 *       200:
 *         description: The game information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: Game not found
 *       500:
 *         description: Server error
 * 
 *   put:
 *     summary: Update a game by ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The game ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       200:
 *         description: The updated game
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Game'
 *       404:
 *         description: Game not found
 *       500:
 *         description: Server error
 * 
 *   delete:
 *     summary: Delete a game by ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The game ID
 *     responses:
 *       200:
 *         description: Game deleted
 *       404:
 *         description: Game not found
 *       500:
 *         description: Server error
 */
router.route('/:id').get(getGame).put(updateGame).delete(deleteGame);

module.exports = router;
