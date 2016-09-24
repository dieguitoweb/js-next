'use strict'

const semver = require('semver');
const fsHelpers = require('../fs-helpers');
const readJSON = fsHelpers.readJSON;
const writeJSON = fsHelpers.writeJSON;
const testPrecondition = require('../utils').testPreCondition;

const updatePackage = (appName, log) => {
  log.info('*** update package json');
  const template = readJSON(`${__dirname}/../../templates/package.json`);
  const destPath = fsHelpers.pathInApp(appName, 'package.json');

  // test node version
  testPrecondition(semver.satisfies(process.version, template.engines.node), () => {
    log.error(`Node version should be > ${template.engines.node}`);
  });

  // update package.json
  const dest = readJSON(destPath);
  writeJSON(destPath, Object.assign(dest, template));
};

updatePackage.errorMsg = 'Error updating package.json';

module.exports = updatePackage;
