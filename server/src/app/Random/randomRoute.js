module.exports = (app) =>{
    const random = require('./randomControler')
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    // 1. 랜덤 남친짤 auth 토큰 얻기
    app.post('/app/random', random.createAuthToken);
    // 2. 랜덤 남친짤 가져오기
    app.get('/app/random', random.getRandomBoyfriendImage);

    // 3. 모바일프로그래밍 랜덤 퀴즈 20개
    app.get('/app/quiz', random.getQuiz);
}