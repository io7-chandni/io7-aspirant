let x = 89;
let y = 78;
console.log(`print--`, x + y);

let a = 87;
let b = 10;
console.log(`output--`, a - b, a + b, a * b);

// Assignemnts-----------------------------------------------

// 1. What is the data-type of
// 	'Italy'-----------------------> string
// 	501---------------------------> number
// 	false-------------------------> boolean
// 	[23, 546, 67,8,90]------------> number
// 	undefined---------------------> undefined
// 	null--------------------------> null
// 	{}----------------------------> string
// 	Number(India)-----------------> NaN
// 	Date()------------------------> object
// 	?

// 2. Find output
console.log("output-1", "500" + 100); //500100
console.log("output-2", 56 + 100); // 156
console.log("output-3", 56 + "100"); //56100
console.log("output-4", "500" / "100"); //5
console.log("output-5", 56 + 100 + true); // 157
console.log("output-6", 56 + 100 + Number(true)); //157
console.log("output-7", 56 + 100 + "true"); //156true
console.log("output-8", 56 + 100 + Number("true")); //NaN
console.log("output-9", 56 + 100 + Number("Vinay")); //NaN
console.log("output-9", 50 - "100" + "Vinay"); //-50Vinay
