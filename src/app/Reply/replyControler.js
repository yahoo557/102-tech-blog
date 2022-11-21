const replyProvider = require("../../app/reply/replyProvider");
const replyService = require("../../app/reply/replyService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");


/**
 * API No. 1
 * API Name : 댓글 작성
 * [POST] /app/reply
 * header : jwt
 * body : {title : , body}
 */
exports.writePost = async (req,res) => {
    const {post_id, reply_id, body} = req.body;
    //빈값 검증
    if(!body||!post_id) return res.send(response(baseResponse.REPLY_POST_ID_EMPTY))
    
    //대댓글로 작성
    if(!reply_id){
        const writeResponse = await replyService.createReply(post_id,reply_id,body);
        return res.send(writeResponse)
    }

    //댓글로 작성
    const writeResponse =  await replyService.createReply(post_id, body);
    return res.send(writeResponse)
}


/**
 * API No. 2
 * API Name : 특정 게시글에 작성된 모든 댓글 가져오기(default), 특정 유저가 작성한 모든 댓글 가져오기
 * [GET] /app/reply/
 */
exports.getReplyList = async (req, res) =>{
    const {userId, postId} = req.query

    if(!userId && !postId) return res.send(baseResponse.REPLY_POST_ID_EMPTY);

    if(postId) return res.send(await replyProvider.getReplyListPost(postId));

    return res.send(await replyProvider.getReplyListUser(userId));
}

/**
 * API No. 4
 * API Name : 댓글 수정
 * [FETCH] /app/reply/:id
 */
exports.editPost = async (req, res) =>{
    const {body} = req.body
    const editResponse = await replyService.editReply(body);
    return res.send(editResponse)
}


/**
 * API No.5
 * API Name : 댓글 삭제
 * [DELETE] /app/reply/:id
 */
exports.deletePost = async (req, res)=>{
    const replyId = req.params.id
    const deleteResponse = await boardService.deletePost(postId);
    return res.send(deleteResponse)
};



/**
 * API No.6
 * API Name : JWT decode
 * 
 */
 exports.check = async function (req, res) {
    const userIdResult = req.verifiedToken.userId;
    console.log(userIdResult);
    return res.send(response(baseResponse.TOKEN_VERIFICATION_SUCCESS));
};

