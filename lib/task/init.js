const path = require('path');
const mkdirSync = require('fs').mkdirSync;
const spawn = require('cross-spawn');

const init = (appName, log) => {
  try {
    log.info('*** init app ' + appName);
    mkdirSync(path.join(process.cwd(),appName));
    spawn.sync('npm', [ 'init' ], { stdio: 'inherit', cwd: appName });
    return 0;
  } catch(e) {
    return -1;
  }
};
init.erroMsg = 'Error creating app directory';

module.exports = init;
