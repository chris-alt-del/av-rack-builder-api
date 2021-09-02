import connection from '../db/connection';
import { fmt } from '../logger/log';

const db = connection;

const getBrands = async (req, res, next) => {
  await db('brands')
    .select('*')
    .then(brands => {
      fmt(req);
      res.json(brands);
    })
    .catch(err => next(err));
};

const getAllDevices = async (req, res, next) => {
  await db('devices')
    .select('*')
    .then(devices => {
      fmt(req);
      res.json(devices);
    })
    .catch(err => next(err));
};

const getDevice = async (req, res, next) => {
  const query = 'avr-a';
  await db('devices')
    .join('brands', 'brands.id', 'devices.brand_id')
    .select('*')
    .where('brands.name', 'ilike', `%${query}%`)
    .orWhere('devices.model', 'ilike', `%${query}%`)
    .then(device => {
      console.log(device);
      fmt(req);
      res.json(device);
    })
    .catch(err => next(err));
};

export { getBrands, getAllDevices, getDevice };
