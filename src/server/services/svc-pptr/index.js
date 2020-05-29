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
const element = require('./Element');
const page = require('./Page');

const services = {
    browser,
    element,
    page
};

module.exports = {
    services
};
