import express from 'express';
import validateResource from '../middleware/ValidateResource';
import {login, refresh, register} from '../controllers/User';
import {loginUserSchema, registerUserSchema} from '../schema/User';
import passport from 'passport';

const router = express.Router();

router.post('/auth/register', validateResource(registerUserSchema), register);
router.post('/auth/login', validateResource(loginUserSchema), login);
router.post('/auth/refresh', passport.authenticate('jwt', {session: false}), refresh);

export default router;