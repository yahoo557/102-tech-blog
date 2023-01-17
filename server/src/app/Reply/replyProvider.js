const { pool } = require("../../../config/database")
const replyDao = require("./replyDao")

exports.retrieveReplyListPost = async (postId) =>{
    const connection = await pool.connect();
    const result = await replyDao.selectReplyPost(connection, postId);
    connection.release();
    return result
}

exports.retrieveReplyListUser = async (userId) =>{
    const connection = await pool.connect();
    const result = await replyDao.selectReplyUser(connection, userId);
    connection.release();
    return result
}

exports.retrieveReplyPassword = async (replyId, hashedPassword) => {
    const connection = await pool.connect()
    const result = await replyDao.selectReplyPassword(connection, replyId, hashedPassword);
    connection.release();
    return result
}
