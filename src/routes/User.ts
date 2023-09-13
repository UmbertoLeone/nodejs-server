import express from 'express';
import {getUserById} from '../database/User';
import {logger} from '../utils/Logger';


const router = express.Router();

router.get('/api/users', async (req, res) => {
    try {
        if (!(!!req && !!req.query && !!req.query.id)) {
            res.status(400).json({error: 'Bad request'});
        }
        res.json(await getUserById(req.query.id.toString()));
    } catch (error) {
        logger.error(`Error getting user ${req.query.id} ${error.message}`);
        throw new Error(error);
    }
});

export default router;