import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {getUserByEmail} from "./database/User";

passport.use(new LocalStrategy((email, password, done) => {
    getUserByEmail(email).then(user => {
        if (!user) {
            return done(null, false, {message: 'Incorrect email.'});
        }
        
    });
}));