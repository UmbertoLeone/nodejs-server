import jwt from 'jsonwebtoken';
import {getUserById} from '../database/User';
import {logger} from './Logger';

export const getUserByJwt = (token: string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            return getUserById(decoded.id);
        })
    } catch (e) {
        logger.error(`Error getting user by jwt ${e.message}`);
        throw new Error(e);
    }
}