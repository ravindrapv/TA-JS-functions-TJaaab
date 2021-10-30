// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}



// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue 
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return num + 1;
}

// - Write a Function Expression
let addOne = function(num){
  return num + 1;
}


// - Write an Arrow Function without curly brackets(if possible)
let addOne = (num) => num + 1;

// - Write an Arrow Function with curly brackets
let addOne = (num) => {
  return num + 1
};

// - Execute the function
addOne(45);

// - Execute the function and store the return value in a variable.
let returnValue = addOne(23);

// - What is the typeof returnValue
// the typeof value is (number)

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num){
  return num - 1;
}

// - Write a Function Expression
let substractOne = function(num){
  return num - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (num) => num - 1;

// - Write an Arrow Function with curly brackets
let substractOne = (num) => {
  return num - 1
};

// - Execute the function
substractOne(50);

// - Execute the function and store the return value in a variable.
let value = substractOne(40);

// - What is the typeof returnValue 

// the typeof value is (Number)

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a,b) {
  return a + b;
}

// - Write a Function Expression
let sum = function(a,b) {
  return a + b;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (a,b) => a + b;

// - Write an Arrow Function with curly brackets
let sum = (a=0,b=1) => {
   return a + b;
};

// - Execute the function
sum(50,50);

// - Execute the function and store the return value in a variable
let addnum = sum(20,20);

// - What is the typeof returnValue
// the typeof value is (Number)

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(numA,numB){
  return numA*numB;
}

// - Write a Function Expression
let square = function (numA,numB){
  return numA*numB;
}

// - Write an Arrow Function without curly brackets(if possible)
let square =(numA,numB) => numA*numB;

// - Write an Arrow Function with curly brackets
let square =(numA,numB) => {
  return numA*numB;
}

// - Execute the function
square(20,20);

// - Execute the function and store the return value in a variable
let multi = square(30,30);

// - What is the typeof returnValue

// the typeof value is Number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater (x,y) {
  if(x>y){
    alert("true");
  }
  else
  {
    return false;
  }
}

// - Write a Function Expression
let isGreater = function (x,y) {
  if(x>y){
    return true;
  }
  else
  {
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y) => true || false;

// - Write an Arrow Function with curly brackets
let isGreater = (x,y) => {
  if(x>y){
    return true;
  }
  else
  {
    return false;
  }
}

// - Execute the function
isGreater(40,50);

// - Execute the function and store the return value in a variable
let truefalsevalue = isGreater(20,10);

// - What is the typeof returnValue
// the typeof value is Number

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven (num) {
  if(num %2 === 0) {
    return even;
  } else {
    return odd;
  } 
}

// - Write an anonymous Function Expression
let oddOrEven = function (num) {
  if(num %2 === 0) {
    return even;
  } else {
    return odd;
  } 
}

// - Write an named Function Expression
let oddOrEven = function isOdd(num) {
  if(num %2 === 0) {
    return even;
  } else {
    return odd;
  } 
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (num) => num %2 === 0 ? even :odd;

// - Write an Arrow Function with curly brackets
let oddOrEven = (num) => {
  if(num %2 === 0) {
    return even;
  } else {
    return odd;
  } 
}

// - Execute the function
oddOrEven(4);

// - Execute the function and store the return value in a variable 
let add = oddOrEven(8);

// - What is the typeof returnValue
// the type of value is number
