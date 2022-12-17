
module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 유저 생성 (회원가입) API

    app.post('/app/users', user.postUsers);

    // 2. 유저 조회 API (+ 검색)

    app.get('/app/users',user.getUsers);

    // 3. 특정 유저 조회 API
    app.get('/app/users/:userId', user.getUserById);

    // 4. 로그인 하기 API (JWT 생성)
    app.post('/app/login', user.login);

    // 5. 회원 정보 수정 API (JWT 검증 및 Validation - 메소드 체이닝 방식으로 jwtMiddleware 사용)
    app.patch('/app/users/:userId', jwtMiddleware, user.patchUsers);

    // 6. 회원 탈퇴
    app.delete('/app/users/', jwtMiddleware, user.deleteUsers);
    // TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
    app.get('/app/auto-login', jwtMiddleware, user.check);
};




