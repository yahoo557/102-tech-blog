import type { Application } from "express"
import { TagController } from "./tag.controller"

module.exports = (app:Application) => {
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    const tagController = new TagController()
    // [POST] 태그 템플릿 생성
    app.post("/app/tag",tagController.createTagTemplate)
    // [GET] 태그 템플릿 조회
    app.get("/app/tag", tagController.readTagTemplate)
    // [DELETE] 태그 삭제 TODO : POST 와 연결되어있는 생성된 태그도 삭제
}
