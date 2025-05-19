function toAddTwoNumber() {
  let c = a + b;
  return c;
}

function toSubTwoNumber() {
  let c = a - b;
  return c;
}

// output using console
console.log(`this console is for output`);

// let a = 10;
// let b = 52;
// let c = a + b;
// console.log(`the sum of ${a}, ${b} and ${c}`);
// console.log(`this console is for output--`, c);
// console.log(`adding two number of 50,75--->`, toAddTwoNumber(50, 50));

// output using alert function
// alert(`hello`);

// using document write()
document.write(`this document.write is for output-->`);
document.write(
  `<h2 style='color: red'>this document.write is <span style='color: green'>for</span> output</h2>`
);

const num1 = 56;
console.log(`printing number--1`, num1);
console.log(`printing number--1`, typeof 10);
console.log(`printing number--1`, typeof `10`);
console.log(`printing number--1`, typeof true);
console.log(`printing number--1`, typeof -10);

const name = `chandni`;
const address = "Ludhiana";
const avenger = `/Thor`;
console.log(`printing address--`, address);
console.log(`printing avenger--`, avenger);

console.log(`printing--`, address, typeof address);

let ab = 50;
let bc = 89;
let cd = ab + bc;
console.log(`the sum of ${ab}, ${bc} and ${cd}`);

let o = 87;
let p = 20;
let q = o + p;
console.log(`the sum of ${o}, ${p} and ${q}`);

let studentName = `chandni`;

// Assignments-----------------------------------------------

// Find output
console.log("output-1", "500" + 100); // 500100
console.log("output-2", 56 + 100); //156
console.log("output-3", 56 + "100"); //56100
console.log("output-4", "500" / "100"); //5
console.log("output-5", 56 + 100 + true); //156true
console.log("output-6", 56 + 100 + Number(true)); //157
console.log("output-7", 56 + 100 + "true"); //156true
console.log("output-8", 56 + 100 + Number("true")); //NaN
console.log("output-9", 56 + 100 + Number("Vinay")); //NaN
console.log("output-10", 50 - "100" + "Vinay"); //-50Vinay

console.log("10" + 5); //105
console.log("10" - 5); //5
console.log("10px" - 2); //NaN
console.log("10" * 3); //30
console.log(true + true); //2
console.log(false + 10); //10
console.log("true" + 10); //true10
console.log(Number("red") + 5); //NaN
console.log(Boolean("10") - 1); //0
console.log("10" + true); //10true

console.log(Math.abs(-25)); //25
console.log(Math.max(1, 3, 5, -2, 0)); //5
console.log(Math.min(2, 0, -10, 50)); //-10
console.log(Math.pow(2, 4)); //16
console.log(Math.sqrt(49)); //7
console.log((Math.random() * 10).toFixed(2)); //5.82
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.1)); // 5
console.log(Math.trunc(7.987)); //7

// Boolean() Conversion

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean([])); //true
console.log(Boolean({})); //true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean("false")); //true
console.log(Boolean(NaN)); //false

/**
String() Conversion
*/
console.log(String(123)); //`123`
console.log(String(true)); //`true`
console.log(String(null)); //`null`
console.log(String(undefined)); //`undefined`
console.log(String([])); //`object`
console.log(String({})); //`object`
console.log(String([1, 2, 3])); //`123`
console.log(String(false)); //`false`
console.log(String(NaN)); //`NaN`
console.log(String(Infinity)); //`infinity`

/**
Number() Conversion
*/
console.log(Number("456")); //456
console.log(Number("45px")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //NaN
console.log(Number("")); //0
console.log(Number(" ")); //0
console.log(Number([])); //0
console.log(Number([1, 2, 3])); //NaN

/**
typeof and Number.isInteger()
*/
// Declare a variable with value 100, check if it's an integer.
console.log(`print--`, typeof 100);

// Check typeof '100' and use Number.isInteger() on it.
console.log(`print--`, typeof `100`, Number.isInteger(100));

// Check typeof true and Number.isInteger(true).
console.log(`output--`, Number.isInteger(true));

// What will Number.isInteger(0.5) return?
console.log(`print--`, Number.isInteger(0.5));

// Declare a variable let a = null and test both checks.
let a = null;
console.log(`print--`);

// Check for an empty array: typeof [], Number.isInteger([])
console.log(`print--`, typeof [], Number.isInteger([]));

// Check an object: typeof {} and integer check.
console.log(`output--`, typeof {});

// Assign NaN to a variable and use both checks.

// Assign a floating point number and verify.
console.log(`output--`, 0.555);

// Predict and test Number.isInteger(parseInt("123abc"))
console.log(`print--`, Number.isInteger(parseInt("123abc")));

// NaN and isNaN()

console.log(isNaN("123")); //false
console.log(isNaN("123abc")); //true
console.log(isNaN(45)); //false
console.log(isNaN(true)); //false
console.log(isNaN(undefined)); //true
console.log(isNaN(null)); //false
console.log(isNaN("")); //false
console.log(isNaN(" ")); //false
console.log(isNaN([])); //false
console.log(isNaN({})); //true

/**
Math Library
*/
console.log(Math.abs(-25)); // 25
console.log(Math.abs(0)); //0
console.log(Math.abs(95)); //95
console.log(Math.abs(-123.45)); //123.45
console.log(Math.abs(1 - 100)); //99
console.log(Math.abs(-0.5)); //0.5
console.log(Math.abs(-99999)); //99999
console.log(Math.abs(3.14)); //3.14
console.log(Math.abs(-3.14)); //3.14
console.log(Math.abs(true)); //1

console.log(Math.max(12, 78, 34)); //78
console.log(Math.max(-12, -78, -34)); //-12
console.log(Math.max(1, 100, 50, 0)); //100
console.log(Math.max(0, 0, 0)); //0
console.log(Math.max(1, -1, 2, -2)); //2
console.log(Math.max(3.5, 2.9, 3.499)); //3.5
console.log(Math.max(100, 1000)); //1000
console.log(Math.max(999, 999.99)); //999.99
console.log(Math.max(-5, 5, -10)); //5
console.log(Math.max(...[1, 2, 3, 4, 5])); //5

console.log(Math.min(12, 78, 34)); //12
console.log(Math.min(-12, -78, -34)); //-78
console.log(Math.min(1, 100, 50, 0)); //0
console.log(Math.min(0, 0, 0)); //0
console.log(Math.min(1, -1, 2, -2)); //-2
console.log(Math.min(3.5, 2.9, 3.499)); //2.9
console.log(Math.min(100, 1000)); //100
console.log(Math.min(999, 999.99)); //999
console.log(Math.min(-5, 5, -10)); //-10
console.log(Math.min(...[1, 2, 3, 4, 5])); //1

console.log(Math.pow(2, 3)); //8
console.log(Math.pow(5, 2)); //25
console.log(Math.pow(10, 0)); //1
console.log(Math.pow(3, 3)); //27
console.log(Math.pow(7, 1)); //7
console.log(Math.pow(9, 0.5)); //3
console.log(Math.pow(-2, 3)); //-8
console.log(Math.pow(-2, 2)); //4
console.log(Math.pow(4, -1)); //0.25
console.log(Math.pow(100, 0.5)); //10

console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(49)); //7
console.log(Math.sqrt(144)); //12
console.log(Math.sqrt(1)); //1
console.log(Math.sqrt(0)); //0
console.log(Math.sqrt(2)); //1.414
console.log(Math.sqrt(3.24)); //1.8
console.log(Math.sqrt(10000)); //100
console.log(Math.sqrt(121)); //11
console.log(Math.sqrt(50)); //7.071

console.log(Math.random()); //4645
console.log((Math.random() * 10).toFixed(2)); //54545
console.log((Math.random() * 100).toFixed(0)); //54564
console.log((Math.random() * 5).toFixed(3)); //87854
console.log((Math.random() * 1000).toFixed(1)); //7752.0
console.log((Math.random() * 99999).toFixed(0)); //5454
console.log(Math.floor(Math.random() * 6)); // 65656
console.log(Math.ceil(Math.random() * 10)); //87203
console.log((Math.random() * 0.1).toFixed(4)); //4665
console.log((Math.random() + 1).toFixed(2)); //0121321

console.log(Math.round(3.5)); //4
console.log(Math.round(3.49)); //5
console.log(Math.round(4.01)); //4
console.log(Math.round(9.99)); //10
console.log(Math.round(-3.5)); //-3
console.log(Math.round(-3.51)); //-4
console.log(Math.round(0)); //0
console.log(Math.round(0.499)); //0
console.log(Math.round(0.5)); //1
console.log(Math.round(99.999)); //100

console.log(Math.ceil(3.1)); //4
console.log(Math.ceil(4.0001)); //5
console.log(Math.ceil(0.0001)); //1
console.log(Math.ceil(5)); //5
console.log(Math.ceil(-1.1)); //-2
console.log(Math.ceil(-9.9)); //-9
console.log(Math.ceil(100.01)); //101
console.log(Math.ceil(-0.00001)); //-0
console.log(Math.ceil(7.9)); //8
console.log(Math.ceil(0)); //0

console.log(Math.floor(3.9)); //3
console.log(Math.floor(4.9999)); //4
console.log(Math.floor(0.0001)); //0
console.log(Math.floor(5)); //5
console.log(Math.floor(-1.1)); //-1
console.log(Math.floor(-9.9)); //-9
console.log(Math.floor(100.01)); //100
console.log(Math.floor(-0.00001)); //-0
console.log(Math.floor(7.1)); //7
console.log(Math.floor(0)); //0

console.log(Math.trunc(4.99)); //4
console.log(Math.trunc(4.01)); //4
console.log(Math.trunc(-4.99)); //-4
console.log(Math.trunc(-4.01)); //-4
console.log(Math.trunc(100.9876)); //100
console.log(Math.trunc(-100.9876)); //-100
console.log(Math.trunc(0.9999)); //0
console.log(Math.trunc(-0.9999)); //-0
console.log(Math.trunc(0)); //0
console.log(Math.trunc(12345.6789)); //12345
