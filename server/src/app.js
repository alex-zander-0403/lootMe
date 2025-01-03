const express = require('express');

//
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

//
const authRouter = require('./routers/authRouter');
const tokenRouter = require('./routers/tokenRouter');
const boxRouter = require('./routers/boxRouter');

//
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
//
app.use('/api/boxes', boxRouter);

//
module.exports = app;
