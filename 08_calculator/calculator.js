const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, next) => {
    return total + next;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, next) => {
    return total * next;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
