import {Get, Post, Controller} from "@nestjs/common";
import {TagService} from "./tag.service";

@Controller()
export class TagController {
    constructor(private readonly tagService: TagService) {
    }

    @Get("/api/tag")
    async getAllTag():Promise<any>{

        return await this.tagService.getAllTag()
    }
}
