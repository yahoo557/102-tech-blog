import {Injectable, Inject, Logger} from '@nestjs/common';
import { Repository } from 'typeorm';
import {Tag} from './tag.entity'

export class TagService{
    constructor(
        @Inject('TAG_REPOSITORY')
        private tagRepository:Repository<Tag>
    ) {}

    async getAllTag(): Promise<Tag[]> {
        Logger.log("Request {/api/tag, GET}", "TagController")
        return await this.tagRepository.find();
    }

}
