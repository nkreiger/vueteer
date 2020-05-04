/**
 * @module routes/users
 * @requires controllers/pptrControllers
 * @description Defines routes for user registration, login, confirmation, etc.
 * @param {Function} app - Invoked Express.js instance. (e.g express())
 */
/* Third Party Dependencies */
const routes = require('express').Router();
/* Custom Dependencies */
const pptrControllers = require('../../controllers');

routes.get('/test', pptrControllers.pptr.test);
routes.get('/test/pptr', pptrControllers.pptr.pptrTest);

module.exports = routes;
