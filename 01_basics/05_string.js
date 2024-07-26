const name = "anushka"
const repoCount = 50

// console.log(name + repoCount + "Value"); 
// don not use out-dated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Mario-game-of-all-times')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // original value is not changed
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 5) 
// char at 5th index is not included 
// substring(start, end)
// if given -ve values ignores it & starts from 0 only
console.log(newString);

const anotherString = gameName.slice(-8, 5) // can also give negative value
console.log(anotherString)

const newStringOne = "  anushka.   "
console.log(newStringOne);
console.log(newStringOne.trim());
// works on white spaces and line terminator characters from the beginning and end of a string

const url = "https://mario.com/game%20ofalltimes"
// if there is a space in url browser automatically converts it into '%' sign
console.log(url.replace('%20', '-')); // actual value not changed

console.log(url.includes('mario')); // output: true

console.log(gameName.split('-'));
// output: [ 'Mario', 'game', 'of', 'all', 'times' ]
