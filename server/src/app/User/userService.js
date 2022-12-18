const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");

const userProvider = require("./userProvider");
const userDao = require("./userDao");
const secret_config = require("../../../config/secret");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");
const boardDao = require("../board/boardDao");
const {stringify} = require("nodemon/lib/utils");



exports.createUser = async (email, password, nickname) => {
    const connection = await pool.connect();
    try {
        // 이메일 중복 확인
        if (await userProvider.emailCheck(email)) return errResponse(baseResponse.SIGNUP_REDUNDANT_EMAIL);

        // 비밀번호 암호화
        const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");

        await connection.query("BEGIN")
        const userIdResult = await userDao.insertUserInfo(connection, [email, hashedPassword, nickname]);
        await connection.query("COMMIT");

        return response(baseResponse.SUCCESS, userIdResult);
    } catch (err) {
        logger.error(`App - createUser Service error\n: ${err.message}`);

        return errResponse(baseResponse.DB_ERROR);
    }
};


exports.postSignIn = async function (email, password) {
    try {
        // 이메일 여부 확인
        const emailRows = await userProvider.emailCheck(email);

        if (emailRows.rows.length < 1) return errResponse(baseResponse.SIGNIN_EMAIL_WRONG);

        const selectEmail = emailRows.rows[0].email


        // 비밀번호 확인
        const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");

        const selectUserPasswordParams = [];
        const passwordRows = await userProvider.passwordCheck(selectEmail, hashedPassword);

        if (passwordRows.rows[0].password !== hashedPassword) return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);


        // 계정 상태 확인
        const userInfoRows = await userProvider.accountCheck(email);


        if (userInfoRows.rows[0].status === "OFFLINE") return errResponse(baseResponse.SIGNIN_WITHDRAWAL_ACCOUNT);


        //토큰 생성 Service
        let token = await jwt.sign({userId: userInfoRows.rows[0].id}, secret_config.jwtsecret, {expiresIn: 3600*360, subject: stringify(userInfoRows.rows[0].id) });
        return response(baseResponse.SUCCESS, {'userId': userInfoRows.rows[0].id, 'jwt': token});

    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

exports.editUser = async (id, nickname) => {
    try {
        const connection = await pool.connect();
        const editUserResult = await userDao.updateUserInfo(connection, id, nickname)

        return response(baseResponse.SUCCESS, {});

    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.deleteUser = async (id) => {
    try{
        const connection = await pool.connect();
        const deleteUserResult = await userDao.deleteUser(connection,id);

        //삭제 되었으니 로그아웃 되어야함
        return response(baseResponse.SUCCESS, {});

    }catch (err){
        logger.error(`App - deleteUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};
