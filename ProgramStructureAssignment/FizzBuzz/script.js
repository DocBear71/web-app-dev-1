// Print-log the numbers from 1 to 100
// For multiples of three print "Fizz" instead of the number
// For multiples of five print "Buzz"
// For numbers which are multiples of both three and five print "FizzBuzz"
// Write 'Pop; for multiples of 7, and 'FizzBuzzPop' for numbers divisible
// by all three or print a special word for prime numbers within range

function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) { // We only need to check up to the square root of the number
        if (num % i === 0) { // If num is divisible by any number between 2 and sqrt(num), it's not prime
            return false;
        }
    }
    return true; // If no divisors are found, the number is prime
}


let numbers = 1;
let i = 1;
while (i <= 100) {
    if (isPrime(numbers)) {
        console.log('Prime');
    } else if (numbers % 3 === 0 && numbers % 5 === 0 && numbers % 7 === 0) {
        console.log('FizzBuzzPop');
    } else if(numbers  % 7 === 0) {
    console.log('Pop');
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