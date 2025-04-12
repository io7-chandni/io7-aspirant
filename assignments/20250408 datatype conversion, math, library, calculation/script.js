const num1 = 45;
const num2 = "45";
const num3 = "45a";

console.log("testing nan--", isNaN(num1));
console.log("testing nan--", isNaN(num2));
console.log("testing nan--", isNaN(num3));

console.log(
  "check the data-type, using type of--1--",
  typeof num1,
  typeof num1 === "number"
);

console.log(
  "check the data-type, using type of--1--",
  typeof num2,
  typeof num2 === "number"
);

//'string'==='number------>false
// 'number'==='number'---->true
// "string"==="string"---->true

// convert any number datatype to string datatype or
// convert any string datatype to number datatype

// "70"--->78
// 10----->10
// 'red--->
// '50apples'--->

// Number !==number
// String !==string

// math library
// it will always return non negative values

console.log("--Math.abs--1", Math.abs(-90));
console.log("--Math.abs--1", Math.abs(900));
console.log("--Math.abs--1", Math.abs(0));
console.log("--Math.abs--1", Math.abs(true));
console.log("--Math.abs--1", Math.abs(true));

console.log(Math.random());
console.log((Math.random() * 10).toFixed(2));
console.log((Math.random() * 100).toFixed(0));
console.log((Math.random() * 5).toFixed(3));
console.log((Math.random() * 1000).toFixed(1));
console.log((Math.random() * 99999).toFixed(0));
console.log(Math.floor(Math.random() * 6)); // dice roll
console.log(Math.ceil(Math.random() * 10));
console.log((Math.random() * 0.1).toFixed(4));
console.log((Math.random() + 1).toFixed(2));
