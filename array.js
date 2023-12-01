//javascript array methods

//array is a object
// stores multiple values in a single variable name
// can store mix data types in a single array

const numbers = [1, 3, 2, 4, 7, 5, 8, 45, 0, 90];
const number1 = new Array(2, 3, 45, 0);

// count the length of an array

const lengthOfArray = numbers.length;
console.log(lengthOfArray);

//Array.reduce
const sumOfArray = numbers.reduce(function (accumulator, currentValue) {
  sum = accumulator + currentValue;
  return sum;
}, 0);
console.log(sumOfArray);

// Array.filter
const filteredArray = numbers.filter(function (value) {
  return value > 10;
});
console.log(filteredArray);

// Array.includes
const isExists = numbers.includes(45);
console.log(isExists);

// Array.find
const isFound = numbers.find(function (value) {
  return value === 45;
});
console.log(isFound);

// Array.findIndex
const isFoundIndex = numbers.findIndex(function (value) {
  return value === 45;
});
console.log(isFoundIndex);

// Array.some-> at least condition matches with one element
const isMatch = numbers.some(function (value) {
  return value % 2 === 1;
});
console.log(isMatch);

// Array.some-> at least condition matches with one element
const areMatch = numbers.every(function (value) {
  return value % 2 === 1;
});
console.log(areMatch);

// Array.map
const doubledArray = numbers.map((value) => value * 2);
console.log(doubledArray);

// Array.forEach->does not create new array
numbers.forEach((value) => console.log("value is ", value));

// Array.push and Array.unshift->changed orginal array
const pushedArray = numbers.push(99);
console.log(numbers);
console.log(pushedArray);

const unshiftedArray = numbers.unshift(105);
console.log(numbers);
console.log(unshiftedArray);

// Array.reverse -> changed the original array and return a new array also
console.log("reversed array");
console.log(numbers);
const reversedArray = numbers.reverse();
console.log(numbers);
console.log(reversedArray);

// Array.join
const joinedArray = ["s", "h", "a", "m", "i", "u", "l"].join("");
console.log(joinedArray);

function getUserNameFromEmail(email) {
  return email.split("@")[0];
}

console.log(getUserNameFromEmail("shamiulislam388@gmail.com"));
