// 1. Arithmetic Operators
console.log(6 / 4); // 1.5
console.log(Math.floor(6 / 4)); // 1
console.log(6 / 4 | 0); // 1

// 2. Assignment Operators


// 3. Comparison Operators
const x = 2;
console.log(x == 2); // true
console.log(x == '2'); // true, equality
console.log(x === '2'); //false, equality and data type

const y = 1.1 + 2.2; // 3.3000000000000003
console.log(y);
console.log(y == 3.3); // false

function isEqual(a, b) {
    return Math.floor(a - b) == 0;
}

console.log(isEqual(y, 3.3)); // true









