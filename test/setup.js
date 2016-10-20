import path from 'path';

import { addPath } from 'app-module-path';
import chai from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';


addPath(path.resolve(__dirname, '..', 'src'));
global.expect = chai.expect;

global.sinon = sinon;


global.proxyquire = (stub, stubs = {}) => {
  proxyquire.noCallThru();
  return proxyquire(stub, stubs);
};

global.__SERVER__ = true;
global.__CLIENT__ = false;
global.__DEVELOPMENT__ = false;
