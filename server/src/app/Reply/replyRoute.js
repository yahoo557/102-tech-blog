/**
 * @swagger
 * tags:
 *   name: Reply
 *   description: 댓글 생성 조회 수정 삭제
 */

module.exports = (app) =>{
    const reply = require('./replyControler')

    // 1. 댓글생성
    app.post('/app/reply', reply.writeReply);

    // 2. 댓글 리스트 가져오기
    app.get('/app/reply', reply.getReplyList);

    // 3. 댓글 수정
    app.patch('/app/reply/:id', reply.editReply);

    // 4. 댓글 삭제
    app.delete('/app/reply/:id', reply.deleteReply);


}
