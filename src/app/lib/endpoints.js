import config from 'app/config';


export default function makeBaseUrl() {
  const path = '/api/helps';
  if (__SERVER__) {
    let hostname;
    // In the Microsoft Azure environment, PORT is not numeric
    // and we can't make requests to `localhost:PORT`
    if (/^\d+$/.test(config.port)) {
      hostname = `localhost:${config.port}`;
    } else {
      hostname = config.publicHost;
    }
    return `http://${hostname}${path}`;
  }

  return path;
}
