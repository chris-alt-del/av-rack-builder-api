import express from 'express';
import * as ctrl from './ctrl';

const router = express.Router();

const html = `
  <html>
    <body>
      <h2>Server is healthy</h2>
    </body>
  </html>
`;

router.get('/', (request, response) => {
  response.send(html);
});

router.get('/brands', ctrl.getBrands);

export default router;
