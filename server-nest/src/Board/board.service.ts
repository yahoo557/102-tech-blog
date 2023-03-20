import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './board.entity'

export class BoardService {
    constructor(
        @Inject('POST_REPOSITORY')
        private postRepository: Repository<Post>
    ) {}

    getPostById(boardId:number): Promise <Post> {

        return this.postRepository.findOneBy({ id:boardId})
    }

    getAllPost():Promise<Post[]> {
        return this.postRepository.find();
    }


}
