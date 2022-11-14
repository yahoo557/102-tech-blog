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
 */
exports.writePost = async (req,res) => {
    const {title, body} = req.body;

    //빈값 검증
    if(!title || !body){
        return res.send("error")
    }

}


/**
 * API No. 2
 * API Name : 게시글 리스트 가져오기
 * [GET] /app/board
 */

/**
 * API No. 3
 * API Name : 게시글 가져오기
 * [GET] /app/board/:id
 */


/**
 * API No. 4
 * API Name : 게시글 수정
 * [FETCH] /app/board/:id
 */

/**
 * API No.5
 * API Name : 게시글 삭제
 * [POST] /app/board/:id
 */

