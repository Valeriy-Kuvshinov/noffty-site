import { ObjectId } from "mongodb"
import { Product, ProductQueryParams, MatchCriteria } from "../../models/game.js"
import { dbService } from "../../services/db.service.js"
import { loggerService } from "../../services/logger.service.js"

const GAMES_COLLECTION = 'game'

export const GameService = {
  query,
  getById,
  getByName,
  save,
  remove
}

async function query(filterBy: ProductQueryParams = {}): Promise<Product[]> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)
    const pipeline = _buildPipeline(filterBy)

    return await collection.aggregate<Product>(pipeline).toArray()
  } catch (err) {
    loggerService.error('cannot find games', err)
    throw err
  }
}

async function getById(gameId: ObjectId): Promise<Product | null> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)

    const product = await collection.findOne<Product>(
      { _id: new ObjectId(gameId) })
    return product
  } catch (err) {
    loggerService.error(`Error finding game ${gameId}`, err)
    throw err
  }
}

async function getByName(gameName: string): Promise<Product | null> {
  try {
    const collection = await dbService.getCollection(GAMES_COLLECTION)

    const product = await collection.findOne<Product>(
      { name: { $regex: `^${gameName}$`, $options: 'i' } })

    if (product) loggerService.info('found game: ', product._id)
    else loggerService.error('No game found with name:', gameName)

    return product
  } catch (err) {
    loggerService.error(`Error finding game ${gameName}`, err)
    throw err
  }
}

async function save(game: Product): Promise<Product> {
  const collection = await dbService.getCollection(GAMES_COLLECTION)

  try {
    if (game._id) {
      const { _id, ...productToUpdate } = game
      const id = _id instanceof ObjectId ? _id : new ObjectId(_id)

      const result = await collection.updateOne(
        { _id: id }, { $set: productToUpdate })

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

function _buildPipeline(filterBy: ProductQueryParams): object[] {
  const pipeline: object[] = []

  const criteria: MatchCriteria = { $match: {} }

  if (filterBy.search) {
    criteria.$match.$or = [
      { name: { $regex: new RegExp(filterBy.search, 'i') } },
      { description: { $regex: new RegExp(filterBy.search, 'i') } }
    ]
  }

  pipeline.push(criteria)
  return pipeline
}