const express = require('express');

//
const app = express();
const morgan = require('morgan');

//
const boxRouter = require('./routers/boxRouter');

//
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

//
app.use('/api/boxes', boxRouter);

//
module.exports = app;
