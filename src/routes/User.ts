import express from 'express';
import {getUserById} from './../database/User';

const router = express.Router();

router.get('/api/users', async (req, res) => {
    if (!(!!req && !!req.query && !!req.query.id)) {
        res.status(400).json({error: 'Bad request'});
    }
    res.json(await getUserById(req.query.id.toString()));
});

export default router;