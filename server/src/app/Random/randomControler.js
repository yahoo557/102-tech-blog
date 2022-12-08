const randomProvider = require("./randomProvider");
const randomService = require("./randomService");
const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");

/**
 * API No. 1
 * API Name : 남친짤 획득을 위한 auth token 생성(jwt)
 * [POST] /app/random
 */
exports.createAuthToken = (req, res) => {
    const {nickname} = req.body;
    return res.send(randomService.createAuthToken(nickname));
};

/**
 * API No. 2
 * API Name : 랜덤 남친짤 
 * [GET] /app/random
 */
exports.getRandomBoyfriendImage = (req, res) => {
    const {authToken} = req.query
    return res.send(randomProvider.getRandomImage(authToken));
};


/**
 * API No. 3
 * API Name : 랜덤 퀴즈
 * [GET] /app/quiz
 */
exports.getQuiz = async(req,res)=>{
    return res.send(await randomProvider.getRandomQuiz());
}