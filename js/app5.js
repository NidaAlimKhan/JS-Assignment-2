const firstName = prompt('Enter your first name:');
const lastName = prompt('Enter your last name: ');
const fullName = firstName + ' ' + lastName;
alert('Hello! ' + fullName);
console.log('Hello! ' + fullName);
document.write('Hello! ' + fullName, '<br/>')

const favPhone = prompt('Enter your favorite mobile phone model:');
document.write('My favourite Phone is: ' + favPhone, '<br/>');
console.log('My favourite Phone is: ' + favPhone);

const lengthString = favPhone.length;
document.write('Length of String: ' + lengthString, '<br/>')
console.log('Length of String: ' + lengthString);

const word1 = 'Pakistan';

document.write('String: ' + word1, '<br/>');
console.log('String: ' + word1);

const word1Index = word1.indexOf('n');
document.write("Index of 'n': " + word1Index, '<br/>');
console.log("Index of 'n': " + word1Index);

const word2 = 'Hello World';

document.write('String: ' + word2, '<br/>');
console.log('String: ' + word2);

const word2Index = word2.lastIndexOf('l');
document.write("Index of 'l': " + word2Index, '<br/>');
console.log("Index of 'l': " + word2Index);

const word3 = 'Hello World';

document.write('String: ' + word3, '<br/>');
console.log('String: ' + word3);

const word3Index = word3.charAt(3);
document.write("Character at Index 3: " + word3Index, '<br/>');
console.log("Character at Index 3: " + word3Index);

const firstName1 = prompt('Enter your first name:');
const lastName1 = prompt('Enter your last name: ');

const fullName1 = firstName1.concat(' ', lastName1);

alert('Hello! ' + fullName1);
console.log('Hello! ' + fullName1);
document.write('Hello! ' + fullName1, '<br/>')

const word4 = 'Hyderabad';
const replacedWord4 = word4.replace('Hyder', 'Islam');

console.log('City: ' + word4);
console.log('After replacement: ' + replacedWord4);
document.write('City: ' + word4, '<br/>');
document.write('After replacement: ' + replacedWord4, '<br/>');

let message = "Ali and Sami are best friends. They play cricket and football together.";
for (let i = 0; i < message.length; i++) {
    if (message.slice(i, i + 3) === "and") {
        message = message.slice(0, i) + "&" + message.slice(i + 3);
    }
}
document.write(message, '<br/>');
console.log(message);

const string = "472";
const number = parseInt(string);

document.write('Value: ' + string + '<br/>');
console.log('Value: ' + string);
document.write('Type: ' +  typeof string + '<br/>');
console.log('Type: ' +  typeof string);
document.write('Value: ' + number + '<br/>');
console.log('Value: ' + number);
document.write('Type: ' +  typeof number + '<br/>');
console.log('Type: ' +  typeof number);

const userInput1 = prompt('Enter any word: ');
const capitalCase1 = userInput1.toLocaleUpperCase();

document.write('User Input: ' + userInput1 + '<br/>');
console.log('User Input: ' + userInput1);
document.write('Upper Case: ' + capitalCase1 + '<br/>');
console.log('Upper Case: ' + capitalCase1);

const userInput = prompt('Enter any word:')
const titleCase = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

document.write('User Input: ' + userInput + '<br/>');
console.log('User Input: ' + userInput);
document.write('Upper Case: ' + titleCase + '<br/>');
console.log('Upper Case: ' + titleCase);

const num = 35.36;
const string1 = num.toString();
const string2 = string1.replace('.', '');

document.write('Number: ' + num, '<br/>');
console.log('Number: ' + num);
document.write('Result: ' + string2, '<br/>');
console.log('Result: ' + string2);


let specialSymbols = ['@', '.', ',', '!'];
let username = prompt('Enter your username:');
let found12 = false

for (let i = 0; i < username.length; i++) {
    if (specialSymbols.includes(username[i])) {
        username = alert("Enter a valid username without special symbols [@, ., ,, !]:");
        console.log('Invalid username!');
        document.write('Invalid username!');
        found12 = true
    }
}

if (!found12) {
    console.log('Valid username: ' + username);
    document.write('Valid username: ' + username, '<br/>');
}

const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
const B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found2 = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === B) {
        found2 = true;
        alert(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        document.write(B.toLowerCase() + ' is available at index ' + i + ' in our bakery');
        break;
    }
}

if (!found2) {
    alert('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
    document.write('We are Sorry! ' + B.toLowerCase() + ' is not available in our bakery');
}

let password = prompt('Enter your password:')
let found1 = false

if (password.length > 6 && isNaN(parseInt(password[0])) && password.length [a-zA-Z] && password.length [0-9] ) {
    found1 = true
    document.write('Entered Password: ' + password);
    console.log('Entered Password: ' + password);
}
else if (password.length < 6) {
    alert('Please enter a valid password')
    document.write('Entered Password: ' + password, '<br/>');
    document.write('Password must at least 6 characters long', '<br/>');
    document.write('Please enter a valid password');
    console.log('Entered Password: ' + password);
    console.log('Password must at least 6 characters long');
    console.log('Please enter a valid password');
}
else if (!isNaN(parseInt(password[0]))) {
    alert('Please enter a valid password')
    document.write('Entered Password: ' + password, '<br/>');
    document.write('Password cannot begin with a number', '<br/>');
    document.write('Please enter a valid password');
    console.log('Entered Password: ' + password);
    console.log('Password cannot begin with a number');
    console.log('Please enter a valid password');
}
if (!found1) {
    alert('Please enter a valid password')
    document.write('Entered Password: ' + password, '<br/>');
    document.write('Please enter a valid password');
    console.log('Entered Password: ' + password);
    console.log('Please enter a valid password');
}

let university = 'University Of Karachi';
let universitySplit = university.split('');

for (let i = 0; i < universitySplit.length; i++) {
    document.write('<p>' + universitySplit[i] + '</p>');
}

const userInput2 = prompt('Enter any word:');

document.write('User Input: ' + userInput2, '<br/>');
console.log('User Input: ' + userInput2);

if (userInput2 !== null && userInput2 !== "") {
    const wordIndex = userInput2.charAt(userInput2.length - 1);
    document.write('Last Character of Input: ' + wordIndex, '<br/>');
    console.log('Last Character of Input: ' + wordIndex);
}

const givenString = "The quick brown fox jumps over the lazy dog";
const wordToFind = "the";
const textLower = givenString.toLowerCase();
const wordLower = wordToFind.toLowerCase();

let count = 0;

for (let i = 0; i < textLower.length; i++) {
    if (textLower.slice(i, i + wordLower.length) === wordLower) {
        count++;
    }
}

document.write('Text: ' + givenString, '<br/>');
console.log('Text: ' + givenString);
document.write(`There are ${count} occurrence(s) of word '${wordToFind}': `);
console.log(`There are ${count} occurrence(s) of word '${wordToFind}' `);