export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

export const MESSAGES = {
    SUCCESS: 'Successful',
    USER_CREATED: 'User registered successfully',
    LOGIN_SUCCESS: 'Login successful',
    UNAUTHORIZED: 'Invalid credentials',
    NOT_FOUND: 'Resource not found',
    SERVER_ERROR: 'Internal server error',
    BAD_REQUEST: 'Bad request',
    FORBIDDEN: 'Forbidden',
    USER_NOT_FOUND: 'User not found',
    USER_ALREADY_EXISTS: 'User already exists',
    INVALID_CREDENTIALS: 'Invalid credentials',
    USER_UPDATED: 'User updated successfully',
    USER_DELETED: 'User deleted successfully',
    USER_VERIFIED: 'User verified successfully',
};

export const ROLES = {
    SUPER_ADMIN: 'superadmin',
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
};