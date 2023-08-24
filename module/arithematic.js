function sum(x, y) {
  return x + y;
}
module.exports.divide = (x, y) => {
  return x / y;
};

// 1.common js module
module.exports = {
  add: sum,
};
// 2. using ES6
