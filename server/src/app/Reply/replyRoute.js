/**
 * @swagger
 * tags:
 *   name: Reply
 *   description: 댓글 생성 조회 수정 삭제
 */

module.exports = (app) =>{
    const reply = require('./replyControler')
    // const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 0. 테스트
    app.post('/app.reply/test', reply.replyTest);

    // 1. 댓글생성
    app.post('/app/reply', reply.writeReply() );

    // 2. 댓글 리스트 가져오기 (+ 특정 유저가 작성한 댓글 리스트)
    app.get('/app/reply', reply.getReplyList());

    // 3. 댓글 수정
    app.fetch('/app/reply/:id', reply.editReply());

    // 4. 댓글 삭제
    app.delete('/app/reply/:id', reply.deleteReply());


}
