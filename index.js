const express = require('./server/config/express');
const {logger} = require('./server/config/winston');

require("dotenv").config();

const port = 3000;

express().listen(port);
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);