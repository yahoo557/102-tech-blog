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
    const {reply_id, body} = req.body;
    //빈값 검증
    if(!body) return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY))
    
    //대댓글로 작성
    if(!reply_id){
        const writeResponse = await postService.createPost(reply_id,body);
        return res.send(writeResponse)
    }
    //댓글로 작성
    const writeResponse =  await postService.createPost(body);
    return res.send(writeResponse)
}


/**
 * API No. 2
 * API Name :  댓글 가져오기
 * [GET] /app/board
 */
exports.getPostList = async (req, res) =>{
    const {title} = req.query
    if(!title){
        // 게시글 전체 조회
        const postListResponse = await boardProvider.getPostList();
        return res.send(postListResponse)
    }
    else {
        // 게시글 작성자로 조회
        const postListResponse = await boardProvider.getPostList(title);
        return res.send(postListResponse)
    }
}



/**
 * API No. 3
 * API Name : 특정 게시글 가져오기
 * [GET] /app/board/{id}
 */
exports.getPost = async (req, res) =>{
    const postId = req.params.id;
    const postResponse = await boardProvider.getPost(
        postId
    );
    return res.send(postResponse)
}


/**
 * API No. 4
 * API Name : 게시글 수정
 * [FETCH] /app/board/:id
 */
exports.editPost = async (req, res) =>{
    const {title, body} = req.body
    const editResponse = await boardService.editPost(title, body);
    return res.send(editResponse)
}


/**
 * API No.5
 * API Name : 게시글 삭제
 * [DELETE] /app/board/{id}
 */
exports.deletePost = async (req, res)=>{
    const postId = req.params.id
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

