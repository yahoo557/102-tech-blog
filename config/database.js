// const mysql = require('mysql2/promise');
const { Client, Pool } = require('ps')
// const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     port: '3306',
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PSQL_PORT
})

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PSQL_PORT,
    max:5
})

module.exports = {
    pool: pool,
    client:client

};