import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { COOKIE_SECRET, COOKIE_KEY } from 'server/api/sso/constants';
import { clients } from 'server/api/sso/db';
import {
  loginHandler,
  tokenHandler,
  retrieveHandler,
  logoutHandler
} from 'server/api/sso/handlers';


const ssoService = new Express();

ssoService.use(cookieParser(COOKIE_SECRET));

ssoService.use((req, res, next) => {
  res.locals.username = req.signedCookies[COOKIE_KEY];
  next();
});

ssoService.use((req, res, next) => {
  const { client } = req.query;

  const ssoClient = clients[client];
  if (!ssoClient) {
    const error = new Error('Invalid client');
    error.status = 400;

    // No valid client was provided
    throw error;
  }

  res.locals.client = client;
  next();
});

ssoService.post('/login', bodyParser.urlencoded({ extended: false }), loginHandler);

ssoService.get('/token', tokenHandler);

ssoService.get('/retrieve', retrieveHandler);

ssoService.get('/logout', logoutHandler);

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
