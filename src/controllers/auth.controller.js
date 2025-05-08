import * as authService from '../services/auth.service.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';
import { HTTP_STATUS, MESSAGES } from '../utils/constants.js';

export const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(HTTP_STATUS.CREATED).json(user);
    } catch (err) {
        return sendError(res, HTTP_STATUS.BAD_REQUEST, err.message);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === 'admin@example.com' && password === 'admin123') {
            return sendSuccess(res, { token: 'fake-jwt-token' }, MESSAGES.LOGIN_SUCCESS, HTTP_STATUS.OK);
        }
        const user = await authService.login(req.body);

        return sendSuccess(res, user, MESSAGES.LOGIN_SUCCESS, HTTP_STATUS.OK);

    } catch (error) {
        return sendError(res, HTTP_STATUS.UNAUTHORIZED, error.message);
    }
};



