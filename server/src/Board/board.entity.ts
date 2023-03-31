import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {EssentialProperty} from "../Database/essential.entity";
import { Tag } from "../Tag/tag.entity";

@Entity()
export class Post extends EssentialProperty{
    @Column()
    title : string

    @Column()
    body : string


    @Column()
    description: string

    @Column()
    date: string

    @OneToMany(() => Tag, (tag)=> tag.post)
    tags: Tag[];

}
