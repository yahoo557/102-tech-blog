
const {response, errResponse} = require("../../../config/response");

const {pool} = require("../../../config/database");

const replyProvider = require("./replyProvider");
const replyDao = require("./replyDao");
const boardDao = require("../board/boardDao");

exports.createReply  = async (createReplyParams)=>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const createPostResult = replyDao.insertReply(connection, createReplyParams);
        await connection.query("COMMIT");
        await connection.release();
        return createPostResult;
    }catch(e){

    }

}


exports.editReply  = async ()=>{

};

exports.deleteReply = async (replyId)=>{

};
