import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './board.entity'
import { Tag } from '../Tag/tag.entity'

export class BoardService {
    constructor(
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<Post>,
        @Inject('TAG_REPOSITORY')
        private tagRepository: Repository<Tag>
    ) {}

    getPostById(boardId:number): Promise <Post> {
        return this.postRepository.findOneBy({ id:boardId})
    }

    async getAllPost():Promise<Post[]> {
        return await this.postRepository.find({
            relations:{
                tags:true
            }
        });
    }


}
