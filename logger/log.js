import { log } from './winston.js';

const fmt = (request = {}, error = null, type = null) => {
  const { url, method, action } = request;
  const format = {
    url: url,
    http: method,
    action: action,
    time: new Date()
  };
  if (error instanceof Error) {
    log.error(JSON.stringify(format));
    log.error(error.stack);
    return;
  }
  if (type === 'badroute') {
    format.badroute = true;
    log.warn(JSON.stringify(format));
    return;
  }
  log.debug(JSON.stringify(format));
};

export { fmt };
