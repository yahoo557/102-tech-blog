// const mysql = require('mysql2/promise');
const { Client, Pool } = require('pg')
// const {logger} = require('./winston');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PSQL_PORT,
    max:5
})

module.exports = {
    pool: pool
    // client:client
};