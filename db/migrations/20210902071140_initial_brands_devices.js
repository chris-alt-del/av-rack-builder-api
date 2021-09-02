// migration for initial brands and devices (more to come)

const brands = [
  { name: 'Sony' },
  { name: 'Yamaha' },
  { name: 'Denon' },
  { name: 'Integra' },
  { name: 'Onkyo' },
  { name: 'Marantz' },
  { name: 'Anthem' }
];

const devices = [
  // denon
  {
    model: 'AVR-A110',
    brand_id: 3,
    dimensions: { width: 17, depth: 19, height: 8 },
    notes: ''
  },
  {
    model: 'AVR-X8500HA',
    brand_id: 3,
    dimensions: { width: 17, depth: 19, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 19, height: 10'
  },
  {
    model: 'AVR-X6700H',
    brand_id: 3,
    dimensions: { width: 17, depth: 15, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 15, height: 9'
  },
  {
    model: 'AVR-X4700H',
    brand_id: 3,
    dimensions: { width: 17, depth: 15, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 15, height: 9'
  },
  {
    model: 'AVR-X3700H',
    brand_id: 3,
    dimensions: { width: 17, depth: 15, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 15, height: 9'
  },
  {
    model: 'AVR-X2700H',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 13, height: 9'
  },
  {
    model: 'AVR-S960H',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 13, height: 9'
  },
  {
    model: 'AVR-X1600H (2019)',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 6 },
    notes: 'w/ antenna - width: 17, depth: 13, height: 9'
  },
  {
    model: 'AVR-S750H (2019)',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 6 },
    notes: 'w/ antenna - width: 17, depth: 13, height: 9'
  },
  {
    model: 'DRA-800H (2019)',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 6 },
    notes: 'w/ antenna - width: 17, depth: 13, height: 9'
  },
  {
    model: 'AVR-S650H (2019)',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 6 },
    notes: 'w/ antenna - width: 17, depth: 13, height: 9'
  },
  {
    model: 'AVR-S540BT (2018)',
    brand_id: 3,
    dimensions: { width: 17, depth: 13, height: 6 },
    notes: ''
  },
  // sony
  {
    model: 'STR-ZA1100ES',
    brand_id: 1,
    dimensions: { width: 17, depth: 16, height: 7 },
    notes: ''
  },
  {
    model: 'STR-ZA2100ES',
    brand_id: 1,
    dimensions: { width: 17, depth: 16, height: 7 },
    notes: ''
  },
  {
    model: 'STR-DH790',
    brand_id: 1,
    dimensions: { width: 17, depth: 12, height: 5 },
    notes: ''
  },
  {
    model: 'STR-DH590',
    brand_id: 1,
    dimensions: { width: 17, depth: 12, height: 5 },
    notes: ''
  },
  {
    model: 'STR-DH190',
    brand_id: 1,
    dimensions: { width: 17, depth: 11, height: 5 },
    notes: ''
  },
  {
    model: 'STR-DN1080',
    brand_id: 1,
    dimensions: { width: 17, depth: 13, height: 6 },
    notes: ''
  },
  {
    model: 'STR-ZA5000ES',
    brand_id: 1,
    dimensions: { width: 17, depth: 16, height: 7 },
    notes: ''
  },
  {
    model: 'STR-ZA3100ES',
    brand_id: 1,
    dimensions: { width: 17, depth: 16, height: 7 },
    notes: ''
  },
  // yamaha
  {
    model: 'RX-A8A',
    brand_id: 2,
    dimensions: { width: 17, depth: 19, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 19, height: 11'
  },
  {
    model: 'RX-A6A',
    brand_id: 2,
    dimensions: { width: 17, depth: 17, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 17, height: 11'
  },
  {
    model: 'RX-A4A',
    brand_id: 2,
    dimensions: { width: 17, depth: 17, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 17, height: 11'
  },
  {
    model: 'RX-A2A',
    brand_id: 2,
    dimensions: { width: 17, depth: 15, height: 7 },
    notes: ''
  },
  {
    model: 'CX-A5200',
    brand_id: 2,
    dimensions: { width: 17, depth: 19, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 19, height: 11'
  },
  {
    model: 'MX-A5200',
    brand_id: 2,
    dimensions: { width: 17, depth: 18, height: 8 },
    notes: ''
  },
  {
    model: 'RX-A3080',
    brand_id: 2,
    dimensions: { width: 17, depth: 19, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 19, height: 11'
  },
  {
    model: 'RX-A2080',
    brand_id: 2,
    dimensions: { width: 17, depth: 19, height: 8 },
    notes: 'w/ antenna - width: 17, depth: 19, height: 11'
  },
  {
    model: 'RX-A1080',
    brand_id: 2,
    dimensions: { width: 17, depth: 17, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 17, height: 10'
  },
  {
    model: 'RX-V6A',
    brand_id: 2,
    dimensions: { width: 17, depth: 15, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 15, height: 15'
  },
  {
    model: 'RX-V4A',
    brand_id: 2,
    dimensions: { width: 17, depth: 15, height: 7 },
    notes: 'w/ antenna - width: 17, depth: 15, height: 10'
  },
  {
    model: 'RX-V385',
    brand_id: 2,
    dimensions: { width: 17, depth: 12, height: 6 },
    notes: ''
  }
];

exports.up = async knex => {
  await knex.transaction(async trx => {
    await trx('brands').insert(brands);
    await trx('devices').insert(devices);
  });
};

exports.down = function (knex) {};
