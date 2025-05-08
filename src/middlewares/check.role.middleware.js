import { HTTP_STATUS, MESSAGES } from '../utils/constants.js';

export const checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(HTTP_STATUS.FORBIDDEN).json({ error: 'Forbidden: Insufficient role' });
        }
        next();
    };
};
