import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BoardModule } from './Board/board.module'
import {TagModule} from "./Tag/tag.module";

@Module({
  imports: [
      BoardModule,
      TagModule,
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: `.env`
      }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
