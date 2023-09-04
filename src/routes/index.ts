import express from 'express';
import user from "./User";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.status(200).send());
router.use(user);

export default router;