/**
 * @module routes
 * @requires routes/users
 * @requires util
 * @description Routes define API endpoints connect them to the appropriate controllers. This module ensures that all routes are defined.
 */
/* Third Party Dependencies */
const routes = require('express').Router();

const pptrRoutes = require('./svc-pptr');

routes.use('/pptr', pptrRoutes);
routes.all('*', (req, res) => {
    res.send({
        status: 404,
        msg: 'Request not recognized'
    })
});

module.exports = routes;
