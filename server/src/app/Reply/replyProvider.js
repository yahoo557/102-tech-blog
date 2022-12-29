const { pool } = require("../../../config/database")
const replyDao = require("./replyDao")

exports.retrieveReplyListPost = async (postId) =>{
    const connection = await pool.connect();
    return await replyDao.selectReplyPost(connection, postId);
}

exports.retrieveReplyListUser = async (userId) =>{
    const connection = await pool.connect();
    return await replyDao.selectReplyUser(connection, userId);
}

exports.retrieveReplyPassword = async (replyId, hashedPassword) => {
    const connection = await pool.connect()
    return await replyDao.selectReplyPassword(connection, replyId, hashedPassword);
}
