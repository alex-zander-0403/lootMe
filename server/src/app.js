const express = require('express');

//
const app = express();
const morgan = require('morgan');

//
const boxRouter = require('./routers');

//
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

//
app.use('/api/boxes', boxRouter);

//
module.exports = app;
