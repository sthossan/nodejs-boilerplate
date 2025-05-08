export const logger = {
    info: (msg) => console.log(`ℹ️  INFO: ${msg}`),
    warn: (msg) => console.warn(`⚠️  WARN: ${msg}`),
    error: (msg) => console.error(`❌ ERROR: ${msg}`),
};


// Example in a controller or service:
// import { logger } from '../utils/logger.js';

// logger.info('User login initiated');
// logger.error('User login failed');
