const replyProvider = require("./replyProvider");
const replyService = require("./replyService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse} = require("../../../config/response");

/**
 * API No. 0
 * API Name : IP주소 테스트
 * [POST] /app/reply/test
 * header : jwt
 * body : {title : , body}
 */
exports.replyTest = async (req,res)=>{
    console.log(req.socket.remoteAddress);
    return res.send(req.socket.remoteAddress);
}

/**
 * API No. 1
 * API Name : 댓글 작성
 * [POST] /app/reply
 * header : jwt
 * body : {title : , body}
 */
exports.writeReply = async (req,res) => {
    let {postId, nickname,  body} = req.body;
    const userIp = req.socket.remoteAddress
    //빈값 검증
    if(!body||!postId) return res.send(response(baseResponse.REPLY_POST_ID_EMPTY))
    if(!nickname) nickname = "익명의 댓글 작성자";
    //댓글 작성
    const writeResponse =  await replyService.createReply(postId, body, userIp, postId);
    return res.send(writeResponse)
}


/**
 * API No. 2
 * API Name : 특정 게시글에 작성된 모든 댓글 가져오기, 특정 유저가 작성한 모든 댓글 가져오기
 * [GET] /app/reply/
 */
exports.getReplyList = async (req, res) =>{
    const {postId} = req.query

    //빈값 검출
    if(!userId && !postId) return res.send(baseResponse.REPLY_POST_ID_EMPTY);

    //특정 게시글에 작성된 모든 댓글 가져오기
    return res.send(await replyProvider.getReplyListPost(postId));

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


