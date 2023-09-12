import express from 'express';
import morgan from 'morgan';
import router from './routes';
import passport from './strategies/JwtStrategy';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(router);


const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});