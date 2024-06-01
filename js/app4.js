const emptyMultiDimArray = [
    [],
    [],
    []
];

const multiDimArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (let i = 1; i <= 10; i++) {
    document.write(i, '<br/>');
    console.log(i);
}

const quiz1 = +prompt('Enter a number to show its multiplication table:');
const quiz2 = +prompt('Enter length multiplication table: ');

document.write('Multiplication Table of ' + quiz1 + ':', '<br/>');
console.log('Multiplication Table of ' + quiz1 + ':');

for (i = 1; i <= quiz2; i++) {
   document.write(quiz1, ' x ', i, ' = ', (quiz1 * i), '<br/>');
   console.log(quiz1, ' x ', i, ' = ', (quiz1 * i));
}

const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i], '<br/>');
    console.log(fruits[i]);
}

for (i = 0; i < fruits.length; i++) {
    document.write('Elements at index ' + i + ' is ' + fruits[i], '<br/>');
    console.log('Elements at index ' + i + ' is ' + fruits[i]);
}
console.log('Counting:');
document.write('Counting:', '<br/>');

for (let i = 1; i <= 15; i++) {
    console.log(i);
    document.write(i, ', ')
}

console.log('\nReverse counting:');
document.write('<br/>', 'Reverse counting:', '<br/>')

for (let i = 10; i >= 1; i--) {
    console.log(i);
    document.write(i, ', ');
}

console.log('\nEven:');
document.write('<br/>', 'Even:', '<br/>')

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
    document.write(i, ', ');
}

console.log('\nOdd:');
document.write('<br/>', 'Odd:', '<br/>')

for (let i = 1; i <= 19; i += 2) {
    console.log(i);
    document.write(i, ', ');
}

console.log('\nSeries:');
document.write('<br/>', 'Series:', '<br/>')

for (let i = 1; i <= 10; i++) {
    console.log(i * 2 + 'k');
    document.write(i, ', ');
}

const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === B) {
        found = true;
        alert(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        document.write(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        break;
    }
}

if (!found) {
    alert('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
    document.write('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
}

let A1 = [24, 53, 78, 91, 12];
document.write('Array Items: ' + A1, '<br/>');
console.log('Array Items: ' + A1);

let number1 = A1[0];

for (let i = 1; i < A1.length; i++) {
    if (A1[i] > number1) {
        number1 = A1[i];
    }
}
document.write('The largest number is ' + number1, '<br/>');
console.log('The largest number is ' + number1);

A2 = [24, 53, 78, 91, 12];
document.write('Array Items: ' + A2, '<br/>');
console.log('Array Items: ' + A2);

let number2 = A2[0];

for (let i = 1; i < A2.length; i++) {
    if (A2[i] < number2) {
        number2 = A2[i];
    }
}

document.write('The smallest number is ' + number2, '<br/>');
console.log('The smallest number is ' + number2);

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i, ', ');
        console.log(i);
    }
}
