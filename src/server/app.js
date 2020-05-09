/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const hpp = require('hpp'); //Prevents HTTP Parameter Pollution Attacks (i.e something.com?user=1&user=2 would result in an ARRAY being sent)
const helmet = require('helmet'); //Provides basic security
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(helmet());
app.use(hpp());

app.use(middlewares.cors());
app.use('/', routes);

// Default 404 route and forward to error handler

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            page: {
                title: 'Error'
            }
        });
    });
}

// Production error handler no stacktrace leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
