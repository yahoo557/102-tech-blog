const { pool } = require("../../../config/database")
const replyDao = require("./replyDao")

exports.retrieveReplyListPost = async (postId) =>{
    const connection = await pool.connect(async (conn)=> conn);
    const replyListResult = await replyDao.selectReplyPost(connection, postId);
    return replyListResult
}

exports.retrieveReplyListUser = async (userId) =>{
    const connection = await pool.connect(async (conn)=> conn);
    const replyListResult = await replyDao.selectReplyUser(connection, userId);
    return replyListResult
}