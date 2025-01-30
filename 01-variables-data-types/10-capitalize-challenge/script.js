// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
let index = myString.indexOf("developer");
let myNewString = myString.substring(0, index) + myString.charAt(index).toUpperCase() + myString.substring(index + 1);
console.log(myNewString);