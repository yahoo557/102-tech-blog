const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus")
const boardDao = require("./boardDao")
const {response, errResponse} = require("../../../config/response");

exports.createPost = async (userIdFromJWT, title, body) =>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const createPostResult = boardDao.insertPost(connection, userIdFromJWT, title, body);
        await connection.query("COMMIT");
        await connection.release();
        return createPostResult;

    }catch (error){
        await connection.rollback();
        console.log(error);
        return response(baseResponse.DB_ERROR);
    }


}

exports.deletePost = async(userIdFromJWT, id) =>{
    const connection = await pool.connect();
    // userIdFromJWT와 post의 userId가 일치하는지 확인
    console.log(await boardDao.checkAuthor(connection, userIdFromJWT, id))
    // if(boardDao.checkAuthor(connection, userIdFromJWT, id).rows.length<=0) return response(baseResponse.BOARD_USER_ID_DIFFERENT)

    try{
        await connection.query("BEGIN")
        const deletePostResult = boardDao.deletePost(connection,id);
        await connection.query("COMMIT");
        await connection.release();
        return deletePostResult;
    }catch(error){
        console.log(error);
        await connection.query("ROLLBACK");
        return error;
    }
}

exports.editPost = async (id, title, body) =>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const updatePostResult = boardDao.updatePost(connection,id, title, body);
        await connection.query("COMMIT");
        await connection.release();
        return updatePostResult;
    }catch(error){
        console.log(error);
        await connection.query("ROLLBACK");
        return error;
    }
}
