const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

// Loading dotenv file
require('dotenv').config();

// Mongoose connection string
mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt');
// Mongoose error handler
mongoose.connection.on('error', (error) => console.log(error));
// Mongoose promise configuration
mongoose.Promise = global.Promise;

// Loading auth middleware
require('./auth/auth');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Loading bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes configuration
app.use(routes);

//Handle errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
