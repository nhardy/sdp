export default {
  port: 8000,
  helps: {
    baseUrl: 'http://group3helps.cloudapp.net/api',
    headers: {
      AppKey: '31281',
    },
  },
  sso: {
    client: 'uts-helps-booking',
    login: '/api/sso/login',
    token: '/api/sso/token',
    retrieve: '/api/sso/retrieve',
  },
};
