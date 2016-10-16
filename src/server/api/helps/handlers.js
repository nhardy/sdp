import qs from 'querystring';

import request from 'request';

import config from 'app/config';
import { checkStatus } from 'app/lib/fetch';
import { rejectOnError } from 'server/api/helps/lib';
import { settings } from 'server/api/helps/db';


export function getSettingsHandler(req, res, next) { // eslint-disable-line no-unused-vars
  const { studentId } = res.locals;
  fetch(`${config.helps.baseUrl}/student?${qs.stringify({ studentId })}`, {
    headers: {
      ...config.helps.headers,
    },
  }).then(checkStatus)
    .then(raw => raw.json())
    .then(rejectOnError)
    .then((response) => {
      res.send({
        mobile: response.Student.alternative_contact || null,
        ...settings[studentId],
      });
    })
    .catch((error) => {
      next(error);
    });
}

export function postSettingsHandler(req, res, next) {
  const { studentId } = res.locals;
  const { mobile, emailNotifications, smsNotifications } = req.body;
  fetch(`${config.helps.baseUrl}/student/register`, {
    method: 'POST',
    headers: {
      ...config.helps.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      StudentId: studentId,
      Degree: 'Unspecified',
      Status: 'Unspecified',
      FirstLanguage: 'Unspecified',
      CountryOrigin: 'Unspecified',
      AltContact: mobile,
    }),
  }).then(checkStatus)
    .then(raw => raw.json())
    .then(rejectOnError)
    .then(() => {
      settings[studentId] = {
        emailNotifications,
        smsNotifications,
      };
      res.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
}

export function getBookingsHandler(req, res, next) {
  const { studentId } = res.locals;
  const { active } = req.query;
  const query = {
    studentId,
    active,
  };

  fetch(`${config.helps.baseUrl}/workshop/booking/search?${qs.stringify(query)}`, {
    headers: {
      ...config.helps.headers,
    },
  }).then(checkStatus)
    .then(raw => raw.json())
    .then(rejectOnError)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      next(error);
    });
}

export function createBookingHandler(req, res, next) {
  const { studentId } = res.locals;
  const { workshopId } = req.query;
  const query = {
    workshopId,
    studentId,
    userId: 1, // There is no documentation for this field, but it is required ¯\_(ツ)_/¯
  };

  fetch(`${config.helps.baseUrl}/workshop/booking/create?${qs.stringify(query)}`, {
    method: 'POST',
    headers: {
      ...config.helps.headers,
    },
  }).then(checkStatus)
    .then(raw => raw.json())
    .then(rejectOnError)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
}

// NOTE: DO NOT do this in production
export function simpleProxy(prefix) {
  return (req, res, next) => {
    const url = `${config.helps.baseUrl}${prefix}${req.url}`;
    req.pipe(
      request({
        url,
        gzip: true,
        headers: {
          ...config.helps.headers,
        },
      }, (err, response, raw) => {
        if (err) {
          next(err);
          return;
        }

        const body = JSON.parse(raw);

        if (!body.IsSuccess) {
          const error = new Error(body.DisplayMessage || 'Unknown Error');
          error.status = 500;
          next(error);
          return;
        }

        res.status(200).json(body);
      })
    );
  };
}
