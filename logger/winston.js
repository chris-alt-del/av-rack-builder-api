import winston from 'winston';
// import { log } from './logger/log.js';

const custConfig = {
  levels: {
    error: 0,
    warn: 1,
    data: 2,
    info: 3,
    debug: 4
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    data: 'grey',
    info: 'cyan',
    debug: 'blue'
  },
  consoleOpts: {
    prettyPrint: true,
    colorize: true,
    timestamp: true
  }
};

const log = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ],
  levels: custConfig.levels,
  level: process.env.NODE_ENV === 'dev' ? 'debug' : 'warn'
});

winston.addColors(custConfig.colors);

export { log };
