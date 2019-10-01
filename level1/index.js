let val;

//number to string
val = 5;
val = String(5)
val = String(4+4)
val = String(true)

val = String(new Date())

val = String([1,2,3,4])

val = (5).toString();
val = (true).toString();

val = '5'
val = Number('5'); //5

val = Number(true); //1
val = Number(false); //0
val = Number(null); //0

val = Number('hello'); //Nan
val = Number([1, 2, 3]);  //Nan

val = parseInt('10000.445'); //10000
val = parseFloat('10000.40'); //10000.3

console.log(val);
console.log(typeof val);
// console.log(val.length)

const val1 = 5;
const val2 = 6;
const summ = val1 + val2 // 11

const val1 = '5';
const val2 = 6;
const summ = val1 + val2 // 56

