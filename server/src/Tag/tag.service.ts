import {Injectable, Inject, Logger} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag, TagList } from "./tag.entity";


export class TagService{
    constructor(
      @Inject("TAG_LIST_REPOSITORY")
      private tagListRepository:Repository<TagList>,
      @Inject("TAG_REPOSITORY")
      private tagRepository:Repository<Tag>
    ) {}

    async getAllTag(): Promise<Tag[]> {
        return await this.tagRepository.find();
    }
    async getAllTagList(): Promise<TagList[]>{
        return await this.tagListRepository.find();
    }

    async createTag(tag:Tag): Promise<boolean>{
        await this.tagRepository.create(tag);
        return true
    }
}


