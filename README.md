# UTS: HELPS Booking System

### UTS Systems Development Project for Spring Trimester 2016

This project is a universal JavaScript single page application which makes use of a plethora of popular and up-to-date tools and frameworks including:

- [Node.js](https://nodejs.org/en/)
- [Webpack2](https://webpack.github.io/)
- [Babel](http://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [Redux](http://reduxjs.org/)
- [Stylus](http://stylus-lang.com/)

## Development

Make sure you're using Mac or Linux for development. Many of the npm devDependencies for this project do not work with Windows. However, once the the project has been built, you can run this on Windows.

Make sure you have [Node Version Manager](https://github.com/creationix/nvm) (nvm) installed.
Run `nvm install 6` to install the latest version of Nodejs.

Make sure you `npm install`.

### Running

To start the server in development mode, use `npm run dev`. The server will start on port 8000 (ignore the secondary server on port 8001). You shouldn't need to restart the server in this mode even if you make changes, as the server will update as you save. Some functionality things will even update without you having to refresh. If you run into any issues though, it might be a good idea to refresh the page or restart the server.

## "Production" mode

You may notice that styles appear to _jump_ when you load the page in development mode. This is because styles are injected into the page by the JavaScript bundle to make hot reloading of styles possible. Production mode, on the other hand, does not do this.

`npm run prod` will start the server in production mode. This slower and won't automatically reload, but makes some optimisations, such as separating out the CSS into a separate file, and minifying the JavaScript bundle.

## Deployment

This project has been designed with continuous integration and continuous delivery in mind. As such, it is configured for easy deployment with [CircleCI](https://circleci.com/) and [Microsoft Azure App Service](https://azure.microsoft.com/en-us/services/app-service/).

Continuous integration tasks are set out inside [circle.yml](https://github.com/nhardy/sdp/blob/master/circle.yml).

This project makes use of the [azur](https://www.npmjs.com/package/azur) npm package for automated deployments to Azure (via Git). `azur` requires an existing repository (which can be manually initialised).

The following environment variables are necessary for deployment both locallly and by continuous integration software:

- `AZURE_APP_NAME` - App service CNAME (e.g. `uts-helps-booking` for `uts-helps-booking.azurewebsites.net`)
- `AZURE_GIT_USERNAME` - Azure app service deployment username (for deploying via git)
- `AZURE_GIT_PASSWORD` - Azure app service deployment password (for deploying via git)
- `DEBUG=azur` (optional) - Enable logging during deployment process

Manual deployment can be run (with environment variables) using the command `npm run deploy`.

## Adoption

First steps for adoption of this solution:

- Build a replacement API for the one provided as part of the project (and currently in use) that conforms to industry best-practices (RESTful, actually using primary keys in databases, etc.) and includes authentication with the UTS CAS single signon system. It is a miracle that the existing API manages to stand up in a production environment. This would leave to the removal of the Proxy that was put in place to overcome CORS issues and various other problems with the existing API.
- Investigate usage of UTS' CAS single signon for single page apps. If the single signon solution currently in use conforms to industy best practices (e.g. OAuth2), this should not be overly difficult. This investigation would lead on to the replacement of the single sign on stub.

## Disclaimer

Much of the code here is not ideal and should not be used in a production environment for various reasons including security and performance. Where possible, this has been outlined within the code. Following the steps outlined in the above section would alleviate many these concerns.

## Problems?

If you're experiencing an unexplained Node crash when running `npm run dev` or `npm run prod` on Linux, try

`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

See [Nodemon#214](https://github.com/remy/nodemon/issues/214) for more information.
