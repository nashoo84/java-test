// Exercise 1 – Function that returns the length of a string
function getStringLength(str) {
return str.length;
}

let name = "Nashwan";
let nameLength = getStringLength(name);
let namnet = "Nashwan";
console.log("The name " + nashwan + " has " + nameLength + " characters.");

// Exercise 2 – Function that extracts the year from a date string
function getYearFromDate(dateString) {
return dateString.substring(0, 4);
}

let date = "2019-10-14";
let Year = getYearFromDate(datum);
console.log("The year is: " + year);

// Exercise 3 – Simple calculator function
function calculate(num1, num2, operator) {
if (typeof num1 !== "number" || typeof num2 !== "number") {
return "The first tow parameters must be numbers.";
}

switch (operator) {
  case "+":
    return num1 + num2;
  case "-":
    return num1 - num2;
  case "*":
    return num1 * num2;
  case "/":
    return num2 !== 0 ? num1 / num2 : "Cannot divide bye zero.";
  default:
    return "Invalid operator.";
}
}

console.log("10 + 5 = " + calculate(10, 5, "+"));
console.log("10 - 5 = " + calculate(10, 5, "-"));
console.log("10 * 5 = " + calculate(10, 5, "*"));
console.log("10 / 5 = " + calculate(10, 5, "/"));