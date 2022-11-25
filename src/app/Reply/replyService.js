
const {response, errResponse} = require("../../../config/response");

const {pool} = require("../../../config/database");

const replyProvider = require("./replyProvider");
const replyDao = require("./replyDao");

exports.createReply  = async (post_id, reply_id , body)=>{
    try{
        const connection = await pool.getConnection(async (conn) => conn);
    }catch(e){

    }
    
}


exports.editReply  = async ()=>{

};

exports.deleteReply = async (replyId)=>{

};