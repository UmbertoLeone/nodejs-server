import passport from 'passport';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import {getUserById} from '../database/User';

export default passport.use('jwt', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: false,
    secretOrKey: process.env.JWT_SECRET,
}, (payload, done) => {
    getUserById(payload.id).then(user => {
        try {
            return done(null, !!user);
        } catch (error) {
            console.error(error);
        }
    })
}))
