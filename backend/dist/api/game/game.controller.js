import express from 'express';
import { GameService } from './game.service.js';
import { loggerService } from '../../services/logger.js';
// game routes
export const gameRoutes = express.Router();
gameRoutes.get('/', _getGames);
gameRoutes.get('/by-name/:title', _getGameByName);
gameRoutes.get('/check-name/:title', _checkNameAvailable);
gameRoutes.get('/by-id/:id', _getGameById);
gameRoutes.post('/add/', _addGame);
gameRoutes.put('/update/:id', _updateGame);
gameRoutes.delete('/delete/:id', _removeGame);
// game controller functions
async function _getGames(req, res) {
    try {
        const { title, platform, genre, isGameJam } = req.query;
        let filterBy = { title, platform, genre, isGameJam };
        loggerService.debug('Filtering games by: ', filterBy);
        const games = await GameService.query(filterBy);
        res.json(games);
    }
    catch (err) {
        loggerService.error('Failed to get games', err);
        res.status(500).send({ err: 'Failed to get games' });
    }
}
async function _getGameById(req, res) {
    try {
        const game = await GameService.getById(req.params.id);
        res.json(game);
    }
    catch (err) {
        loggerService.error('Failed to get game', err);
        res.status(500).send({ err: 'Failed to get game' });
    }
}
async function _getGameByName(req, res) {
    try {
        const gameName = decodeURIComponent(req.params.title);
        const game = await GameService.getByName(gameName);
        res.json(game);
    }
    catch (err) {
        loggerService.error('Failed to get game by name', err);
        res.status(500).send({ err: 'Failed to get game by name' });
    }
}
async function _checkNameAvailable(req, res) {
    try {
        const gameName = req.params.title;
        const game = await GameService.getByName(gameName);
        if (game)
            loggerService.error('This game name is not available: ', game.title);
        else
            loggerService.info('This game name is available: ', gameName);
        res.json({ isAvailable: !game });
    }
    catch (err) {
        loggerService.error('Error with checking availability of name', err);
        res.status(500).send({ err: 'Error with checking availability of name' });
    }
}
async function _addGame(req, res) {
    try {
        const game = req.body;
        loggerService.debug('Creating game: ', game);
        const addedGame = await GameService.save(game);
        res.json(addedGame);
    }
    catch (err) {
        loggerService.error('Failed to add game', err);
        res.status(500).send({ err: 'Failed to add game' });
    }
}
async function _updateGame(req, res) {
    try {
        const game = { ...req.body, _id: req.params.id };
        loggerService.debug('Updating game: ', game._id);
        const updatedGame = await GameService.save(game);
        res.json(updatedGame);
    }
    catch (err) {
        loggerService.error('Failed to update game', err);
        res.status(500).send({ err: 'Failed to update game' });
    }
}
async function _removeGame(req, res) {
    try {
        const gameId = req.params.id;
        loggerService.debug('Removing game with _id: ', gameId);
        await GameService.remove(gameId);
        res.status(200).send({ msg: 'Game successfully removed' });
    }
    catch (err) {
        loggerService.error('Failed to remove game', err);
        res.status(500).send({ err: 'Failed to remove game' });
    }
}
