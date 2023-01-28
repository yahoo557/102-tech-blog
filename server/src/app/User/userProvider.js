const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const userDao = require("./userDao");

exports.dbTest = async ()=>{
  const connection = await pool.connect();
  const testResult = await userDao.dbTest(connection);
  connection.release();
  return testResult;

};

// Provider: Read 비즈니스 로직 처리

exports.retrieveUserList = async function (email) {
  if (!email) {
    const connection = await pool.connect();
    const userListResult = await userDao.selectUser(connection);
    connection.release();

    return userListResult;

  } else {
    const connection = await pool.connect();
    const userListResult = await userDao.selectUserEmail(connection, email);
    connection.release();

    return userListResult;
  }
};

exports.retrieveUser = async function (userId) {
  const connection = await pool.connect();
  const userResult = await userDao.selectUserId(connection, userId);

  connection.release();

  return userResult[0];
};

exports.emailCheck = async (email) => {
  const connection = await pool.connect();
  const result = await userDao.selectUserEmail(connection, email);
  connection.release();
  return result
};

exports.passwordCheck = async (selectEmail, hashedPassword) => {
  const connection = await pool.connect();
  const result = await userDao.selectUserPassword(connection, selectEmail, hashedPassword);
  connection.release();
  return result

};

exports.accountCheck = async function (email) {
  const connection = await pool.connect();
  const result = await userDao.selectUserAccount(connection, email);
  connection.release();
  return result
};

