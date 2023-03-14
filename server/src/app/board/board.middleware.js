const {response} = require("../../../config/response");
const baseResponse = require("../../../config/baseResponseStatus");
const regex = require("../../../config/regex");

const boardIdInvalid = (req, res, next)=>{


    if(!regex.NUMBER_ID_REG.test(req.params.id)) return res.status(400).send(response(baseResponse.BOARD_POST_ID_INVALID));
    next();
}

const boardTitleEmpty = (req, res, next) =>{

    const boardTitle = req.body.title;
    if(!boardTitle) return res.status(400).send(response(baseResponse.BOARD_TITLE_EMPTY));
    next();
}

const boardBodyEmpty= (req, res, next) =>{
    const boardBody = req.body.body;
    if(!boardBody) return res.status(400).send(response(baseResponse.BOARD_BODY_EMPTY));
    next();
}


module.exports ={
    boardIdInvalid,
    boardTitleEmpty,
    boardBodyEmpty
}
