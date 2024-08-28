import { ObjectId } from 'mongodb'
import { User, UserQueryParams } from '../../interfaces/user.js'
import { dbService } from '../../services/database.js'
import { authService } from '../auth/auth-service.js'
import { loggerService } from '../../services/logger.js'

const USERS_COLLECTION = 'user'

export const userService = {
  query,
  remove,
  save,
  getById,
  getByEmail,
}

async function query(filterBy: UserQueryParams = {}): Promise<User[]> {
  try {
    const collection = await dbService.getCollection(USERS_COLLECTION)
    const pipeline = _buildPipeline(filterBy)

    return await collection.aggregate<User>(pipeline).toArray()
  } catch (err) {
    loggerService.error('cannot find users', err)
    throw err
  }
}

async function getById(userId: ObjectId): Promise<User | null> {
  try {
    const collection = await dbService.getCollection(USERS_COLLECTION)

    const user = await collection.findOne<User>(
      { _id: new ObjectId(userId) })
    return user
  } catch (err) {
    loggerService.error(`Error with finding user ${userId}`, err)
    throw err
  }
}

async function getByEmail(email: string): Promise<User | null> {
  try {
    const collection = await dbService.getCollection(USERS_COLLECTION)
    const user = await collection.findOne({ email })

    return user
  } catch (err) {
    loggerService.error(`Error with finding user with email: ${email}`, err)
    throw err
  }
}

async function save(user: User): Promise<User> {
  const collection = await dbService.getCollection(USERS_COLLECTION)

  try {
    if (user._id) {
      const { _id, ...updatedUser } = user
      const id = _id instanceof ObjectId ? _id : new ObjectId(_id)

      if (updatedUser.password) {
        updatedUser.password = await authService.checkPassword(updatedUser.password)
      }
      const result = await collection.updateOne(
        { _id: id }, { $set: updatedUser })

      if (result.matchedCount === 0) throw new Error(`User with id ${id.toHexString()} not found`)

      return { ...updatedUser, _id: id }
    } else {
      const response = await collection.insertOne(user)
      return { ...user, _id: response.insertedId }
    }
  } catch (err) {
    loggerService.error('Failed to save user', err)
    throw err
  }
}

async function remove(userId: ObjectId): Promise<number> {
  try {
    const collection = await dbService.getCollection(USERS_COLLECTION)
    const { deletedCount } = await collection.deleteOne({
      _id: new ObjectId(userId)
    })
    if (deletedCount === 0) throw new Error(`User with id ${userId} was not found`)

    return deletedCount
  } catch (err) {
    loggerService.error(`cannot remove user ${userId}`, err)
    throw err
  }
}

function _buildPipeline(filterBy: UserQueryParams): any {
  const criteria: any = {}

  return criteria
}