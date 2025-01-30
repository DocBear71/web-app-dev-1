const str = "Hello World";
console.log(str.length); // 12 (in Java, add () after length)
const arr = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dogs'];
console.log(arr.length); // 2
console.log(str[0]); // H
console.log(str[1]); // e
console.log(arr[0]); // Hello
console.log(arr[1]); // World
console.log(arr[0][0]); // H
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0,2)); // He
console.log(str.substring(1,3)); // el
console.log(str.substring(2)); // llo, World

console.log(arr.slice(0,2)); // The quick
console.log(arr.slice(1,3)); // quick brown
console.log(arr.slice(2)); // brown fox jumped over the lazy dogs

console.log(str.split('')) // convert string to array
console.log(arr.join(' ')); // converts an array to a string

const password = 'Kirkwood '.trim();
console.log(password == 'Kirkwood');









