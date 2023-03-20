import { DataSource } from 'typeorm';
import { Post } from './board.entity';
import {databaseProviders} from '../Database/database.providers'
export const BoardProviders = [
    {
        provide: "POST_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
        inject: ["DATA_SOURCE"],
    },
];
