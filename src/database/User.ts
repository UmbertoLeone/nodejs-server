import {User} from '../types/User';
import db from './db';

const Users = () => db<User>('users');

export const getUserById = async (id: string) => {
    return await Users().where('id', id).first();
}

export const getUserByEmail = async (email: string) => {
    return await Users().where('email', email).first();
}

export const createUser = async (user: Partial<User>) => {
    return await Users().insert(user).returning('*');
}

export const updateUser = async (user: Partial<User>) => {
    return await Users().update(user).where('id', user.id).returning('*');
}
