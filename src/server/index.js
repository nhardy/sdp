import Express from 'express';

import config from 'app/config';
import ssoService from 'server/api/sso';
import helpsService from 'server/api/helps';
import callbackHandler from 'server/handlers/callback';
import mainMiddleware from 'server/middleware/main';
import errorMiddleware from 'server/middleware/error';

import faviconIco from '!!buffer!app/assets/images/favicon.ico'; // eslint-disable-line


const app = new Express();

app.get('/favicon.ico', (req, res) => {
  res.set('Content-Type', 'image/vnd.microsoft.icon');
  res.send(faviconIco);
});

// Serve static files
app.use('/dist', Express.static('dist'));

app.use('/api/sso', ssoService);

app.use('/api/helps', helpsService);

app.get('/callback', callbackHandler);

// Serve using the React App
app.use(mainMiddleware);
app.use(errorMiddleware);

app.listen(config.port + (__DEVELOPMENT__ ? 1 : 0));
