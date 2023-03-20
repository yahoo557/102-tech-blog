import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {EssentialProperty} from "../Database/essential.entity";

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

}
