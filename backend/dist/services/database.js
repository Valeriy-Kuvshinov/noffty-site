import mongoDB from 'mongodb';
const { MongoClient } = mongoDB;
import { config } from '../config/index.js';
import { loggerService } from './logger.js';
export const dbService = {
    getCollection,
};
let dbConn = null;
async function getCollection(collectionName) {
    try {
        const db = await _connect();
        const collection = db.collection(collectionName);
        return collection;
    }
    catch (err) {
        loggerService.error('Failed to get Mongo collection', err);
        throw err;
    }
}
async function _connect() {
    if (dbConn)
        return dbConn;
    try {
        const client = await MongoClient.connect(config.dbURL);
        const db = client.db(config.dbName);
        dbConn = db;
        return db;
    }
    catch (err) {
        loggerService.error('Cannot Connect to DB', err);
        throw err;
    }
}
