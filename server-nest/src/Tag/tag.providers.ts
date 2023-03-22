import { DataSource } from 'typeorm';
import {Tag,TagList} from './tag.entity'

export const TagProviders=[
    {
        provide: "TAG_REPOSITORY",
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Tag),
        inject:["DATA_SOURCE"],
    },
    {
        provide: "TAG_LIST_REPOSITORY",
        useFactory:(dataSource: DataSource) => dataSource.getRepository(TagList),
        inject:["DATA_SOURCE"],
    }
]
