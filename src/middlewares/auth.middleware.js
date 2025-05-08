import { User } from '../models/user.model.js';
import { HTTP_STATUS, MESSAGES } from '../utils/constants.js';
import * as jwtHandler from '../utils/jwtHandler.js';

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res
            .status(HTTP_STATUS.UNAUTHORIZED)
            .json({ error: 'No token or invalid token format' });

    try {
        const decoded = await jwtHandler.verifyToken(authHeader);

        // req.user = await User.findByPk(decoded.userId);
        req.user = {
            id: decoded.userId,
            role: decoded.role,
        };

        next();
    } catch (err) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json({ error: err.message });
    }
};

export default authMiddleware;