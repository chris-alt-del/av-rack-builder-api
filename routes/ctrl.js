import connection from '../db/connection';
import { fmt } from '../logger/log';

const db = connection;

const getBrands = async (req, res, next) => {
  const brands = await db('brands')
    .select('*')
    .then(brands => {
      fmt(req);
      res.json(brands);
    })
    .catch(err => next(err));
};

export { getBrands };
