import { template } from 'lodash';

import config from 'app/config';
import assetManifest from 'server/lib/assetManifest';

import callbackHtml from './callback.html';


const compiled = template(callbackHtml);

export default function callbackHandler(req, res) {
  res.send(compiled({ script: assetManifest().sso.js[0], client: config.sso.client }));
}
