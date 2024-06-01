const quiz1 = prompt('city name: ');
if (quiz1 === 'Karachi' || quiz1 === 'karachi') {
    alert('Welcome to city of lights');
}
else {
    alert('welcome to ' + quiz1);
}

const quiz2 = prompt('Gender: ');
if (quiz2 === 'Male' || quiz2 === 'male') {
    alert('Good morning Sir');
}
else if (quiz2 === 'Female' || quiz2 === 'female') {
    alert("Good morning Ma’am");
}

const quiz3 = prompt('Road traffic signal: ');
if (quiz3 === 'Red' || quiz3 === 'red') {
    alert('Must stop');
}
else if (quiz3 === 'Yellow' || quiz3 === 'yellow') {
    alert('Ready to move');
}
else if (quiz3 === 'Green' || quiz3 === 'green') {
    alert('Move now');
}

const quiz4 = prompt('Remaining fuel in your car (in litres): ');
if (quiz4 < 0.25) {
    alert('Please refill the fuel in your car');
}

document.write('city: ' + quiz1 + ' --- welcome to city of lights/Welcome to (city name) ', '<br/>', 'Gender: ' + quiz2 + " --- Good morning ma'am(Female)/Sir(Male) ", '<br/>', 'Road traffic signal: ' + quiz3 + ' --- Red(Must stop)/Yellow(Ready to move)/Green(Move now) ', '<br/>', 'Remaining fuel in your car (in litres): ' + quiz4 + ' --- less than 0.25-->Please refill the fuel in your car ');

let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}


let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

document.write('given condition for variable a is true', '<br/>', 'condition 2 is true', '<br/>', 'condition 4 is true', '<br/>', 'The cost equals', '<br/>', 'True', '<br/>', 'car is smaller than cat');

document.write('<h3>Marks Sheet</h3>', '<br/>');

const quiz5 = +prompt("Marks Obtained in Subject 1: ");
const quiz6 = +prompt("Total Marks in Subject 1: ");

document.write('Subject 1:', '<br/>', '<br/>', 'Total Marks: ' + quiz6, '<br/>', 'Marks Obtained: ' + quiz5);

const percentage1 = (quiz5 / quiz6) * 100;

document.write('<br/>', 'Percentage: ' + percentage1 + '%');

if (percentage1 >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (percentage1 >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (percentage1 >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (percentage1 < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

const quiz7 = +prompt("Marks Obtained in Subject 2: ");
const quiz8 = +prompt("Total Marks in Subject 2: ");

document.write('Subject 2:', '<br/>', '<br/>', 'Total Marks: ' + quiz8, '<br/>', 'Marks Obtained: ' + quiz7);

const percentage2 = (quiz7 / quiz8) * 100;

document.write('<br/>', 'Percentage: ' + percentage2 + '%');

if (percentage2 >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (percentage2 >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (percentage2 >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (percentage2 < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

const quiz9 = +prompt("Marks Obtained in Subject 3: ");
const quiz10 = +prompt("Total Marks in Subject 3: ");

document.write('Subject 2:', '<br/>', '<br/>', 'Total Marks: ' + quiz10, '<br/>', 'Marks Obtained: ' + quiz9);

const percentage3 = (quiz9 / quiz10) * 100;

document.write('<br/>', 'Percentage: ' + percentage3 + '%');

if (percentage3 >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (percentage3 >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (percentage3 >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (percentage3 < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

const totalMarks = quiz5 + quiz7 + quiz9;
const marksObtained = quiz6 + quiz8 + quiz10;

document.write('Total:', '<br/>', '<br/>', 'Total Marks: ' + totalMarks, '<br/>', 'Marks Obtained: ' + marksObtained);

const totalPercentage = (quiz5 + quiz7 + quiz9) / (quiz6 + quiz8 + quiz10) * 100;

document.write('<br/>', 'Percentage: ' + totalPercentage + '%');

if (totalPercentage >= 80) {
    document.write('<br/>', 'Grade: ' + 'A-one', '<br/>', 'Remarkes: ' + 'Excellent', '<br/>', '<br/>');
}
else if (totalPercentage >= 70) {
    document.write('<br/>', 'Grade: ' + 'A', '<br/>', 'Remarkes: ' + 'Good', '<br/>', '<br/>');
}
else if (totalPercentage >= 60) {
    document.write('<br/>', 'Grade: ' + 'B', '<br/>', 'Remarkes: ' + 'You need to improve', '<br/>', '<br/>');
}
else if (totalPercentage < 60) {
    document.write('<br/>', 'Grade: ' + 'Fail', '<br/>', 'Remarkes: ' + 'Fail', '<br/>', '<br/>');
}

const num = 4;
const guessNum = +prompt('Guess the secret number:');
const guessNum2 = num - 1;

if (num === guessNum) {
    alert('Bingo! Correct answer');
}
else if (guessNum === guessNum2) {
    alert('Close enough to the correct answer');
}

document.write('Secret Number was 4!');
console.log('Secret Number was 4!');

const num1 = +prompt('Enter any number:');

if (num1 % 3 === 0) {
    alert(num1 + ' is divisible by 3');
    document.write(num1 + ' is divisible by 3' + '<br/>');
    console.log(num1 + ' is divisible by 3');
}
else {
    alert(num1 + ' is not divisible by 3');
    document.write(num1 + ' is not divisible by 3' + '<br/>');
    console.log(num1 + ' is not divisible by 3');
}

const num2 = +prompt('Enter any number: ')

if (num2 % 2 === 0) {
    alert(num2 + ' is an even number');
    document.write(num2 + ' is an even number' + '<br/>');
    console.log(num2 + ' is an even number');
}
else {
    alert(num2 + ' is an odd number');
    document.write(num2 + ' is an odd number' + '<br/>');
    console.log(num2 + ' is an even number');
}

const T = +prompt("Today's Temperature in your City:");

if (T > 40) {
    alert('It is too hot outside');
    document.write('It is too hot outside');
    console.log('It is too hot outside');
}
else if (T > 30) {
    alert('The Weather today is Normal');
    document.write('The Weather today is Normal');
    console.log('The Weather today is Normal');
}
else if (T > 20) {
    alert('Today’s Weather is cool');
    document.write('Today’s Weather is cool');
    console.log('Today’s Weather is cool');
}
else if (T > 10) {
    alert('OMG! Today’s weather is so Cool');
    document.write('OMG! Today’s weather is so Cool');
    console.log('OMG! Today’s weather is so Cool');
}

const quiz11 = +prompt('Enter the first number: ');
const quiz12 = +prompt('Enter the second number: ');
const quiz13 = prompt('Enter the operation (+, -, *, /, %): ');

if (quiz13 === '+') {
    alert('Result: ' + (quiz11 + quiz12));
    document.write('Result: ' + (quiz11 + quiz12));
    console.log('Result: ' + (quiz11 + quiz12));
}
else if (quiz13 === '-') {
    alert('Result: ' + (quiz11 - quiz12));
    document.write('Result: ' + (quiz11 - quiz12));
    console.log('Result: ' + (quiz11 - quiz12));
}
else if (quiz13 === '*') {
    alert('Result: ' + (quiz11 * quiz12));
    document.write('Result: ' + (quiz11 * quiz12));
    console.log('Result: ' + (quiz11 * quiz12));
}
else if (quiz13 === '/') {
    alert('Result: ' + (quiz11 / quiz12));
    document.write('Result: ' + (quiz11 / quiz12));
    console.log('Result: ' + (quiz11 / quiz12));
}
else if (quiz13 === '%') {
    alert('Result: ' + (quiz11 % quiz12));
    document.write('Result: ' + (quiz11 % quiz12));
    console.log('Result: ' + (quiz11 % quiz12));
}
else {
    alert('Invalid operation!');
    document.write('Invalid operation!');
    console.log('Invalid operation!');
}