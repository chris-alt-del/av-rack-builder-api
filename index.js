import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import { log } from './logger/winston';
import { fmt } from './logger/log';

log.info('API starting..');
const app = express();
const port = 3030;

app
  .use(express.json())
  .use(cors())
  .use('/', routes)
  .use((req, res, next) => {
    const { url } = req;
    res.status(404).send({
      status: 404,
      error: `Route '${url}' not found`
    });
    fmt(req, null, 'badroute');
  });

app.listen(port, () => {
  log.info(`API started on port ${port}`);
});
