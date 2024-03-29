import React, { PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import faviconIco from 'app/assets/images/favicon_secondary.ico';


const Html = ({ assets, component, store }) => {
  const content = component ? ReactDOMServer.renderToString(component) : '';
  const head = Helmet.rewind(); // magic.gif

  /* eslint-disable react/no-danger */
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        <link rel="shortcut icon" href={faviconIco} type="image/vnd.microsoft.icon" />
        {__DEVELOPMENT__ ? <script src="/webpack-dev-server.js" /> : null}
        {head.script.toComponent()}
        {assets.bundle.css && assets.bundle.css.map((path, index) => (
          <link key={`css-${index}`} rel="stylesheet" type="text/css" href={path} />
        ))}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__data=${JSON.stringify(store.getState())};`,
          }} />
        {assets.bundle.js.map((path, index) => (
          <script key={`js-${index}`} type="text/javascript" src={path} />
        ))}
      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.shape({
    bundle: PropTypes.shape({
      css: PropTypes.arrayOf(PropTypes.string),
      js: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
  component: PropTypes.node,
  store: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default Html;
