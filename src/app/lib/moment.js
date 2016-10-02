import moment from 'moment-timezone';


moment.locale('en-au');

moment.updateLocale('en-au', {
  calendar: {
    sameElse: 'L [at] LT',
  },
});

export default moment;
