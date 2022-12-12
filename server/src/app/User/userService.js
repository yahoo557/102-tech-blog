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



exports.createUser = async (email, password, nickname) => {
    const connection = await pool.connect();
    try {
        // 이메일 중복 확인
        console.log(typeof(await userProvider.emailCheck(email)))
        // if () return errResponse(baseResponse.SIGNUP_REDUNDANT_EMAIL);

        // 비밀번호 암호화
        const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");

        await connection.query("BEGIN")
        const userIdResult = await userDao.insertUserInfo(connection, [email, hashedPassword, nickname]);
        await connection.query("COMMIT");

        return response(baseResponse.SUCCESS);
    } catch (err) {
        logger.error(`App - createUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};


exports.postSignIn = async function (email, password) {
    try {
        // 이메일 여부 확인
        const emailRows = await userProvider.emailCheck(email);
        if (emailRows.length < 1) return errResponse(baseResponse.SIGNIN_EMAIL_WRONG);

        const selectEmail = emailRows[0].email

        // 비밀번호 확인
        const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");
        console.log(hashedPassword);

        const selectUserPasswordParams = [selectEmail, hashedPassword];
        const passwordRows = await userProvider.passwordCheck(selectUserPasswordParams);

        if (passwordRows[0].password !== hashedPassword) return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);


        // 계정 상태 확인
        const userInfoRows = await userProvider.accountCheck(email);

        if (userInfoRows[0].status === "ONLINE") return errResponse(baseResponse.SIGNIN_INACTIVE_ACCOUNT);

        if (userInfoRows[0].status === "OFFLINE") return errResponse(baseResponse.SIGNIN_WITHDRAWAL_ACCOUNT);



        console.log(userInfoRows[0].id) // DB의 userId

        //토큰 생성 Service
        let token = await jwt.sign({userId: userInfoRows[0].id,}, secret_config.jwtsecret, {expiresIn: 3600*360, subject: userInfoRows[0].id,});
        console.log(token);
        return response(baseResponse.SUCCESS, {'userId': userInfoRows[0].id, 'jwt': token});

    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

exports.editUser = async function (id, nickname) {
    try {
        console.log(id)
        const connection = await pool.getConnection(async (conn) => conn);
        const editUserResult = await userDao.updateUserInfo(connection, id, nickname)
        connection.release();

        return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.deleteUser = async (id) => {
    try{
        const connection = await pool.getConnection(async(conn) => conn);

    }catch (err){

    }
};