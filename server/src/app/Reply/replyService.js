
const {response, errResponse} = require("../../../config/response");

const {pool} = require("../../../config/database");

const replyProvider = require("./replyProvider");
const replyDao = require("./replyDao");
const crypto = require("crypto");
const {logger} = require("../../../config/winston");
const baseResponse = require("../../../config/baseResponseStatus");

exports.createReply  = async (postId, body, userIp, password, nickname)=>{
    const connection = await pool.connect();
    try{
        await connection.query("BEGIN")
        const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");
        const createReplyParams = [postId, body, userIp, hashedPassword, nickname]
        const createPostResult = replyDao.insertReply(connection, createReplyParams);
        await connection.query("COMMIT");
        await connection.release();
        return createPostResult;
    }catch(e){
        logger.error(`App - createUser Service error\n: ${e.message}`);

        return errResponse(baseResponse.DB_ERROR);
    }

}


exports.editReply  = async (body, password, replyId)=>{
    // 비밀번호 검증

    //
};

exports.deleteReply = async (replyId)=>{

};
