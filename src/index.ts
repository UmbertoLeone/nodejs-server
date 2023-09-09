import express from 'express';
import morgan from 'morgan';
import router from "./routes";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(router);

const port = Number(process.env.PORT || 8080);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});