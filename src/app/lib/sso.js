import cookies from 'app/lib/cookies';


export default class SSO {
  // FIXME: This would be hosted on a different domain in production
  constructor({ client = 'uts-helps-booking' } = {}) {
    this._cookieKey = '_sso';
    this._client = client;
  }

  _setCookie({ token = null, ttl = 0 }) {
    const value = JSON.stringify(token);
    cookies.setItem(this._cookieKey, value, ttl, '/');
  }

  _getCookie() {
    return JSON.parse(cookies.getItem(this._cookieKey));
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

  getToken() {
    return this._getCookie();
  }
}
