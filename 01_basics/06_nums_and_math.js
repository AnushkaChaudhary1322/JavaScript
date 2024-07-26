const score = 400 // automatically considers it as number 
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
const anotherNumber = 1123.456
// console.log(otherNumber.toPrecision(3)); // output: 124
// console.log(anotherNumber.toPrecision(3)); // output: 1.12e+3 automatically converts it to a exponential value
// *use toPrecision() carefully*

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // international standard
// console.log(hundreds.toLocaleString('en-IN')); // indian standard

// *.*.*.*.*.*.*.*.*.* Maths *.*.*.*.*.*.*.*.*.*.*.*

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // for nearest upper value // output: 5
// console.log(Math.floor(4.8)); // for nearest lower value // output: 4
// console.log(Math.min(4,8,2,11)); 
// console.log(Math.max(4,8,2,11)); 

console.log(Math.random()); // values always b/w 0-1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
