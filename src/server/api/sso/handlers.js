// Please note that this is a stubbed implementation of a Single Sign On Solution
// DO NOT use in a production system!
//
// If you do use anything like this in production, please resign immediately from your position.
// You do not belong in the Information Technology Industry.
import { pick } from 'lodash';
import { v4 as uuid } from 'uuid';

import { COOKIE_KEY } from 'server/api/sso/constants';
import { users, clients, sessions } from 'server/api/sso/db';


function newSession(client, username) {
  const token = uuid();
  sessions[`${client}:${token}`] = username;
  return { token, ttl: 36000 };
}

export function loginHandler(req, res) {
  const { username, password } = req.body;

  const user = users[username];

  const { callback } = clients[res.locals.client];

  // Extremely unsecure. NEVER do this in production.
  // @see https://youtu.be/8ZtInClXe1Q
  if (!user || password !== user.password) {
    const error = new Error('Login failed');
    error.status = 403;

    // Rather than producing a JSON response, we would display a login page from the login service
    // Just throwing the error here, because it isn't important for this assignment
    throw error;
  }

  // The User has authenticated with the SSO service, set a cookie on the login service
  res.cookie(COOKIE_KEY, username, { signed: true, httpOnly: true });

  const { token, ttl } = newSession(res.locals.client, username);
  res.redirect(302, `${callback}?token=${token}&ttl=${ttl}`);
}

export function tokenHandler(req, res) {
  const { username } = res.locals;

  if (!username) {
    const error = Error('Unauthenticated');
    error.status = 401;

    throw error;
  }

  const { token, ttl } = newSession(res.locals.client, username);

  res.send({ token, ttl });
}

export function retrieveHandler(req, res) {
  const { token } = req.query;

  const user = users[sessions[`${res.locals.client}:${token}`]];
  if (!user) {
    const error = Error('Invalid token');
    error.status = 401;

    // There was no matching session for the `client`/`token` combination
    throw error;
  }

  res.send(pick(user, clients[res.locals.client].scope));
}
