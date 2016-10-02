import config from 'app/config';


export default function makeBaseUrl() {
  const path = '/api/helps';
  if (__SERVER__) return `http://localhost:${config.port}${path}`;

  return path;
}
