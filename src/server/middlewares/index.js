
/**
 * @module middleware
 * @description Returns all general middleware modules for easy accessibility
 * @requires middlewares/cors
 * @returns {Object} {auth, cors, errors, permissions}
 */

/* Custom Dependencies */
const cors = require('./cors');

module.exports = {
    cors,
};
