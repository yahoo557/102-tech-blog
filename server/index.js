const express = require('./config/express');
const {logger} = require('./config/winston');

require("dotenv").config();

const port = 3000;

express().listen(port);
logger.info(`${process.env.NODE_ENV} - API Server Listening At Port ${port}`);