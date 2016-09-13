const chalk = require('chalk');
const log = require('./helpers/log');

if (!process.argv[2]) {
  log.err('app name is required');
  log.text('usage: js-next app_name');
  return;
}
