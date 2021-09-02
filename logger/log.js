import { log } from './winston.js';

const fmt = (request = {}, error = null) => {
  const l = {
    url: request.url,
    http: request.method,
    action: request.action,
    time: new Date()
  };
  if (error instanceof Error) {
    log.error(JSON.stringify(l));
    log.error(error.stack);
    return;
  }
  log.debug(JSON.stringify(l));
};

export { fmt };
