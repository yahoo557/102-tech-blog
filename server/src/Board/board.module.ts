import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {DatabaseModule} from "../Database/database.module";
import {BoardController} from "./board.controller";
import {BoardService} from "./board.service";
import {BoardProviders} from "./board.provider"

@Module({
    imports: [DatabaseModule],
    controllers: [BoardController],
    providers: [...BoardProviders,BoardService],
})

export class BoardModule {}
