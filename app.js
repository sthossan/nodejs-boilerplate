import express from 'express';
import dotenv from 'dotenv';
import routers from './src/routes/index.js';
import cors from 'cors';
import * as mongoose from './src/config/db.js';
import { errorMiddleware } from './src/middlewares/error.middleware.js';

const app = express();
app.use(express.json());
// ✅ CORS configuration
app.use(cors({
    origin: process.env.FRONT_END || 'http://localhost:3000', // * to allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Optional: allow cookies/auth headers
}));
app.use(errorMiddleware);
dotenv.config();


// ✅ Load all routes
app.use('/api/v1/', routers);

// ✅ Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'User Service is running' });
});

const PORT = process.env.PORT || 5000;

// Start server after DB connects
mongoose.connectMongo().then(() => {
    app.listen(PORT, () => console.log(`User Service running at http://localhost:${PORT}`));
}).catch((err) => {
    console.error('MongoDB connection failed. Server not started.', err);
});

