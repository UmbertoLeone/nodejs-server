import express from 'express';
import validateResource from "../middleware/ValidateResource";
import {register} from "../controllers/User";
import {registerUserSchema} from "../schema/User";

const router = express.Router();

router.post('/auth/register', validateResource(registerUserSchema), register);

export default router;