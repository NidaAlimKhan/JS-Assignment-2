const question = prompt('Enter any character: ');
const charCode = question.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(question + " is a number");
    document.write(question + " is a number");
    console.log(question + " is a number");
}
else if (charCode >= 65 && charCode <= 90) {
    alert(question + " is an uppercase letter");
    document.write(question + " is an uppercase letter");
    console.log(question + " is an uppercase letter");
}
else if (charCode >= 97 && charCode <= 122) {
    alert(question + " is a lowercase letter.");
    document.write(question + " is an lowercase letter");
    console.log(question + " is an lowercase letter");
}
else {
    alert(question + " is not recognized");
    document.write(question + " is not recognized");
    console.log(question + " is not recognized");
}

const quiz1 = +prompt('Enter the first integer: ');
const quiz2 = +prompt('Enter the second integer: ');

if (quiz1 > quiz2) {
    alert(quiz1 + ' is larger than ' + quiz2);
    document.write(quiz1 + ' is larger than ' + quiz2, '<br/>');
    console.log(quiz1 + ' is larger than ' + quiz2);
}
else if (quiz1 < quiz2) {
    alert(quiz2 + ' is larger than ' + quiz1);
    document.write(quiz2 + ' is larger than ' + quiz1, '<br/>');
    console.log(quiz2 + ' is larger than ' + quiz1);
}
else if (quiz1 === quiz2) {
    alert('Both intergers are equal');
    document.write('Both intergers are equal', '<br/>');
    console.log('Both intergers are equal');
}

const quiz3 = +prompt('Enter any number: ');

if (quiz3 > 0) {
    alert(quiz3 + ' is a positive number');
    document.write(quiz3 + ' is a positive number', '<br/>');
    console.log(quiz3 + ' is a positive number');
}
else if (quiz3 < 0) {
    alert(quiz3 + ' is a negative number');
    document.write(quiz3 + ' is a negative number', '<br/>');
    console.log(quiz3 + ' is a negative number');
}
else {
    alert('The number is zero');
    document.write('The number is zero', '<br/>');
    console.log('The number is zero');
}

const vowel = prompt('Enter any character: ');

if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    alert('It is a vowel');
    document.write('it is a vowel', '<br/>');
    console.log('It is a vowel');
}
else {
    alert('It is not a vowel');
    document.write('It is not a vowel', '<br/>');
    console.log('it is not a vowel');
}

let quiz4 = prompt('Enter your password:');
const password = 'saylani';

if (quiz4 === password) {
    alert('Correct! The password you entered matches the original password');
    document.write('Correct The password you entered matches the original password');
    console.log('Correct! The password you entered matches the original password');
}
else if (quiz4 === null || quiz4 === "") {
    alert('Please enter your password');
    document.write('please enter your password');
    console.log('Please enter your password');
}
else {
    alert('Incorrect password');
    document.write('Incorrect password');
    console.log('incorrect password');
}

let greeting;
hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

console.log(hour + ' = ' + greeting);
document.write(hour + ' = ' + greeting);

const time = +prompt('Enter time in 24-hour format: ');

if (time >= 0 && time < 1200) {
    alert('Good morning!');
    document.write('Good morning!');
    console.log('Good morning!');
}
else if (time >= 1200 && time < 1700) {
    alert('Good afternoon!');
    document.write('Good afternoon!');
    console.log('Good afternoon!');
}
else if (time >= 1700 && time < 2100) {
    alert('Good evening!');
    document.write('Good evening!');
    console.log('Good evening!');
}
else if (time >= 2100 && time <= 2359) {
    alert('Good night!');
    document.write('Good night!');
    console.log('Good night!');
}
else {
    alert('You have written wrong time!');
    document.write('You have written wrong time!');
    console.log('You have written wrong time!');
}
