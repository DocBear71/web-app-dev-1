// Print-log the numbers from 1 to 100
// For multiples of three print "Fizz" instead of the number
// For multiples of five print "Buzz"
// For numbers which are multiples of both three and five print "FizzBuzz"

let numbers = 1
let i = 1;
while (i <= 100) {
    if (numbers % 3 === 0 && numbers % 5 === 0) {
        console.log('Fizzbuzz');
    } else if (numbers % 5 === 0) {
        console.log('Buzz')
    } else if (numbers % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(numbers);
    }
    numbers += 1;
    i++;
}