import { DataSource } from 'typeorm';
import { join } from 'path'

export const databaseProviders = [{
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,

            entities: [
                join(__dirname + '/../**/*.entity{.ts,.js}'),
            ],

            synchronize: true,
        });

        return dataSource.initialize();
    },
}]
