#!/usr/bin/env node

'use strict'

const chalk = require('chalk');

const log = require('./lib/log');
const fsHelpers = require('./lib/fs-helpers');
const task = require('./lib/task');
const testPreCondition = require('./lib/utils').testPreCondition;

testPreCondition(process.argv[2], () => {
 log.err('app name is required');
 log.text('usage: js-next app_name');
});


const appName = process.argv[2];
testPreCondition(!fsHelpers.dirExists(appName), () => {
  log.err(`A folder ${appName} already exists!`);
});

const tasks = [task.init, task.updatePackage];
for(let i=0; i<tasks.length; i++) {
  if (tasks[i](appName, log) < 0) {
    log.err(task.errorMsg);
    break;
  }
}



