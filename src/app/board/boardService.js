const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus")
const boardDao = require("./boardDao")
const {response} = require("../../../config/response");

exports.createPost = async (title, body) =>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const createPostResult = boardDao.insertPost(connection, title, body);
        await connection.query("COMMIT");
        await connection.release();
        return createPostResult;

    }catch (error){
        await connection.rollback();
        console.log(error);
        return response(baseResponse.DB_ERROR);
    }


}

exports.deletePost = async(id) =>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const deletePostResult = boardDao.deletePost(id);
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