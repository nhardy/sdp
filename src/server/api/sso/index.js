import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { loginHandler } from 'server/api/sso/handlers';


const ssoService = new Express();

ssoService.use(cookieParser('SUPER_SECRET_THING_DO_NOT_DO_THIS_IN_PRODUCTION'));
ssoService.post('/login', bodyParser.urlencoded({ extended: false }), loginHandler);

ssoService.use((req, res, next) => {
  const error = new Error(`Resource for '${req.url}' not found`);
  error.status = 404;
  next(error);
});

ssoService.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  let { status } = err;
  if (!status) status = 500;

  res.status(status);
  res.send({
    status,
    message: err.message,
  });
});

export default ssoService;
