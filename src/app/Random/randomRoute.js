module.exports = (app) =>{
    const random = require('./randomControler')
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 랜덤 남친짤 가져오기
    app.post('/app/random', random.getRandomBoyFriendImage);
    
    
}