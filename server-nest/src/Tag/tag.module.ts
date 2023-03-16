import {Module} from '@nestjs/common'
import {DatabaseModule} from "../Database/database.module";
import {TagService} from "./tag.service";
import {TagController} from "./tag.controller";
import {TagProviders} from "./tag.providers";

@Module({
   imports: [DatabaseModule],
   controllers: [TagController],
   providers:[...TagProviders, TagService],
})

export class TagModule {}
