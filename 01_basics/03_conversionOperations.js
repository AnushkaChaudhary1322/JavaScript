let score1 = "33abc"
let score2 = null
let score3 = undefined

console.log("score1: ", typeof score1);
console.log("score2: ", typeof score2);
console.log("score3: ", typeof score3);
// console.log(typeof (score)); // another way to check 

console.log("After conversion:")

let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)

console.log("Type of score1: ", typeof valueInNumber1 , "| Actual value: ", valueInNumber1);
console.log("Type of score2: ", typeof valueInNumber2 , "| Actual value: ", valueInNumber2);
console.log("Type of score3: ", typeof valueInNumber3 , "| Actual value: ", valueInNumber3);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0
// "abc" => NaN
// null => 0

// boolean conversion
// 1 => true
// 0 => false
// "" => false
// "abc" => true

