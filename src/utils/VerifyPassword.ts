import bcrypt from 'bcrypt';

export const verifyPassword = (hashedPassword, userPassword) => {
    return bcrypt.compareSync(hashedPassword, userPassword, function (err, result) {
        return result;
    })
}