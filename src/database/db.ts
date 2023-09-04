import {Knex, knex} from 'knex';

const config: Knex.Config = {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
        extension: 'ts',
    },
    seeds: {
        directory: './seeds'
    },
    searchPath: ['knex', 'public']
};
export default knex(config);