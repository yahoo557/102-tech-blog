const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const {pool} = require("../../../config/database");

const replyProvider = require("./replyProvider");
const replyDao = require("./replyDao");

exports.createReply  = async (post_id, reply_id , body)=>{
    // 도배 확인
    try{

    }catch(e){
        
    }
    
}


exports.editReply  = async ()=>{

}