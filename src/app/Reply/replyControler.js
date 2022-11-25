const replyProvider = require("../../app/reply/replyProvider");
const replyService = require("../../app/reply/replyService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse} = require("../../../config/response");


/**
 * API No. 1
 * API Name : 댓글 작성
 * [POST] /app/reply
 * header : jwt
 * body : {title : , body}
 */
exports.writePost = async (req,res) => {
    const {postId, replyId, body} = req.body;
    //빈값 검증
    if(!body||!postId) return res.send(response(baseResponse.REPLY_POST_ID_EMPTY))

    //댓글 작성
    const writeResponse =  await replyService.createReply(postId, replyId || 0 , body);
    return res.send(writeResponse)
}


/**
 * API No. 2
 * API Name : 특정 게시글에 작성된 모든 댓글 가져오기, 특정 유저가 작성한 모든 댓글 가져오기
 * [GET] /app/reply/
 */
exports.getReplyList = async (req, res) =>{
    const {userId, postId} = req.query

    //빈값 검출
    if(!userId && !postId) return res.send(baseResponse.REPLY_POST_ID_EMPTY);

    //특정 게시글에 작성된 모든 댓글 가져오기
    if(postId) return res.send(await replyProvider.getReplyListPost(postId));

    //특정 유저가
    return res.send(await replyProvider.getReplyListUser(userId));
}

/**
 * API No. 4
 * API Name : 댓글 수정
 * [FETCH] /app/reply/:id
 */
exports.editReply = async (req, res) =>{
    const {body} = req.body
    const editResponse = await replyService.editReply(body);
    return res.send(editResponse)
}


/**
 * API No.5
 * API Name : 댓글 삭제
 * [DELETE] /app/reply/:id
 */
exports.deleteReply = async (req, res)=>{
    const replyId = req.params.id
    const deleteResponse = await replyService.deleteReply(replyId);
    return res.send(deleteResponse)
};


