import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_DB
} = process.env;

const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`;

export const connectMongo = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB via Mongoose');
    } catch (error) {
        console.error('Unable to connect to DB:', error);
    }
};

export const closeMongo = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
    }
};

export default mongoose;
