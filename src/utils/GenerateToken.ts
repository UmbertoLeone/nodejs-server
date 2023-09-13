import {User} from '../types/User';
import jwt from 'jsonwebtoken';
import {logger} from './Logger';

export const generateBearerToken = (user: User, expiresIn: string) => {
    try {
        return "Bearer " + jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: expiresIn})
    } catch (e) {
        logger.error(`Error generating bearer token ${e.message}`);
        throw new Error(e);
    }
}

