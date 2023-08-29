import {User} from './User';

declare module 'knex/types/tables' {
    interface Tables {
        users: User;
    }
}
