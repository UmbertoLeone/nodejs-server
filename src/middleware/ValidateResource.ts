import {Request, Response, NextFunction} from 'express';
import {AnyZodObject} from 'zod';
import {logger} from '../utils/Logger';

const validateResource =
    (schema: AnyZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                });
                next();
            } catch (e) {
                logger.error(`Error validating resources ${e.message}`);
                return res.status(400).send(e.errors);
            }
        };

export default validateResource;