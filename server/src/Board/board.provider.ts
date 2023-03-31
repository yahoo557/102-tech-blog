import { DataSource } from 'typeorm';
import { Post } from './board.entity';
import {databaseProviders} from '../Database/database.providers'
import { Tag } from "../Tag/tag.entity";
export const BoardProviders = [
    {
        provide: "POST_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
        inject: ["DATA_SOURCE"],
    },
    {
        provide: "TAG_REPOSITORY",
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Tag),
        inject:["DATA_SOURCE"],
    },
];
