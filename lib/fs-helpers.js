const fs = require('fs');
const path = require('path');

const dirExists = (path) => {
  try {
    const stats = fs.statSync(path);
    return stats && stats.isDirectory();
  } catch (exc) {
    return false;
  }
}

const readJSON = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const writeJSON = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const appPath = (appName) => {
  return path.join(process.cwd(), appName);
}

const pathInApp = (appName, filePath) => {
  return path.join(appName, filePath);
};

module.exports = {
  dirExists: dirExists,
  readJSON: readJSON,
  writeJSON: writeJSON,
  appPath: appPath,
  pathInApp: pathInApp,
};
