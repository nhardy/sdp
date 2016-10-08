export default {
  port: process.env.PORT || 8000,
  publicHost: 'uts-helps-booking.azurewebsites.net',
  helps: {
    baseUrl: 'http://uts-helps.azurewebsites.net/api',
    headers: {
      AppKey: '31281',
      Accept: 'application/json',
    },
  },
  sso: {
    client: 'uts-helps-booking',
    login: '/api/sso/login',
    token: '/api/sso/token',
    retrieve: '/api/sso/retrieve',
  },
  timezone: 'Australia/Sydney',
};
