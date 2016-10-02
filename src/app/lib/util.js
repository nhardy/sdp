import { camelCase, fromPairs } from 'lodash-es';


export function camelCaseObject(object) { // eslint-disable-line import/prefer-default-export
  return fromPairs(Object.entries(object).map(([key, value]) => [camelCase(key), value]));
}
