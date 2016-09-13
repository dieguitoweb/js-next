const chalk = require('chalk');

const text = console.log;

const info = (s) => {
  console.log(chalk.blue(s));
};

const warn = (s) => {
  console.log(chalk.yellow(s));
};

const err = (s) => {
  console.log(chalk.red(s));
};

module.exports = {
  text: text,
  info: info,
  warn: warn,
  err: err,
};
