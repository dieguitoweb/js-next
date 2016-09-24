const spawn = require('cross-spawn');

const install = (appName, log) => {
  try {
    log.info('***  installing dependencies');
    spawn.sync('npm', [ 'install' ], { stdio: 'inherit', cwd: appName });
    return 0;
  } catch(e) {
    return -1;
  }
};
install.errorMsg = 'Error installing npm dependecies';

module.exports = install;
