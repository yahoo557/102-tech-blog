const { pool } = require("../../../config/database")
const randomDao = ('./randomDao.js');

exports.getRandomImage = async (authToken) => {
    const commection = pool.connect()
    // const randomImageResult = 
    return randomImageResult;
};