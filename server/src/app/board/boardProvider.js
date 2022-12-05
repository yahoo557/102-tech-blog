const { pool } = require("../../../config/database")
const boardDao = require("./boardDao")


exports.getPostListByTitle = async (title) => {
    const connection = await pool.connect()
    return boardDao.selectPostTitle(connection,title);

}

exports.getPostListByUser = async (userId) => {
    const connection = await pool.connect()
    return boardDao.selectPostUser(connection, userId);
}

exports.getPostListByUserTitle = async (title,userId)=>{
    const connection = await pool.connect();
    return boardDao.selectPostTitleUser(connection, title, userId);
}

exports.getPostList = async (title, userId) => {
    const connection = await pool.connect();
    return boardDao.selectPost(connection);
}


exports.getPost = async (postId)=>{
    const connection = await pool.connect();
    return boardDao.selectPostId(connection, postId);
}