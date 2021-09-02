import knex from 'knex';
import knexfile from '../knexfile.js';

const environment = process.env.NODE_ENV || 'dev';

const config = knexfile;

const configEnv = config;

const connection = knex(configEnv);

export default connection;
