/**
 * @module controllers/users
 * @description Returns all user controller modules for easy access
 * @requires controllers/pptr/test
 * @returns {Object} {register, confirm}
 */

/* Custom Dependencies */
const { test, pptrTest } = require('./test');

module.exports = {
    test,
    pptrTest
};
