const { pool } = require("../../../config/database")
// const { lo}
const boardDao = require("./boardDao")


exports.getPostListByTitle = async (title) => {
    const connection = await pool.getConnection()
}

exports.getPostListByUser = async (userId) => {
    const connection = await pool.connect()
    const getPostResult = boardDao.getPostListUser
}

exports.getPostList = async () => {
    const connection = pool;
    connection.connect();
    const getPostResult = boardDao.selectPost(connection)
    
    return getPostResult
}


