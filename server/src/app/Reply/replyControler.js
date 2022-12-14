const replyProvider = require("./replyProvider");
const replyService = require("./replyService");
// const baseResponse = require("../../../config/baseResponseStatus");
const baseResponse = require("./replyResponseStatus");
const { response, errResponse} = require("../../../config/response");
const regex = require("../../../config/regex")
const crypto = require("crypto");
const {error} = require("winston");
const userProvider = require("../User/userProvider");
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
    let {postId, nickname, body, password} = req.body;
    const userIp = req.socket.remoteAddress
    //빈값 검증
    if(!body||!postId) return res.send(errResponse(baseResponse.REPLY_POST_ID_EMPTY))
    if(!password) return res.send(errResponse(baseResponse.REPLY_PASSWORD_EMPTY))

    // 닉네임 미입력시 기본닉네임으로 "익명의 댓글작성자 (192.168)"
    if(!nickname) nickname = `익명의 댓글작성자 (${userIp.split('.')[0]}.${userIp.split('.')[1]})`;

    // 비밀번호, 닉네임, Regexp 추가
    if(nickname && !regex.REPLY_PASSWORD_REG.test(password)) return res.send(errResponse(baseResponse.REPLY_PASSWORD_INVALID))


    //댓글 작성
    const writeResponse =  await replyService.createReply(postId, body, userIp, password, nickname);
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
    if(!postId) return res.send(errResponse(baseResponse.REPLY_POST_ID_EMPTY));

    //postId형식 validation
    if((!regex.NUMBER_ID_REG.test(postId))) return res.send(errResponse(baseResponse.REPLY_POST_ID_EMPTY))

    //특정 게시글에 작성된 모든 댓글 가져오기
    return res.send(await replyProvider.retrieveReplyListPost(postId));
}

/**
 * API No. 4
 * API Name : 댓글 수정
 * [FETCH] /app/reply/:id
 */
exports.editReply = async (req, res) =>{
    const {body,password} = req.body;
    const replyId = req.params.id;
    //빈값 검출
    if(!body) return res.send(errResponse(baseResponse.REPLY_POST_ID_EMPTY))

    //비밀번호형식 validation
    if(!regex.REPLY_PASSWORD_REG.test(password)) return res.send(errResponse(baseResponse.REPLY_PASSWORD_INVALID))

    //비밀번호 확인
    const passwordRows = await replyProvider.passwordCheck(selectEmail, hashedPassword);


    return res.send(await replyService.editReply(body,password,replyId))
}


/**
 * API No.5
 * API Name : 댓글 삭제
 * [DELETE] /app/reply/:id
 */
exports.deleteReply = async (req, res) => {
    const replyId = req.params.id
    const deleteResponse = await replyService.deleteReply(replyId);
    return res.send(deleteResponse)
};


