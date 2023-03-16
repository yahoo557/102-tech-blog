import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title : string

    @Column()
    body : string

    @Column()
    user_id:number

    @Column()
    status: string

    @Column()
    created_at: string

    @Column()
    updated_at: string

    @Column()
    description: string

    @Column()
    date: string

}
