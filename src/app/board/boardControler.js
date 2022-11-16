const boardProvider = require("../../app/board/boardProvider");
const boardService = require("../../app/board/boardService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");


/**
 * API No. 0
 * API Name : 테스트 API
 * [GET] /app/board/test
 */
 exports.getTest = async function (req, res) {
    return res.send(response(baseResponse.SUCCESS))
}


/**
 * API No. 1
 * API Name : 게시글 작성
 * [POST] /app/board
 * header : jwt
 * body : {title : , body}
 */
exports.writePost = async (req,res) => {
    const {title, body} = req.body;

    //빈값 검증
    if(!title || !body){
        return res.send("error")
    }
    
    const writeResponse = await postService.createPost(
        title,
        body
    );
    return res.send(writeResponse)
}


/**
 * API No. 2
 * API Name : 게시글 리스트 가져오기(+ 제목으로 검색조회)
 * [GET] /app/board
 */
exports.getPostList = async (req, res) =>{
    

    const postListResponse = await boardProvider.getPostList(
    );
    return res.send()

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
    const editResponse = await boardService.editPost(

    );
}


/**
 * API No.5
 * API Name : 게시글 삭제
 * [DELETE] /app/board/{id}
 */
exports.deletePost = async (req, res)=>{
    const postId = req.params.id
    const deleteResponse = await boardService.deletePost(

    );
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

/**
 * API No.7
 * API Name : 리그 정보 받아오기
 * [GET] /app/board/
 * 
 */

exports.getLeagueInfo = async function (req,res) {



}