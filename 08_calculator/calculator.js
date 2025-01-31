const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	let sum=0
  for(let i = arr.length-1; i>=0; i--){
    sum += arr[i]
  }
  return sum
};

const multiply = function(values) {
  let product=1
  for(let i = 0; i<values.length; i++){
    product *= values[i]
  }
  return product
};

const power = function(number, exponent) {
	return number**exponent
};

const factorial = function(n) {
	// formula for factorial n! = n(n-1)(n-2)(n-3)...1
  let result = 1
  for (let i = n; i>0; i--){
    result *=i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
