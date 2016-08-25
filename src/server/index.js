import Express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import config from 'app/config';
import { loginHandler } from 'server/handlers/sso';
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

app.use('/api/sso', cookieParser('SUPER_SECRET_THING_DO_NOT_DO_THIS_IN_PRODUCTION'));
app.post('/api/sso/login', bodyParser.urlencoded({ extended: false }), loginHandler);

app.get('/callback', callbackHandler);

// Serve using the React App
app.use(mainMiddleware);
app.use(errorMiddleware);

app.listen(config.port + (__DEVELOPMENT__ ? 1 : 0));
