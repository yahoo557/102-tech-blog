const { pool } = require("../../../config/database")
const randomDao = require('./randomDao.js');

exports.getRandomImage = async (authToken) => {
    const connection = pool.connect()
    // const randomImageResult = 


};

exports.nicknameCheck = async(nickname) => {
    const connection = pool.connect();

    return await randomDao.nicknameCheck(connection, nickname);
};

exports.getRandomQuiz = async()=>{
    return await randomDao.selectRandomQuiz(await pool.connect());
}