'use strict'
const fsHelpers = require('../fs-helpers');
const mkdirSync = require('fs').mkdirSync;
const spawn = require('cross-spawn');

const init = (appName, log) => {
  try {
    log.info('*** init app structure' + appName);
    const dst = fsHelpers.appPath(appName);
    mkdirSync(dst);
    mkdirSync(fsHelpers.pathInApp(appName, 'src'));
    mkdirSync(fsHelpers.pathInApp(appName, 'lib'));
    log.info('*** copying .gitignore');
    spawn.sync('cp', [
      `${__dirname}/../../templates/.gitignore`,
      `${fsHelpers.appPath(appName)}`
    ]);
    log.info('*** init npm');
    spawn.sync('npm', [ 'init' ], { stdio: 'inherit', cwd: appName });
    return 0;
  } catch(e) {
    return -1;
  }
};

init.errorMsg = 'Error creating app directory';
module.exports = init;
