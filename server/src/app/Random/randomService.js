const baseResponse = require("../../../config/baseResponseStatus");
const randomDao = require("./randomDao");
const randomProvider = require("./randomProvider");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");


exports.createAuthToken = async (nickname) =>{
    
    try {
        // 이메일 여부 확인
        const nicknameRows = await randomProvider.nicknameCheck(nickname);

    } catch{

    }
    return res.send()
}

exports.increaseCount = async (tokenId) =>{


}