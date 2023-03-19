import { Entity, Column, ManyToOne } from 'typeorm';
import {EssentialProperty} from "../Database/essential.entity";
import {Post} from "../Board/board.entity"

@Entity()
export class TagList extends  EssentialProperty{

    @Column()
    name: string;
}


@Entity()
export class Tag extends EssentialProperty{
    @ManyToOne((type)=>Post,{
       createForeignKeyConstraints: false,
    })
    post: Post

    @ManyToOne((type)=>TagList,{
        createForeignKeyConstraints: false,
    })
    tag:TagList
}
