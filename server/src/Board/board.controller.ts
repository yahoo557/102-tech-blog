import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Req,
    Logger,
    HttpCode,
    Header,
    Param,
    Query,
    ParseIntPipe
} from "@nestjs/common";
import { BoardService } from "./board.service"
import { Request, Response } from "express"



@Controller()
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    // API 01 : 특정 게시글 조회
    @Get("/api/board/:id")
    async readPost(@Param('id', ParseIntPipe) boardId:number): Promise<any> {
        Logger.log(`Request {/api/board/${boardId}, GET}"`, "BoardController")
        return await this.boardService.getPostById(boardId);
    }

    // API 02 : 전체 게시글 조회
    @Get("/api/board/")
    async getFeed(@Query() query): Promise<any> {
        const tagListId = query.tagId

        Logger.log("Request {/api/board, GET}", "BoardController")

        return await this.boardService.getAllPost();
    }

    // API 03 : 게시글 생성
    @Post("/api/board")
    createPost(@Req() req: Request ): Response {

        return
    }




}
