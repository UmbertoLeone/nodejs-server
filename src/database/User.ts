import {User} from '../types/User';
import db from './db';

const Users = () => db<User>('users');

export const getUserById = async (id: string) => {
    return await Users().where('id', id).first();
}
