import jwt from "jsonwebtoken";
import {getUserById} from "../database/User";

export const getUserByJwt = (token: string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            return getUserById(decoded.id);
        })
    } catch (e) {
        throw new Error('Invalid token');
    }
}