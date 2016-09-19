#!/usr/bin/env node
'use strict'

const chalk = require('chalk');

const log = require('./lib/log');
const fsHelpers = require('./lib/fs-helpers');
const task = require('./lib/task');
  
if (!process.argv[2]) {
  log.err('app name is required');
  log.text('usage: js-next app_name');
  process.exit(1);
}

const appName = process.argv[2];
if (fsHelpers.dirExists(appName)) {
  log.err('A folder ' + appName  + ' already exists!');
  process.exit(1);
}

const tasks = [task.init];
for(let i=0; i<tasks.length; i++) {
  if (tasks[i](appName, log) < 0) {
    log.err(task.errorMsg);
    break;
  }
}
console.log(process.cwd());



