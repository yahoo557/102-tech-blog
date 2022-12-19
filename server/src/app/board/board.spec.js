const { writePost } = require("./boardControler");
const app = require("../../../config/express")
const request = require("supertest");
const baseResponse = require("../../../config/baseResponseStatus");


describe("jwt 토큰에 따른 게시글 작성 테스트", () => {
    test("jwt 토큰을 전달하지 않았을때의 게시글 작성", async () => {
        await request(app)
            .post('/app/board')
            .set('Accept', 'application/json')
            .type('application/json')
            .send({ title : '변조된 jwt 토큰을 전달했을때의 게시글 작성 title',body: '변조된 jwt 토큰을 전달했을때의 게시글 작성 body'  })
            .expect({
                "isSuccess": false,
                "code": 2000,
                "message": "JWT 토큰을 입력해주세요."
            });
    })
})



