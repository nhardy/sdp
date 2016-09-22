import qs from 'querystring';

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
  })
    .then(checkStatus)
    .then((raw) => raw.json())
    .then(rejectOnError)
    .then((response) => {
      res.send({
        mobile: response.AltContact || null,
        ...settings[studentId],
      });
    })
    .catch((error) => { // eslint-disable-line no-unused-vars
      res.send({
        ...settings[studentId],
      });

      // Temporarily disabled
      // next(error);
    });
}

export function postSettingsHandler(req, res, next) {
  const { studentId } = res.locals;
  const { emailNotifications, smsNotifications } = req.body;
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
    }),
  })
    .then(checkStatus)
    .then((raw) => raw.json())
    .then(rejectOnError)
    .then(() => {
      settings[studentId] = {
        emailNotifications,
        smsNotifications,
      };
      res.send({
        success: true,
      });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
}