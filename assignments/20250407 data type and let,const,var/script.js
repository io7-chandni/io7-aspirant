let studentName = "chandni";
let studentage;
let studentAge = 56;

console.log("studentname", studentName);
console.log("studentAge", studentAge);

var mark = 10;
console.log("mark first--", mark);

var mark = -55;
console.log("mark first--", mark);

function updateMark() {
  var mark = 20;
  console.log("mark inside function--", mark);
}

updatemark();
console.log("mark inside function--", mark);

function test() {
  var a = 10;
  if (true) {
    var a = 20;
    console.log("testing var--", a);
  }
  console.log("testing var--", a);
}

test();
function test() {
  var a = 10;
  var a = 20;
  console.log("testing var--", a);
  console.log("testing var2--", a);
}

test2();

let price;
console.log("pricing price--", price);
