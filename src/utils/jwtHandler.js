import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: process.env.JWT_ALGORITHM,
        expiresIn: process.env.JWT_EXPIRES_IN,
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE
    });
};

export const verifyToken = (token) => {
    const receive_token = token.split(' ')[1].trim();
    return new Promise((resolve, reject) => {
        jwt.verify(
            receive_token,
            process.env.JWT_SECRET,
            {
                algorithms: [process.env.JWT_ALGORITHM || 'HS256'], // fallback if not set
                issuer: process.env.JWT_ISSUER,
                audience: process.env.JWT_AUDIENCE,
            },
            (err, decoded) => {
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        return reject(new Error('Token expired'));
                    } else if (err.name === 'JsonWebTokenError') {
                        return reject(new Error('Invalid token'));
                    } else {
                        return reject(new Error('Token verification failed'));
                    }
                }
                resolve(decoded);
            }
        );
    });
}