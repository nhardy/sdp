export default {
  port: 8000,
  helps: {
    baseUrl: 'http://group3helps.cloudapp.net/api',
    headers: {
      AppKey: '31281',
      Accept: 'application/json',
    },
  },
  helpsProxied: {
    baseUrl: 'http://localhost:8000/api/helps',
  },
  sso: {
    client: 'uts-helps-booking',
    login: '/api/sso/login',
    token: '/api/sso/token',
    retrieve: '/api/sso/retrieve',
  },
};
