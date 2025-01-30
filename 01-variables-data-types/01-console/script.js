document.body.style.backgroundColor = 'blue';
console.log('Hello World!');
const today = new Date();
document.write(`Copyright ${today.getFullYear()}`); // Will not run using node.js
window.alert('Hello World!');
const isHappy = window.confirm('Are you happy?');
if(isHappy) {
    console.log(`I'm Happy too`);
} else {
    console.log('Oh no!');
}
// Object.function('Argument');

let x = 10;
// Python equivalent to variable declaration
// x = 10

// increment the variable x
x++; // Does not work in Python
x = x + 1; // Does work in Python
x += 1; // Does work in Python

console.log("The value of x is: " + x);
// Python equivalent to concatenation
// print("The vale of x is: " + str(x))

const  y = 1;
// Sets a variable constant that is actually constant and cannot change

console.log("The value of y is: " + y);

console.log(`The value of x is: ${x}`);
// Python equivalent to template string literal
// print(f"The value of x is: {x}")

console.log(`The value of y is: ${y}`);

