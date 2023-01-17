const { pool } = require("../../../config/database")
const boardDao = require("./boardDao")


exports.getPostListByTitle = async (title) => {
    const connection = await pool.connect()

    const result =  boardDao.selectPostTitle(connection,title);

    connection.release();

    return result

}

exports.getPostListByUser = async (userId) => {
    const connection = await pool.connect()

    const result =  boardDao.selectPostUser(connection, userId);

    connection.release();

    return result
}

exports.getHotPostList = async () => {
    const connection = await pool.connect()

    const result =  boardDao.selectHotPost(connection);

    connection.release();

    return result

}
exports.getPostListByCategory = async(category) =>{
    const connection = await pool.connect();

    const result = boardDao.selectPostCategory(category, connection);

    connection.release();

    return result
}

exports.getPostListByUserTitle = async (title,userId)=>{
    const connection = await pool.connect();

    const result = boardDao.selectPostTitleUser(connection, title, userId);

    connection.release();

    return result
}

exports.getPostList = async () => {
    const connection = await pool.connect();

    const result = boardDao.selectPost(connection);

    connection.release();

    return result
}


exports.getPost = async (postId)=>{
    const connection = await pool.connect();

    const result = boardDao.selectPostId(connection, postId);

    connection.release();

    return result
}
