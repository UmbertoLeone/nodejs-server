import {User} from '../types/User';
import jwt from "jsonwebtoken";

export const generateBearerToken = (user: User, expiresIn: string) => {
    return "Bearer " + jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: expiresIn})
}