// Function Declaration & Calling

// 1. Write a function called greetUser that logs "Hello, User!" to the console.
function functionName() {
  console.log("Hello, User!");
}
functionName();

// Declare a function sayMyName that takes a name as a parameter and logs "Hello, [name]".
function sayMyName(parm1) {
  console.log(`Hello, ${parm1}`);
}
sayMyName(`chandni`);
sayMyName(`vinay`);

// Create a function sumTwoNumbers that takes two numbers and logs their sum.
function sumTwoNumber(parm1, parm2) {
  console.log(`Sum of two number ${parm1}, ${parm2}  is ${parm1 + parm2} `);
}
sumTwoNumber(50, 98);
sumTwoNumber(55, 65);

// Write a function logWelcome that returns the string "Welcome to JavaScript" and call it.
function logWelcome() {
  console.log("Welcome to JavaScript");
}
logWelcome();

// Create a function multiplyThreeNumbers that accepts 3 numbers, multiplies them, and logs the result.
function multiplyThreeNumbers() {
  // console.log(`print--`, c);
}
multiplyThreeNumbers();

// Create a function callDoctor that logs "Doctor has been called". Inside this function, call another function logAppointment.
function callDoctor() {
  console.log(`Doctor has been called`);
  logAppointment();
}
callDoctor();

function logAppointment() {
  console.log(`appointemnt has been booked`);
}

// Declare a function calculateArea that takes length and breadth and returns the area.
function calculateArea(l, b) {
  let o = l * b;
  console.log(`calculate Area ${l} and ${b} is ${o}`);
}
calculateArea(58, 60);

// Write a function printMyAge that takes your age and logs "My age is [age]".
function printMyAge() {
  console.log("My age is [26]");
}
printMyAge();

// Create a function greetMorning that takes no parameters and logs "Good Morning".
function greetMorning() {
  console.log("Good Morning");
}
greetMorning();

// Write a function callFriend(name) that logs "Calling [name]...".
function callFriend() {
  console.log("Calling [chandni]...");
}
callFriend();

//  String Methods
// Create a function findLength that accepts a string and returns its length.
// const myString = `hey dear, how are you...........`;
// function findLength(a, b) {
//   return a + b;
// }
// const abc = findLength(10, 50);
// console.log(`abc---`, abc);

const myString = `i am from ludhiana, punjab............`;
function findLength(parm1) {
  console.log(`parm1`, parm1);
  return parm1.length;
}
const abc = findLength(myString);
console.log(abc);

// Write a function shout that takes a string and returns it in uppercase.
const myString1 = `i have done bca from lpu............`;
function shout(parm1) {
  console.log(`parm1`, parm1);
  return parm1.toUpperCase();
}
const mno = shout(myString1);
console.log("---->", mno);

// Declare a variable quote = "JavaScript is Awesome" and log its length using .length.
function quote(parm1) {
  console.log(parm1);
  return parm1.length;
}
const ghi = quote(`JavaScript is Awesome`);
console.log(ghi);

// Create a function yellName(name) that returns "HEY [NAME]!" (in uppercase).
function yellName(parm1) {
  return parm1.toUpperCase();
}
const trp = yellName(`priya`);
console.log(`----`, trp);

// Write a function normalizeCase(sentence) that returns the lowercase version of the sentence.
const myString2 = `I HAVE DONE BCA FROM LPU............`;
function normalizeCase(parm1) {
  return parm1.toLowerCase();
}
const opq = normalizeCase(myString2);
console.log("---->", opq);

// Call findLength(" ") and observe the result.
function findLength(parm1) {
  console.log(`parm1--`, parm1);
}
findLength(" ");

// Call shout("good job!") and observe the result.
function shout(parm1) {
  console.log(parm1);
}
shout("good job!");

// Call whisper("KEEP QUIET") and observe the result.
function whisper(parm1) {
  console.log(parm1);
}
whisper("KEEP QUIET");

// Use .toUpperCase() and .toLowerCase() directly on a string literal and log the result.
const myString3 = `i am doing job in google............`;
function normalizeCase(parm1) {
  return parm1.toUpperCase();
}
const klm = normalizeCase(myString3);
console.log("---->", klm);
