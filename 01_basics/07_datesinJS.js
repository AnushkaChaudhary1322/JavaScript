// Dates

let myDate = new Date();

// console.log(typeof myDate); // object

// console.log(myDate.toString()); 
// // output:Fri Jul 26 2024 06:59:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); 
// // output:Fri Jul 26 2024
// console.log(myDate.toISOString()); 
// // output: 2024-07-26T06:59:41.464Z
// console.log(myDate.toJSON()); 
// // output: 2024-07-26T06:59:41.464Z
// console.log(myDate.toLocaleDateString()); 
// // output: 7/26/2024
// console.log(myDate.toLocaleString()); 
// // output: 7/26/2024, 6:59:41 AM
// console.log(myDate.toLocaleTimeString()); 
// // output: 6:59:41 AM

// let myCreatedDate = new Date(2024, 6, 26)
// let myCreatedDate = new Date(2024, 7, 26, 5, 3)
// let myCreatedDate = new Date("2024-07-26")
let myCreatedDate = new Date("07-26-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
});
