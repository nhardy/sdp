// Please NOTE that this is a stubbed implementation of a Single Sign On Solution
// DO NOT use in a production system
// If you do use anything like this in production, please resign immediately from your position
import { v4 as uuid } from 'uuid';

import config from 'app/config';

const users = {
  1234567: {
    firstName: 'Nathan',
    lastName: 'Hardy',
    email: 'example@student.uts.edu.au',
  },
};

const clients = {
  [config.sso.client]: {
    // In production, this would include domain/port
    callback: '/callback',
  },
};

const sessions = {};

export function loginHandler(req, res) {
  const { username, client } = req.body;

  const user = users[username];
  const ssoClient = clients[client];
  if (!ssoClient) {
    const error = new Error('Invalid client');
    error.status = 400;
    throw error;
  }
  const { callback } = ssoClient;

  if (user) {
    res.cookie('SSO_user', username, { signed: true });
  } else {
    const error = new Error('Login failed');
    error.status = 500;
    throw error;
  }

  if (callback) {
    const token = uuid();
    sessions[`${client}:${token}`] = username;
    res.redirect(302, `${callback}?token=${token}&ttl=36000`);
  }
}

export function retrieveHandler(req, res) {
  const { client, token } = req.query;
  res.send(users[sessions[`${client}${token}`]]);
}
