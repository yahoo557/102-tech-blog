const boardProvider = require("../../app/board/boardProvider");
const boardService = require("../../app/board/boardService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

/**
 * API No. 1
 * API Name : 게시글 작성
 * [POST] /app/board
 * header : jwt
 * body : {title : , body}
 */
exports.writePost = async (req,res) => {
    const {title, body} = req.body;
    //빈값 체크
    if(!title || !body) return res.send(response(baseResponse.BOARD_BODY_EMPTY));

    const writeResponse = await postService.createPost(title,body);
    return res.send(writeResponse)
}

/**
 * API No. 2
 * API Name : 게시글 리스트 가져오기(제목으로 검색조회)
 * [GET] /app/board
 * 
 */ 
exports.getPostList = async (req, res) =>{
    const {title} = req.query
    // 게시글 전체 조회
    if(!title){
        const postListResponse = await boardProvider.getPostList();
        return res.send(postListResponse)
    }
    // 게시글 제목으로 검색
    const postListResponse = await boardProvider.getPostList(title);
    return res.send(postListResponse)
};

/**
 * API No. 3
 * API Name : 특정 게시글 가져오기
 * [GET] /app/board/{id}
 */
exports.getPost = async (req, res) =>{
    return res.send(await boardProvider.getPost(req.params.id));
};


/**
 * API No. 4
 * API Name : 게시글 수정
 * [FETCH] /app/board/{id}
 */
exports.editPost = async (req, res) =>{
    const {title, body} = req.body
    const editResponse = await boardService.editPost(req.params.id, title, body);
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