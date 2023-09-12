import {Request, Response} from 'express';
import {createUser, getUserByEmail, getUserByUsernane} from '../database/User';
import bcrypt from 'bcrypt'
import {generateId} from '../utils/GenerateId';
import {verifyPassword} from '../utils/VerifyPassword';
import {generateBearerToken} from '../utils/GenerateToken';
import {getUserByJwt} from '../utils/GetUserByJwt';
import cookie from 'cookie';

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
        }, ['id', 'email', 'username']).then(user => {
            return res.setHeader('Set-Cookie', cookie.serialize('refreshToken', generateBearerToken(user, '7d'), {
                httpOnly: true,
                maxAge: 604800
            })).status(201).json({
                ...user,
                accessToken: generateBearerToken(user, '15m'),
            })
        });
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    await getUserByEmail(email).then(user => {
        if (!user) {
            return res.status(404).json({message: 'Email not found'});
        }
        try {
            if (verifyPassword(password, user.password)) {
                return res.setHeader('Set-Cookie', cookie.serialize('refreshToken', generateBearerToken(user, '7d'), {
                    httpOnly: true,
                    maxAge: 604800
                })).status(200).json({
                    ...user,
                    accessToken: generateBearerToken(user, '15m'),
                })
            }
            return res.status(401).json({message: 'Invalid password'});
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    })
}

export const refresh = async (req: Request, res: Response) => {
    const {refreshToken} = req.cookies;
    if (!refreshToken) {
        return res.status(401).json({message: 'Refresh token not found'}); //TODO: Redirect to login page
    }
    const user = getUserByJwt(refreshToken.replace('Bearer ', ''));
    if (!user) {
        return res.status(401).json({message: 'Token is not valid'});
    }
    return res.setHeader('Set-Cookie', cookie.serialize('refreshToken', generateBearerToken(user, '7d'), {
        httpOnly: true,
        maxAge: 604800
    })).status(200).json({
        ...user,
        accessToken: generateBearerToken(user, '15m'),
    })
}