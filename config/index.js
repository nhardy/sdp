export default {
  port: process.env.PORT || 8000,
  publicHost: 'uts-helps-booking.azurewebsites.net',
  helps: {
    baseUrl: 'http://ec2-54-187-229-144.us-west-2.compute.amazonaws.com/api',
    headers: {
      AppKey: 'thisisoursecret',
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
