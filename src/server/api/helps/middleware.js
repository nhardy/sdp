import qs from 'querystring';

import config from 'app/config';
import { checkStatus } from 'app/lib/fetch';


export function authentication(req, res, next) { // eslint-disable-line import/prefer-default-export
  const { client, token } = req.query;

  if (!client || !token) {
    const error = new Error('Authentication not supplied');
    error.status = 400;
    next(error);
    return;
  }

  fetch(`http://localhost:${config.port}${config.sso.retrieve}?${qs.stringify({ client, token })}`)
    .then(checkStatus)
    .then(raw => raw.json())
    .then((response) => {
      res.locals.studentId = response.studentId;
      next();
    })
    .catch((err) => {
      const { status = 500 } = err.response;
      let error;
      switch (status) {
        case 401:
          error = new Error('Unauthenticated');
          error.status = status;
          break;

        default:
          error = new Error(`SSO Error (${status})`);
          error.status = 500;
      }
      next(error);
    });
}
