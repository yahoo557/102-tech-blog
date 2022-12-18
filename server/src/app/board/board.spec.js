const { writePost } = require("./boardControler");
const baseResponse = require("../../../config/baseResponseStatus");
const {test} = require("swagger/lib/commands/project/project");



test('유저 권한이 없다면 게시글을 생성할 수 없다.', ()=>{
    writePost({body:{"title":"테스트 게시글 제목", "body": "테스트 게시글 본문"}}, (res)=>{

    })
})
//
// test('유저 권한이 없다면 게시글을 삭제할 수 없다.',()=>{
//
// })
