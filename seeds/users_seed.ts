import {Knex} from 'knex';
import {generateId} from '../src/utils/GenerateId';
import {faker} from '@faker-js/faker';
import {User} from '../src/types/User';

const SEED_COUNT = 10;

const createUser = (): User => ({
    id: generateId(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

export async function seed(knex: Knex): Promise<void> {
    const users = Array.from({length: SEED_COUNT}).fill(null).map(() => createUser());
    await knex('users').insert(users);
}
