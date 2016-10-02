import loaderUtils from 'loader-utils';


export default function momentTimezoneDataLoader(source) {
  this.cacheable();
  const callback = this.async();
  const query = loaderUtils.parseQuery(this.query);

  const data = JSON.parse(source);
  callback(null, JSON.stringify({
    ...data,
    zones: data.zones.filter(entry => entry.includes(query.search)),
    links: data.links.filter(entry => entry.includes(query.search)),
  }));
}
