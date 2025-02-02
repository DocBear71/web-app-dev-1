// Given the following code:
//
// function randomIntFrom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// for(/* Your code here */) {
//     var num1 = randomIntFrom(1, 6);
//     var num2 = randomIntFrom(1, 6);
//     // Your code here
// }
//
// Write code to make the loop run 100 times.
//
// Write a string template literal that prints "1 + 2 = 3", where 1 is the value assigned to num1, 2 is the value assigned to num2, and 3 is the sum of num1 and num2.
//
// Write an if statement that checks if both numbers are the same. If true, then...
//
// if both numbers are 1, print "snake eyes".
// if both numbers are 6, print "boxcars".
// for any other number, print "hard N", For example, if both numbers are 4, print "hard 8".


function randomIntFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let i = 0; i < 100; i++) {
    var num1 = randomIntFrom(1, 6);
    var num2 = randomIntFrom(1, 6);
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    if (num1 === num2) {
        if (num1 === 1) {
            console.log("\tSnake Eyes");
        } else if (num1 === 6) {
            console.log("\tBox Cars");
        } else {
            console.log(`\tHard ${num1 + num2}`);
        }
    }
}