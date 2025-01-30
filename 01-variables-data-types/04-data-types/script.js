const firstName = 'Edward';
console.log(firstName, typeof firstName);
const age = 53;
console.log(age, typeof age);
const weight = 215.5;
console.log(weight, typeof weight);
const isHappy = true;
console.log(isHappy, typeof isHappy);
const favMovie = null;
console.log(favMovie, typeof favMovie);
let favSong;
console.log(favSong, typeof favSong);
const nationalDebt = 9999999999999999999999999n;
console.log(nationalDebt, typeof nationalDebt);
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // array
console.log(daysOfWeek, typeof daysOfWeek);
const _class = {numOfStudents: 5, startTime: '12:20 PM'}; //object
console.log(_class, typeof _class);

function changeArr(arr, index, newValue) {
    arr[index] = newValue;
}

changeArr(daysOfWeek, 0, 'Sunday');
console.log(daysOfWeek);

const mystery = daysOfWeek; // referred to memory location of ARRAY daysOfWeek
changeArr(mystery, 1, 'Monday');
console.log(daysOfWeek);

const a = 1;
let b = a;
b++;
console.log(a);
console.log(b);





