import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity, JoinColumn
} from "typeorm";

@Entity()
export class StatusList {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    status:string

    @Column()
    description:string
}


export abstract class EssentialProperty extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn({name:"created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @UpdateDateColumn({name:"updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt:Date;


    @ManyToOne((type)=>StatusList,{
        createForeignKeyConstraints: false,
    })
    status:StatusList

    @JoinColumn({name:'status_id', referencedColumnName: 'id'})
    status_id:number
}

