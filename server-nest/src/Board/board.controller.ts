import {Controller, Get, Post, Patch, Delete, Req, Logger} from '@nestjs/common';
import { BoardService } from "./board.service"
import { Request, Response } from "express"
import {HttpCode, Header, Param} from "@nestjs/common";



@Controller()
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get("/api/board/:id")
    async readPost(@Param() params): Promise<any> {
        const boardId: number = params.id
        Logger.log(`Request {/api/board/${boardId}, GET}"`, "BoardController")
        return await this.boardService.getPostById(boardId);
    }

    @Get("/api/board/")
    async getFeed(): Promise<any> {
        Logger.log("Request {/api/board, GET}", "BoardController")

        return await this.boardService.getAllPost();
    }

    @Post("/api/board")
    createPost(@Req() req: Request ): Response {

        return
    }

}
