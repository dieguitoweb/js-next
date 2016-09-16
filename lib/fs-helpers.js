const fs = require('fs');

const dirExists = (path) => {
  try {
    const stats = fs.statSync(path);
    return stats && stats.isDirectory();
  } catch (exc) {
    return false;
  }
}

module.exports = {
  dirExists: dirExists,
};
