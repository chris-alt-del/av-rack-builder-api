import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import { log } from './logger/winston';

log.info('API starting..');
const app = express();
const port = 3030;

app.use(express.json()).use(cors()).use('/', routes);

app.listen(port, () => {
  log.info(`API started on port ${port}`);
});
