/**
 * @module services/pptr
 * @description Returns all user controller modules for easy access
 * @requires services/pptr/Browser
 * @returns {Object}
 */

/* Custom Dependencies */
const { open, newPage } = require('./Browser');
const { navigateTo } = require('./Page');

module.exports = {
    open,
    newPage,
    navigateTo
};
