const { pool } = require("../../../config/database")
const randomDao = ('./randomDao.js');

exports.getRandomImage = async (authToken) => {
    const commection = pool.connect()
    // const randomImageResult = 
    connection.release();
    return randomImageResult;
};

exports.nicknameCheck = async(nickname) => {
    const connection = pool.connect();
    const nicknameCheckResult = randomDao.nicknameCheck(connection, nickname);
    connection.release();
    return nicknameCheckResult;
};