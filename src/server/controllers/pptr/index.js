/**
 * @module controllers/users
 * @description Returns all user controller modules for easy access
 * @requires controllers/pptr/test
 * @returns {Object} {register, confirm}
 */

/* Custom Dependencies */
const { test, pptrTest } = require('./test');
const { handleCmds } = require('./pptr');

module.exports = {
    test,
    pptrTest,
    handleCmds
};
