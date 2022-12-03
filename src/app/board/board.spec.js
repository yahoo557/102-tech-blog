const { writePost } = require("./boardControler");
const baseResponse = require("../../../config/baseResponseStatus");

test('게시글은 제목과 본문이 비어 있을수 없다.', ()=>{
    expect(writePost({body :{"body": "", "title":""}} )).toEqual(baseResponse.BOARD_BODY_EMPTY);
    expect(writePost({body :{"body":"본문은 값이 있습니다.", "title": ""}})).toEqual(baseResponse.BOARD_BODY_EMPTY);
    expect(writePost({body :{"body":"", "title": "제목은 값이 있습니다."}})).toEqual(baseResponse.BOARD_BODY_EMPTY);
})

test('유저 권한이 없다면 게시글 작성을 할수 없습니다.', ()=>{

})