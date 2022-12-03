const boardProvider = require("../../app/board/boardProvider");
const boardService = require("../../app/board/boardService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

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
    if(!body) return res.send(response(baseResponse.BOARD_BODY_EMPTY));
    if(!title) return res.send(response(baseResponse.BOARD_TITLE_EMPTY));
    return res.send(await boardService.createPost(title,body));
}

/**
 * API No. 2
 * API Name : 게시글 리스트 가져오기(제목, 작성자로 검색조회)
 * [GET] /app/board
 * 
 */ 
exports.getPostList = async (req, res) =>{
    const {title, userId} = req.query
    // 게시글 제목과 작성자 둘다로 검색
    if(title&&userId) return res.send(await boardProvider.getPostListByUserTitle(title, userId));

    // 게시글 제목으로 검색
    if(title) return res.send(await boardProvider.getPostListByTitle(title));

    // 작성자로로 검색
    if(userId) return res.send(await boardProvider.getPostListByUser(userId));


    // 게시글 전체 조회
    return res.send(await boardProvider.getPostList(title));
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
    return res.send(await boardService.deletePost(postId));
};

/**
 * API No.6
 * API Name : JWT decode
 * 
 */
 exports.check = async (req, res) => {
    const userIdResult = req.verifiedToken.userId;
    console.log(userIdResult);
    return res.send(response(baseResponse.TOKEN_VERIFICATION_SUCCESS, userIdResult));
};