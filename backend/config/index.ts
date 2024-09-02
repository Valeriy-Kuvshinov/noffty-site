import dotenv from 'dotenv'

dotenv.config()

interface Config {
    dbURL: string
    dbName: string
}

const config: Config = {
    dbURL: process.env.DB_URL || '',
    dbName: process.env.DB_NAME || '',
}

export { config }