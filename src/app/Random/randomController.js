const randomProvider = require("../../app/random/randomProvider");
const randomService = require("../../app/random/randomService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

/**
 * API No. 1
 * API Name : 남친짤 획득을 위한 auth token 생성(jwt)
 * [POST] /app/random
 */
exports.createAuthToken = (req, res) => {
    const {nickname, instagram} = req.body;
    return res.send(randomService.createAuthToken(nickname, instagram));
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