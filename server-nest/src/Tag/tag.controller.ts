import { Get, Post, Controller, Logger, Body, Param } from "@nestjs/common";
import {TagService} from "./tag.service";

@Controller()
export class TagController {
    constructor(private readonly tagService: TagService) {
    }

    //API 01 : 모든태그 조회
    @Get("/api/tag/")
    async getAllTag(@Param() params):Promise<any>{
        Logger.log(`Request {/api/tag/, GET}`, "TagController")
        return await this.tagService.getAllTag()
    }

    //API 02 : 태그리스트 조회
    @Get("/api/tagList")
    async getAllTagList():Promise<any>{
        Logger.log("Request {/api/tag/list, GET}", "TagController")
        return await this.tagService.getAllTagList()
    }

    //API 03 : 게시글 태그생성
    @Post("api/tag")
    async createTag():Promise<any>{
        Logger.log("Request {/api/tag, POST}", "TagController")
        const name = Body.name;

        // return await this.tagService.createTag()
    }

    //API 04 : 태그리스트에 태그 추가
    @Post("api/tagList")
    async createTagList():Promise<any>{
        Logger.log("Request {/api/tag, POST}", "TagController")
        // const postId = Body.postId;

        // return await this.tagService.createTag()
    }


}
