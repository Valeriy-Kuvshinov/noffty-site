import dotenv from 'dotenv';
dotenv.config();
const config = {
    dbURL: process.env.DB_URL || '',
    dbName: process.env.DB_NAME || '',
    isGuestMode: true,
};
export { config };
