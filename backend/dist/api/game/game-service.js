import { ObjectId } from "mongodb";
import { dbService } from "../../services/database.js";
import { loggerService } from "../../services/logger.js";
import { utilityService } from "../../services/utility.js";
const GAMES_COLLECTION = 'game';
export const GameService = {
    query,
    getById,
    getByName,
    save,
    remove
};
async function query(filterBy = {}) {
    try {
        const collection = await dbService.getCollection(GAMES_COLLECTION);
        const pipeline = _buildPipeline(filterBy);
        return await collection.aggregate(pipeline).toArray();
    }
    catch (err) {
        loggerService.error('cannot find games', err);
        throw err;
    }
}
async function getById(gameId) {
    try {
        const collection = await dbService.getCollection(GAMES_COLLECTION);
        const game = await collection.findOne({ _id: new ObjectId(gameId) });
        return game;
    }
    catch (err) {
        loggerService.error(`Error finding game ${gameId}`, err);
        throw err;
    }
}
async function getByName(gameTitle) {
    try {
        const collection = await dbService.getCollection(GAMES_COLLECTION);
        const refinedName = utilityService.escapeRegExp(gameTitle);
        const game = await collection.findOne({ title: { $regex: `^${refinedName}$`, $options: 'i' } });
        if (game) {
            loggerService.info('found game: ', game._id);
            game.description = utilityService.formatText(game.description || '');
            game.controls = utilityService.formatText(game.controls || '');
            game.credits = utilityService.formatText(game.credits || '');
        }
        else
            loggerService.error('No game found with name:', gameTitle);
        return game;
    }
    catch (err) {
        loggerService.error(`Error finding game ${gameTitle}`, err);
        throw err;
    }
}
async function save(game) {
    const collection = await dbService.getCollection(GAMES_COLLECTION);
    try {
        if (game._id) {
            const { _id, ...gameToUpdate } = game;
            const id = _id instanceof ObjectId ? _id : new ObjectId(_id);
            const result = await collection.updateOne({ _id: id }, { $set: gameToUpdate });
            if (result.matchedCount === 0)
                throw new Error(`Game with id ${id.toHexString()} not found`);
            return game;
        }
        else {
            const response = await collection.insertOne(game);
            return { ...game, _id: response.insertedId };
        }
    }
    catch (err) {
        loggerService.error('Failed to save game', err);
        throw err;
    }
}
async function remove(gameId) {
    try {
        const collection = await dbService.getCollection(GAMES_COLLECTION);
        const { deletedCount } = await collection.deleteOne({
            _id: new ObjectId(gameId)
        });
        if (deletedCount === 0)
            throw new Error(`Game with id ${gameId} was not found`);
        return deletedCount;
    }
    catch (err) {
        loggerService.error(`cannot remove game ${gameId}`, err);
        throw err;
    }
}
function _buildPipeline(filterBy) {
    const pipeline = [];
    const criteria = { $match: {} };
    if (filterBy.title) {
        criteria.$match.title = { $regex: new RegExp(filterBy.title, 'i') };
    }
    if (filterBy.platform) {
        criteria.$match.platform = filterBy.platform;
    }
    if (filterBy.genre) {
        criteria.$match.genre = { $in: [filterBy.genre] };
    }
    if (filterBy.isGameJam) {
        criteria.$match.isGameJam = filterBy.isGameJam;
    }
    pipeline.push(criteria, { $sort: { createdAt: -1 } });
    return pipeline;
}
