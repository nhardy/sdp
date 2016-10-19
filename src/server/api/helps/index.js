import Express from 'express';
import bodyParser from 'body-parser';

import { authentication } from 'server/api/helps/middleware';
import {
  getSettingsHandler,
  postSettingsHandler,
  getBookingsHandler,
  createBookingHandler,
  waitHandler,
  simpleProxy,
} from 'server/api/helps/handlers';


const helpsService = new Express();

helpsService.get('/settings', authentication, getSettingsHandler);
helpsService.post('/settings', authentication, bodyParser.json(), postSettingsHandler);

helpsService.get('/workshop/booking/search', authentication, getBookingsHandler);
helpsService.post('/workshop/booking/create', authentication, createBookingHandler);
helpsService.post('/workshop/wait', authentication, waitHandler);
helpsService.use('/workshop', simpleProxy('/workshop'));

helpsService.use((req, res, next) => {
  const error = new Error(`Resource for '${req.url}' not found`);
  error.status = 404;
  next(error);
});

helpsService.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  let { status } = err;
  if (!status) status = 500;

  res.status(status);
  res.send({
    status,
    message: err.message || 'An unknown error occurred',
  });
});

export default helpsService;
