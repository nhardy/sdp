import moment from 'moment-timezone';
import { identity } from 'lodash-es';

import config from 'app/config';
import { divmod } from 'app/lib/math';


moment.locale('en-au');

moment.updateLocale('en-au', {
  calendar: {
    sameElse: 'L [at] LT',
  },
});

export default moment;

export function formatDuration(start, end) {
  const diff = moment.tz(end, config.timezone).diff(moment.tz(start, config.timezone));
  const toalMinutes = diff / (60 * 1000);
  const [hours, minutes] = divmod(toalMinutes, 60);

  return [
    hours > 0 && `${hours} hour${hours === 1 ? '' : 's'}`,
    minutes > 0 && `${minutes} minute${minutes === 1 ? '' : 's'}`,
  ].filter(identity).join(' and ');
}
