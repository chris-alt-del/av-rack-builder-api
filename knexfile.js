require('dotenv').config({ path: './.env' });
module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'avrb_api',
    user: process.env.PG_USER,
    password: process.env.PG_PASS
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/db/migrations`
  }
};
