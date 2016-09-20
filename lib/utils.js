const testPreCondition = (cond, fn) => {
  if (!cond) {
    fn();
    process.exit(1);
  }
}

module.exports = {
  testPreCondition: testPreCondition,
};
