module.exports = (app) =>{
    const board = require('./boardControler')
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 1. 게시글생성
    app.post('/app/board', board.writePost);
    
    // 2. 게시글 리스트 가져오기 (+ 특정 유저가 작성한 게시글 리스트)
    app.get('/app/board', board.getPostList);
    
    // 3. 특정 게시글 가져오기
    app.get('/app/board/:id', board.getPost);
    
    // 4. 게시글 수정
    app.fetch('/app/board/:id', board.editPost);

    // 5. 게시글 삭제
    app.delete('/app/board/:id', board.deletePost);
    
    // 6. 핫 게시글 상위 10개
    app.get('/app/board/hot', board.getHotPost);

    // 7. 게시글 좋아요/취소
    app.post('/app/board/like/:id', board.likePost);
};

