import {User} from '../types/User';
import db from './db';

const Users = () => db<User>('users');

export const getUserById = async (id: string, column: string[] = ['*']) => {
    return await Users().where('id', id).returning(column).first();
}

export const getUserByEmail = async (email: string, column: string[] = ['*']) => {
    return await Users().where('email', email).returning(column).first();
}

export const getUserByUsernane = async (username: string) => {
    return await Users().where('username', username).first();
}

export const createUser = async (user: Partial<User>, column: string[] = ['*']) => {
    return await Users().insert(user).returning(column).then(user => user[0]);
}

export const updateUser = async (user: Partial<User>, column: string[] = ['*']) => {
    return await Users().update(user).where('id', user.id).returning(column).then(user => user[0]);
}
