const { pool } = require("../../../config/database")
const replyDao = require("./replyDao")

exports.getReplyListPost = async (postId) =>{
    const connection = await pool.connect();
    return await replyDao.selectReplyPost(connection, postId);
}

exports.getReplyListPostUser = async (userId) =>{
    const connection = await pool.connect();
    return await replyDao.selectReplyUser(connection, userId);
}