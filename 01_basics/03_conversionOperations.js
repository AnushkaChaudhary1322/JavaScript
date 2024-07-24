let score1 = "33abc"

// console.log("score1: ", typeof score1);
// console.log(typeof (score)); // another way to check 

let valueInNumber1 = Number(score1)

// console.log("Type of score1: ", typeof valueInNumber1 , "| Actual value: ", valueInNumber1);

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

// *.*.*.*.*.*.*.*.*.* Operations *.*.*.*.*.*.*.*.*.*.

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);
// console.log(2/3);
// console.log(2%3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true) // output: 1
// console.log(+"") // output: 0

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // false
/**
  the reason is that an equality check == and comparisons > < >= <= work differently
  Comparisons convert null to a number, treating it as 0.
  That's why null >= 0 is true but not null > 0.
 */

// ===

console.log("2" == 2); // true
console.log("2" === 2); // false