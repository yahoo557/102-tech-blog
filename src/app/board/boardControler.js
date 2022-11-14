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
 * API Name : 
 * [GET] /app/test
 */