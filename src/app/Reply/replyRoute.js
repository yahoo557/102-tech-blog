module.exports = (app) =>{
    const reply = require('./replyControler')
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 댓글생성
    app.post('/app/reply', reply.writePost);
    
    // 2. 댓글 리스트 가져오기 (+ 특정 유저가 작성한 댓글 리스트)
    app.get('/app/reply', reply.getPostList);

    // 3. 댓글 수정
    app.fetch('/app/reply/:id', reply.editPost);

    // 4. 댓글 삭제
    app.delete('/app/reply/:id', reply.deletePost);
    

}