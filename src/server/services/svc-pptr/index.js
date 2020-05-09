/**
 * @module services/pptr
 * @description Returns all user controller modules for easy access
 * @requires services/pptr/Browser
 * @returns {
 *     id: "func_id"
 *     value: function
 * }
 */

/* Custom Dependencies */
const browser = require('./Browser');
const page = require('./Page');

const services = {
    browser,
    page
};

module.exports = {
    services
};
