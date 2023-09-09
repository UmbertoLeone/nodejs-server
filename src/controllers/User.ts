import {Request, Response} from 'express';
import {createUser, getUserByEmail, getUserByUsernane} from '../database/User';
import bcrypt from 'bcrypt'
import {generateId} from "../utils/GenerateId";

export const register = async (req: Request, res: Response) => {
    const {username, email, password} = req.body;

    if (await getUserByEmail(email)) {
        return res.status(409).json({message: 'Email already in use'});
    }
    if (await getUserByUsernane(username)) {
        return res.status(409).json({message: 'Username already in use'});
    }

    try {
        await createUser({
            id: generateId(),
            username,
            email,
            password: await bcrypt.hash(password, Number(process.env.SALT))
        }).then(() => res.status(201).json({message: 'User created'}));
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}