import cookies from 'app/lib/cookies';


export default class SSO {
  // FIXME: This would be hosted on a different domain in production
  constructor({ login = '/api/sso/login', client = 'uts-helps-booking' }) {
    this._cookieKey = '_sso';
    this._login = login;
    this._client = client;
  }

  _setCookie({ token, ttl }) {
    const value = JSON.stringify(token);
    cookies.setItem(this._cookieKey, value, ttl, '/');
  }

  _getCookie() {
    return JSON.parse(cookies.getItem(this._cookieKey));
  }

  _request({ url, body }, done) {
    const req = new XMLHttpRequest();

    req.addEventListener('load', () => {
      let error = null;
      let response;
      try {
        response = JSON.parse(req.responseText);

        if (req.status === 401) throw new Error('Unauthenticated');
        if (req.status >= 400) {
          throw new Error(response.error);
        }
      } catch (err) {
        error = err;
      }
      done(error, response);
    });

    req.addEventListener('error', () => {
      done(new Error('Unable to contact SSO'));
    });

    req.withCredentials = true;
    req.open('GET', url);
    req.send();
  }

  _getToken(done) {
    this._request({ url: `${this._login}?client=${this._client}` }, (err, { token, ttl }) => {
      done(err, { token, ttl });
    });
  }

  callback(done) {
    const error = null;
    const params = window.location.search.substr(1).split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      return {
        ...acc,
        [key]: value,
      };
    }, {});

    this._setCookie(params);

    done(error, params);
  }

  getToken(done) {
    const cookieToken = this._getCookie();
    if (cookieToken) {
      done(null, cookieToken);
      return;
    }

    this._getToken((err, { token, ttl }) => {
      if (err) done(err);

      this._setCookie({ token, ttl });
      done(null, token);
    });
  }
}

if (window) window.SSO = SSO;
