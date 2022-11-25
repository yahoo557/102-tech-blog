module.exports = (app) =>{
    const random = require('./randomControler')
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    // 1. 랜덤 남친짤 auth 토큰 얻기
    app.post('/app/random', random.createAuthToken);
    // 2. 랜덤 남친짤 가져오기
    app.get('/app/random', random.getRandomBoyfriendImage);
}