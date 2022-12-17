// const jwtMiddleware = require("../../../config/jwtMiddleware");
const userProvider = require("./userProvider");
const userService = require("./userService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const regex = require("../../../config/regex");


/**
 * API No. 0
 * API Name : 테스트 API
 * [GET] /app/test
 */
exports.getTest = async (req, res) => {
    return res.send(await userProvider.dbTest());
}

/**
 * API No. 1
 * API Name : 유저 생성 (회원가입) API
 * [POST] /app/users
 */
exports.postUsers = async (req, res) => {
    /**
     * Body: email, password, nickname
     */
    const {email, password, nickname} = req.body;

    // 빈 값 체크
    if (!email) return res.status(400).send(response(baseResponse.SIGNUP_EMAIL_EMPTY));


    // 길이 체크
    if (email.length > 30) return res.status(400).send(response(baseResponse.SIGNUP_EMAIL_LENGTH));


    // 형식 체크 (by 정규표현식)
    if (!regex.EMAIL_REG.test(email)) return res.status(400).send(response(baseResponse.SIGNUP_EMAIL_ERROR_TYPE));

    return res.status(200).send(await userService.createUser(email, password, nickname));
};

/**
 * API No. 2
 * API Name : 유저 조회 API (+ 이메일로 검색 조회)
 * [GET] /app/users
 */
exports.getUsers = async (req, res) => {
    /**
     * Query String: email
     */
    const email = req.query.email;

    if (!email)
        // 유저 전체 조회
        return res.send(response(baseResponse.SUCCESS, await userProvider.retrieveUserList()));

    // 유저 검색 조회
    return res.send(response(baseResponse.SUCCESS, await userProvider.retrieveUserList(email)));
};

/**
 * API No. 3
 * API Name : 특정 유저 조회 API
 * [GET] /app/users/:userId
 */
exports.getUserById = async (req, res) => {
    /**
     * Path Variable: userId
     */
    const userId = req.params.userId;

    if (!userId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    return res.send(response(baseResponse.SUCCESS, await userProvider.retrieveUser(userId)));
};


/**
 * API No. 4
 * API Name : 로그인 API
 * [POST] /app/login
 * body : email, passsword
 */
exports.login = async (req, res) => {

    const {email, password} = req.body;
    // TODO: email, password 형식적 Validation
    if(!email) return res.send(response(baseResponse.SIGNIN_EMAIL_EMPTY))
    if(!regex.EMAIL_REG.test(email)) return res.status(400).send(response(baseResponse.SIGNIN_EMAIL_ERROR_TYPE));

    if(!password) return res.status(400).send(response(baseResponse.SIGNIN_PASSWORD_EMPTY));

    return res.status(200).send(await userService.postSignIn(email, password));
};


/**
 * API No. 5
 * API Name : 회원 정보 수정 API + JWT + Validation
 * [PATCH] /app/users/:userId
 * path variable : userId
 * body : nickname
 */
exports.patchUsers = async (req, res) => {

    const userIdFromJWT = req.verifiedToken.userId

    const userId = req.params.userId;
    const nickname = req.body.nickname;

    if (userIdFromJWT != userId) return res.send(errResponse(baseResponse.USER_ID_NOT_MATCH));


    if (!nickname) return res.send(errResponse(baseResponse.USER_NICKNAME_EMPTY));

    const editUserInfo = await userService.editUser(userId, nickname)
    return res.send(editUserInfo);

};

/**
 * API No. 6
 * API Name : 회원 탈퇴 API + JWT + Validation
 * [DELETE] /app/users/
 * path variable :
 *
 */

exports.deleteUsers = async (req, res) => {

    const userIdFromJWT = req.verifiedToken.userId
    return res.send( await userService.deleteUser((userIdFromJWT)))
}



/** JWT 토큰 검증 API
 * [GET] /app/auto-login
 */
exports.check = async (req, res) => {
    const userIdResult = req.verifiedToken.userId;
    console.log(userIdResult);
    return res.send(response(baseResponse.TOKEN_VERIFICATION_SUCCESS));
};
