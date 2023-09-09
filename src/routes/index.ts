import express from 'express';
import user from "./User";
import authentication from "./Authentication";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.status(200).send());
router.use(user);
router.use(authentication);

export default router;