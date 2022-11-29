const { pool } = require("../../../config/database")
// const { lo}
const boardDao = require("./boardDao")


exports.getPostListByTitle = async (title) => {
    const connection = await pool.getConnection()
}

exports.getPostListByUser = async (userId) => {
    const connection = await pool.getConnection()
    const getPostResult = boardDao.getPostListUser
}

exports.getPostList = async () => {
    const connection = await pool.getConnection(async (conn) => conn);
    const getPostResult = boardDao.selectPost(connection)
    return getPostResult
}


