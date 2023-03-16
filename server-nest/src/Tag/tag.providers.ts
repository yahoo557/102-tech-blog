import { DataSource } from 'typeorm';
import {Tag} from './tag.entity'

export const TagProviders=[
    {
        provide: "TAG_REPOSITORY",
        useFactory:(dataSource: DataSource) => dataSource.getRepository(Tag),
        inject:["DATA_SOURCE"],
    }
]
