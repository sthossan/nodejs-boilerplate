import * as profileService from '../services/profile.service.js';
import * as jwtHandler from '../utils/jwtHandler.js';
import { HTTP_STATUS, MESSAGES } from '../utils/constants.js';
import { sendSuccess, sendError } from '../utils/responseHandler.js';

export const getProfile = async (req, res) => {
    try {
        const decoded = await jwtHandler.verifyToken(req.headers.authorization);
        const user = await profileService.getProfile(decoded.userId);

        return sendSuccess(res, user, MESSAGES.SUCCESS, HTTP_STATUS.OK);
    } catch (err) {
        return sendError(res, HTTP_STATUS.BAD_REQUEST, err.message);
    }
};

export const updateProfile = async (req, res) => {
    try {
        const decoded = await jwtHandler.verifyToken(req.headers.authorization);
        await profileService.updateProfile(decoded.userId, req.body);

        res.status(HTTP_STATUS.OK).json(MESSAGES.USER_UPDATED);
    } catch (err) {
        return sendError(res, HTTP_STATUS.BAD_REQUEST, err.message);
    }
};
