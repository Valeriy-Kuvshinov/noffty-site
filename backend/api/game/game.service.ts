import { ObjectId } from "mongodb"
import { Game, GameQueryParams, MatchCriteria } from "../../models/game.js"
import { dbService } from "../../services/db.service.js"
import { loggerService } from "../../services/logger.service.js"
import { utilityService } from "../../services/utility.service.js"

const GAMES_COLLECTION = 'game'

export const GameService = {
  query,
  getById,
  getByName,
  save,
  remove
}

async function query(filterBy: GameQueryParams = {}): Promise<Game[]> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)
    const pipeline = _buildPipeline(filterBy)

    return await collection.aggregate<Game>(pipeline).toArray()
  } catch (err) {
    loggerService.error('cannot find games', err)
    throw err
  }
}

async function getById(gameId: ObjectId): Promise<Game | null> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)

    const game = await collection.findOne<Game>(
      { _id: new ObjectId(gameId) })
    return game
  } catch (err) {
    loggerService.error(`Error finding game ${gameId}`, err)
    throw err
  }
}

async function getByName(gameName: string): Promise<Game | null> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)

    const refinedName = utilityService.escapeRegExp(gameName)
    const game = await collection.findOne<Game>(
      { name: { $regex: `^${refinedName}$`, $options: 'i' } })

    if (game) {
      loggerService.info('found game: ', game._id)
      game.description = utilityService.formatText(game.description || '')
      game.controls = utilityService.formatText(game.controls || '')
      game.credits = utilityService.formatText(game.credits || '')
    }
    else loggerService.error('No game found with name:', gameName)

    return game
  } catch (err) {
    loggerService.error(`Error finding game ${gameName}`, err)
    throw err
  }
}

async function save(game: Game): Promise<Game> {
  const collection = await dbService.getCollection(GAMES_COLLECTION)

  try {
    if (game._id) {
      const { _id, ...gameToUpdate } = game
      const id = _id instanceof ObjectId ? _id : new ObjectId(_id)

      const result = await collection.updateOne(
        { _id: id }, { $set: gameToUpdate })

      if (result.matchedCount === 0) throw new Error(`Game with id ${id.toHexString()} not found`)

      return game
    } else {
      const response = await collection.insertOne(game)
      return { ...game, _id: response.insertedId }
    }
  } catch (err) {
    loggerService.error('Failed to save game', err)
    throw err
  }
}

async function remove(gameId: ObjectId): Promise<number> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)
    const { deletedCount } = await collection.deleteOne({
      _id: new ObjectId(gameId)
    })
    if (deletedCount === 0) throw new Error(`Game with id ${gameId} was not found`)

    return deletedCount
  } catch (err) {
    loggerService.error(`cannot remove game ${gameId}`, err)
    throw err
  }
}

function _buildPipeline(filterBy: GameQueryParams): object[] {
  const pipeline: object[] = []

  const criteria: MatchCriteria = { $match: {} }

  if (filterBy.name) {
    criteria.$match.name = { $regex: new RegExp(filterBy.name, 'i') }
  }

  if (filterBy.platform) {
    criteria.$match.platform = filterBy.platform
  }

  if (filterBy.genre) {
    criteria.$match.genre = { $in: [filterBy.genre] }
  }

  if (filterBy.isGameJam) {
    criteria.$match.isGameJam = filterBy.isGameJam
  }

  pipeline.push(criteria, { $sort: { createdAt: -1 } })

  return pipeline
}