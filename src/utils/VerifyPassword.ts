import bcrypt from 'bcrypt';
import {getUserById} from "../database/User";
import {logger} from "./Logger";

export const verifyPassword = (hashedPassword, userPassword) => {
    try {
        return bcrypt.compareSync(hashedPassword, userPassword, function (err, result) {
            return result;
        })
    } catch (e) {
        logger.error(`Error verifying password ${e.message}`);
        throw new Error(e);
    }
}