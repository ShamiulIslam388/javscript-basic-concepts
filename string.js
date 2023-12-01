// String methods
// string is primitive when "Shamiul" but it can be object when created with constructor

const myName = "My name is : Shamiul Islam";
const myName1 = new String("Shamiul Islam");
console.log(myName);
console.log(typeof myName);
console.log(typeof myName1);

// string length
const strLength = myName.length;
console.log(strLength);

// access with index as array
console.log(myName[0]);

// string slice-> startIndex <= value < endIndex
const slicedStr = myName.slice(11, 24);
console.log(slicedStr);

// string substring-> startIndex <= value < endIndex && negative starts from 0
const substringStr = myName.substring(11, 24);
console.log(substringStr);

// string substr-> firt: fisrtIndex and last: length of slice
const substrgStr = myName.substr(11, 7);
console.log(substrgStr);

// string upperCase
console.log("shmiul islam".toUpperCase());

// string lowerCase
console.log("Shamiul Islam".toLowerCase());

// string trim
console.log("  Shamiul Islam    ".trim());

// string search -> return index but -1 if not found
console.log("Shamiul Islam".search("Islam"));

// string split
const splitArray = myName.split(" ");
console.log(splitArray);

// reverse a string with split and join method

const reversedString = "SHamiul"
  .split("")
  .reverse()
  .join("")
  .toLocaleLowerCase();
console.log(reversedString);
