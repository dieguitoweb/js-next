const chalk = require('chalk');

const text = console.log;

const ok = (s) => {
  console.log(chalk.green(s));
};

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
  ok: ok,
  text: text,
  info: info,
  warn: warn,
  err: err,
};
