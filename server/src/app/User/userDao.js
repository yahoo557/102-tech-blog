// 모든 유저 조회
const selectUser = async  (connection) => {
  const selectUserListQuery = `SELECT email, nickname FROM user WHERE satus = 'ONLINE';`;
  return await connection.query(selectUserListQuery);
}

// 이메일로 회원 조회
const selectUserEmail = async (connection, email) => {
  const selectUserEmailQuery = `SELECT email, nickname FROM users WHERE email = $1 and status = 'ONLINE';`;
  return await connection.query(selectUserEmailQuery, [email]);
}

// userId 회원 조회
const selectUserId = async (connection, userId) => {
  const selectUserIdQuery = `SELECT id, email, nickname FROM users WHERE id = $1 and Status = 'ONLINE';`;
  return await connection.query(selectUserIdQuery, userId);
}

// 유저 생성
const insertUserInfo = async (connection, insertUserInfoParams) => {
  const insertUserInfoQuery = `INSERT INTO users ("email", "password", "nickname") VALUES ($1, $2, $3);`;
  return await connection.query(insertUserInfoQuery, insertUserInfoParams);
}

// 패스워드 체크
const selectUserPassword= async (connection, selectUserPasswordParams) => {
  const selectUserPasswordQuery = `SELECT email, nickname, password FROM users WHERE email = $1 AND password = $2 AND status = 'ONLINE';`;
  return await connection.query(selectUserPasswordQuery, selectUserPasswordParams);
}

// 유저 계정 상태 체크 (jwt 생성 위해 id 값도 가져온다.)
const selectUserAccount = async (connection, email) => {
  const selectUserAccountQuery = `SELECT status, id FROM users WHERE email = $1 ;`;
  return await connection.query(selectUserAccountQuery, [email]);
}

const updateUserInfo = async (connection, id, nickname) => {
  const updateUserQuery = `UPDATE user SET nickname = $1 WHERE id = $2;`;
  return await connection.query(updateUserQuery, [nickname, id]);
}


module.exports = {
  selectUser,
  selectUserEmail,
  selectUserId,
  insertUserInfo,
  selectUserPassword,
  selectUserAccount,
  updateUserInfo,
};
