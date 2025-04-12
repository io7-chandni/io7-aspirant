# Find output ✔❌
	console.log("output-1", "500" + 100); // 500100   ✔ 
	console.log("output-2", 56 + 100); // 56100 ❌ 156
	console.log("output-3", 56 + "100"); // 56100 ✔ 
	console.log("output-4", "500" / "100");// 5 
	console.log("output-5", 56 + 100 + true); // true
	console.log("output-6", 56 + 100 + Number(true)); // true 
	console.log("output-7", 56 + 100 + "true"); // NaN
	console.log("output-8", 56 + 100 + Number("true")); // NaN
	console.log("output-9", 56 + 100 + Number("Vinay"));// NaN 
	console.log("output-10", 50 - "100" + "Vinay"); // NaN
    console.log("10" + 5); // 105
    console.log("10" - 5); // 5
    console.log("10px" - 2); // 8px
    console.log("10" * 3);//  30
    console.log(true + true); // 2
    console.log(false + 10); // 10
    console.log("true" + 10);//  11
    console.log(Number("red") + 5);// NaN
    console.log(Boolean("10") - 1);// 0
    console.log("10" + true); // 11



console.log(Math.abs(-25)); //25
console.log(Math.max(1, 3, 5, -2, 0)); //5
console.log(Math.min(2, 0, -10, 50)); //-10
console.log(Math.pow(2, 4)); //16
console.log(Math.sqrt(49)); //7
console.log((Math.random() * 10).toFixed(2));
console.log(Math.round(4.6));
console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.1)); //5
console.log(Math.trunc(7.987)); //7


/**
Boolean() Conversion
*/

console.log(Boolean("hello"));  //nan
console.log(Boolean("")); //false
console.log(Boolean(0)); //true
console.log(Boolean(1)); //true
console.log(Boolean([])); //false
console.log(Boolean({})); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean("false")); //false
console.log(Boolean(NaN)); //false


/**
String() Conversion
*/

console.log(String(123)); //number
console.log(String(true)); //boolean
console.log(String(null)); //null
console.log(String(undefined));  //0
console.log(String([])); //object
console.log(String({})); //object
console.log(String([1, 2, 3]));
console.log(String(false));
console.log(String(NaN));
console.log(String(Infinity)); //0


/**
Number() Conversion
*/
console.log(Number("456")); //string
console.log(Number("45px")); //string
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //0
console.log(Number(null)); //0
console.log(Number("")); //
console.log(Number(" ")); //
console.log(Number([]));
console.log(Number([1, 2, 3])); //number



/**
typeof and Number.isInteger()
*/

Declare a variable with value 100, check if it's an integer. //number
Check typeof '100' and use Number.isInteger() on it. //string
Check typeof true and Number.isInteger(true).  //NaN
What will Number.isInteger(0.5) return? //
Declare a variable let a = null and test both checks. // 
Check for an empty array: typeof [], Number.isInteger([]). //
Check an object: typeof {} and integer check.  // 
Assign NaN to a variable and use both checks.  // 
Assign a floating point number and verify.  //
Predict and test Number.isInteger(parseInt("123abc")). //string


/**
NaN and isNaN()
*/

console.log(isNaN("123")); //false
console.log(isNaN("123abc")); //true
console.log(isNaN(45)); //false
console.log(isNaN(true)); //true
console.log(isNaN(undefined)); //false
console.log(isNaN(null)); //false
console.log(isNaN("")); //false
console.log(isNaN(" ")); //false
console.log(isNaN([])); //true
console.log(isNaN({})); //true

/**
Math Library
*/

console.log(Math.abs(-25)); //25
console.log(Math.abs(0)); //0
console.log(Math.abs(95)); //95
console.log(Math.abs(-123.45)); //123.45
console.log(Math.abs(1 - 100)); //99
console.log(Math.abs(-0.5)); //0.5
console.log(Math.abs(-99999)); //99999
console.log(Math.abs(3.14)); //3.14
console.log(Math.abs(-3.14)); //3.14
console.log(Math.abs(true)); //1

console.log(Math.max(12, 78, 34));  //78
console.log(Math.max(-12, -78, -34)); //-78
console.log(Math.max(1, 100, 50, 0)); //100
console.log(Math.max(0, 0, 0)); //0
console.log(Math.max(1, -1, 2, -2)); //2
console.log(Math.max(3.5, 2.9, 3.499)); //3.499
console.log(Math.max(100, 1000)); //1000
console.log(Math.max(999, 999.99)); //999.99
console.log(Math.max(-5, 5, -10)); //5
console.log(Math.max(...[1, 2, 3, 4, 5])); //5


console.log(Math.min(12, 78, 34));  //12
console.log(Math.min(-12, -78, -34)); //-12
console.log(Math.min(1, 100, 50, 0)); //0
console.log(Math.min(0, 0, 0)); //0
console.log(Math.min(1, -1, 2, -2)); //-1
console.log(Math.min(3.5, 2.9, 3.499)); //2.9
console.log(Math.min(100, 1000)); //100
console.log(Math.min(999, 999.99)); //999
console.log(Math.min(-5, 5, -10)); //-5
console.log(Math.min(...[1, 2, 3, 4, 5])); //1


console.log(Math.pow(2, 3)); //8
console.log(Math.pow(5, 2)); //25
console.log(Math.pow(10, 0)); //0
console.log(Math.pow(3, 3)); //9
console.log(Math.pow(7, 1)); //7
console.log(Math.pow(9, 0.5));  square root //4.5
console.log(Math.pow(-2, 3)); //-8
console.log(Math.pow(-2, 2)); //-4
console.log(Math.pow(4, -1)); //-4
console.log(Math.pow(100, 0.5)); //50


console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(49)); //7
console.log(Math.sqrt(144)); 
console.log(Math.sqrt(1)); //1
console.log(Math.sqrt(0)); //0
console.log(Math.sqrt(2)); //1
console.log(Math.sqrt(3.24));
console.log(Math.sqrt(10000)); //5000
console.log(Math.sqrt(121)); //11
console.log(Math.sqrt(50)); //25


console.log(Math.random()); //0.24541524373357937
console.log((Math.random() * 10).toFixed(2)); //2.70
console.log((Math.random() * 100).toFixed(0)); //87
console.log((Math.random() * 5).toFixed(3)); //4.540
console.log((Math.random() * 1000).toFixed(1)); //543.4
console.log((Math.random() * 99999).toFixed(0)); //49079
console.log(Math.floor(Math.random() * 6)); //4
console.log(Math.ceil(Math.random() * 10)); //10
console.log((Math.random() * 0.1).toFixed(4)); //0.0014
console.log((Math.random() + 1).toFixed(2)); //1.98


console.log(Math.round(3.5)); //4
console.log(Math.round(3.49)); //4
console.log(Math.round(4.01)); //4
console.log(Math.round(9.99)); //10
console.log(Math.round(-3.5)); //-4
console.log(Math.round(-3.51)); //-4
console.log(Math.round(0)); //0
console.log(Math.round(0.499)); //1
console.log(Math.round(0.5)); //1
console.log(Math.round(99.999)); //10

console.log(Math.ceil(3.1)); //4
console.log(Math.ceil(4.0001)); //5
console.log(Math.ceil(0.0001)); //1
console.log(Math.ceil(5)); //5
console.log(Math.ceil(-1.1)); //2
console.log(Math.ceil(-9.9)); //10
console.log(Math.ceil(100.01)); //101
console.log(Math.ceil(-0.00001)); //1
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
console.log(Math.floor(0));  //0


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

















