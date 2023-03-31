import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import {EssentialProperty} from "../Database/essential.entity";
import {Post} from "../Board/board.entity"

@Entity()
export class TagList extends  EssentialProperty{
    @Column()
    name: string;

    @Column({name:"image_url", nullable:true})
    imageUrl: string;
}


@Entity()
export class Tag extends EssentialProperty{

    @Column({name:'post_id'})
    postId: number

    @Column({name:'tag_list_id'})
    tagListId: number

    @ManyToOne((type)=>Post,{
        createForeignKeyConstraints: false,
    })
    @JoinColumn({name:'post_id', referencedColumnName: 'id'})
    post: Post

    @ManyToOne((type)=>TagList,{
        createForeignKeyConstraints: false,
    })
    @JoinColumn({name:'tag_list_id', referencedColumnName: 'id'})
    tag: TagList
}
