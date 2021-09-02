import express from 'express';
import * as ctrl from './ctrl';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Healthy' });
});

router.get('/brands', ctrl.getBrands);
router.get('/devices/', ctrl.getDevice);
router.get('/devices/all', ctrl.getAllDevices);

export default router;
