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
        await connection.query("COMMIT").release();
        return createPostResult;

    }catch (error){
        await connection.rollback();
        console.log(error);
        return response(baseResponse.DB_ERROR);
    }


}

exports.deletePost = async(postId) =>{
    const poolClient = pool.connect()

}

exports.editPost = async (title, body) =>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const updatePostResult = boardDao.updatePost(connection, title, body);
        await connection.query("COMMIT").release();
        return updatePostResult;
    }catch(error){
        await connection.rollback();
        console.log(error);
        return error;
    }
}