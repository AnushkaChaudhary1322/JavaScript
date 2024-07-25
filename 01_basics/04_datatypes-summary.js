// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Declaration of Symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 343636457867980852n // BigInt 

/*
* JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.
*/


// Refernce (non-Primitive)

// Array, Objects, Functions

const names = ["anushka", "akanksha", "akriti"]

let myObj = {
    name: "anushka",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World!");
} // called object function
console.log(typeof myFunction); // but returns type value as function


// Type of value | Result
// Undefined | "undefined"
// Null | "object"
// Boolean | "boolean"
// Number | "number"
// String | "string"
// Object (native and does not implement[[Call]]) | "object"
// Object (native or host and does not implement [[Call]]) | "function"
// Object (host and does not implement [[Call]]) | Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// +.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+
// Stack -> Primitive => Copy 
// Heap -> Non-Primitive => Reference
