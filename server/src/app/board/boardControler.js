const boardProvider = require("./boardProvider");
const boardService = require("./boardService");
const baseResponse = require("../../../config/baseResponseStatus");
const regex = require("../../../config/regex")
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
    const userIdFromJWT = req.verifiedToken.userId
    //빈값 체크
    if(!body) return res.status(400).send(response(baseResponse.BOARD_BODY_EMPTY));

    if(!title) return res.status(400).send(response(baseResponse.BOARD_TITLE_EMPTY));

    return res.send(response(baseResponse.SUCCESS, await boardService.createPost(userIdFromJWT, title,body)));
}

/**
 * API No. 2
 * API Name : 게시글 리스트 가져오기(제목, 작성자로 가져오기, 인기게시글 가져오기)
 * [GET] /app/board
 *
 */
exports.getPostList = async (req, res) =>{
    const {title, userId, category, hot} = req.query
    // if(!regex.NUMBER_ID_REG.test(userId)) return res.status(400).send(response(baseResponse.BOARD_USER_ID_INVALID));

    // 게시글 제목과 작성자 둘다로 검색
    if(title&&userId) return res.status(200).send(response(baseResponse.SUCCESS, await boardProvider.getPostListByUserTitle(title, userId)));

    // 게시글 제목으로 검색
    if(title) return res.status(200).send(response(baseResponse.SUCCESS, await boardProvider.getPostListByTitle(title)));

    // 작성자로 검색
    if(userId) return res.status(200).send(response(baseResponse.SUCCESS, await boardProvider.getPostListByUser(userId)));

    // 카테고리로 조회
    if(category) return res.status(200).send(response(baseResponse.SUCCESS, await boardProvider.getPostListByCategory(category)));

    // 인기게시글 조회
    if(hot) return res.status(200).send(await boardProvider.getHotPostList())

    // 게시글 전체 조회
    return res.status(200).send(await boardProvider.getPostList(title));
};

/**
 * API No. 3
 * API Name : 특정 게시글 가져오기
 * [GET] /app/board/
 * TODO : 조회수 올려야함
 */
exports.getPost = async (req, res) =>{

    if(!regex.NUMBER_ID_REG.test(req.params.id)) return res.status(400).send(response(baseResponse.BOARD_POST_ID_INVALID));

    return res.status(200).send(response(baseResponse.SUCCESS, await boardProvider.getPost(req.params.id)));
};


/**
 * API No. 4
 * API Name : 게시글 수정
 * [FETCH] /app/board/{id}
 */
exports.editPost = async (req, res) =>{
    const {title, body} = req.body

    if(!title) return res.status(400).send(response(baseResponse.BOARD_TITLE_EMPTY));
    if(!body) return res.status(400).send(response(baseResponse.BOARD_BODY_EMPTY));
    if(!regex.NUMBER_ID_REG.test(req.params.id)) return res.status(400).send(response(baseResponse.BOARD_POST_ID_INVALID));

    return res.status(200).send(response(baseResponse.SUCCESS, await boardService.editPost(req.params.id, title, body)));
}


/**
 * API No.5
 * API Name : 게시글 삭제
 * [DELETE] /app/board/{id}
 */
exports.deletePost = async (req, res)=>{
    const userIdFromJWT = req.verifiedToken.userId

    if(!regex.NUMBER_ID_REG.test(req.params.id)) return res.status(400).send(response(baseResponse.BOARD_POST_ID_INVALID));

    return res.send(response(baseResponse.SUCCESS, await boardService.deletePost(userIdFromJWT,req.params.id)));
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
/**
 * API No.7
 * API Name : Upload Image to s3 bucket
 *
 */
 exports.postImage = async (req,res)=>{

 };

