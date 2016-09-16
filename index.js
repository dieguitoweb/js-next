const chalk = require('chalk');
const log = require('./lib/log');
const fsHelpers = require('./lib/fs-helpers');

  
if (!process.argv[2]) {
  log.err('app name is required');
  log.text('usage: js-next app_name');
  process.exit(1);
}

const appName = process.argv[2];
if (fsHelpers.dirExists(appName)) {
  log.err('app "' + appName  + '" already exists!');
  process.exit(1);
}




