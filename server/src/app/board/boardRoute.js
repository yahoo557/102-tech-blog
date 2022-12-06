/**
 * @swagger
 * tags:
 *   name: Board
 *   description: 게시글 생성 조회 수정 삭제
 */
module.exports = (app) =>{
    const board = require('./boardControler')
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 게시글생성
    app.post('/app/board', board.writePost);
    
    // 2. 게시글 리스트 가져오기 (유저id, 제목으로 검색 + 인기게시글, 카테고리 별 게시글)
    app.get('/app/board/', board.getPostList);
    
    // 3. 특정 게시글 가져오기
    app.get('/app/board/:id', board.getPost);
    
    // 4. 게시글 수정
    app.patch('/app/board/:id', board.editPost);

    // 5. 게시글 삭제
    app.delete('/app/board/:id', board.deletePost);

    
};

