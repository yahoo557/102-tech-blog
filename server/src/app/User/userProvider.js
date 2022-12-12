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
  return await userDao.selectUserEmail(connection, email);
};

exports.passwordCheck = async (selectUserPasswordParams) => {
  const connection = await pool.connect();
  const passwordCheckResult = await userDao.selectUserPassword(connection, selectUserPasswordParams);
  return passwordCheckResult[0];
};

exports.accountCheck = async function (email) {
  const connection = await pool.connect();

  return await userDao.selectUserAccount(connection, email);
};

