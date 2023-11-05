const convertToCelsius = function(degree) {
  degree = Number(((degree-32)*(5/9)).toFixed(1))
  return degree
};

const convertToFahrenheit = function(degree) {
  degree = Number((degree*(9/5)+32).toFixed(1))
  return degree
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};