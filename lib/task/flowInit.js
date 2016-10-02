'use strict'
const spawn = require('cross-spawn');
const mkdirSync = require('fs').mkdirSync;
const fsHelpers = require('../fs-helpers');

const flowInit = (appName, log) => {
  try {
    log.info('*** Copying flow config');
    mkdirSync(fsHelpers.pathInApp(appName, ['src', 'definitions']));
    spawn.sync('cp', [
      `${__dirname}/../../templates/.flowconfig`,
      `${fsHelpers.appPath(appName)}`
    ]);
    return 0;
  } catch(e) {
    console.log(e);
    return -1;
  }
};

flowInit.errorMsg = 'Error initializing flow';
module.exports = flowInit;
