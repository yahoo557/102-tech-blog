const { pool } = require("../../../config/database")
const boardDao = require("./boardDao")


exports.getPostListByTitle = async (title) => {
    const connection = await pool.connect()
    try{
        await connection.query("BEGIN")
        const selectPostResult = boardDao.selectPostTitle(connection,title);
        await connection.query("COMMIT");
        await connection.release();
        return selectPostResult
    }catch(error){
        await connection.query("ROLLBACK");
        console.log(error);
        return error
    }

}

exports.getPostListByUser = async (userId) => {
    const connection = await pool.connect()
    return boardDao.selectPostUser(connection, userId);
}

exports.getPostList = async (title, userId) => {
    const connection = await pool.connect();
    return boardDao.selectPost(connection)
}


exports.getPost = async (postId)=>{
    const connection = await pool.connect();
    return boardDao.selectPostId(connection, postId);
}