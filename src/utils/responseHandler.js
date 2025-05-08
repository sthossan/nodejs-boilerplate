import { HTTP_STATUS } from '../utils/constants.js';

export const sendSuccess = (res, data, message = 'Success', status = 200) => {
    return res.status(status).json({
        success: true,
        successCode: status,
        message,
        data,
    });
};

export const sendError = (res, error, message) => {
    return res.status(error).json({
        success: false,
        errorCode: error || HTTP_STATUS.SERVER_ERROR,
        message: message || 'Something went wrong',
    });
};
