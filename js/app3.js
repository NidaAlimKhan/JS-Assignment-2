const studentNames1 = [];
const studentNames2 = {
    names: []
}

const stringsArray = ['Canada', 'Saudi Arabia', 'America'];
const numberArrays = [90, 80, 70, 60, 50, 40, 30, 20, 10];
const booleanArrays = [true, false];
const mixedArrays = ['Canada', true, 90, 80, false, 10, 'Saudi Arabia', 20, 'America', 40];

const qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

document.write('<h2>Educational Qualifications in Pakistan:</h2>', '<br/>');
for (var i = 0; i < qualifications.length; i++) {
    document.write('<ul>', '<li>', qualifications[i], '</li>', '</ul>');
}

const studentNames = ['Michael', 'John', 'Tony'];
const studentScores = [320, 230, 480];
const percentage = [(studentScores[0] / 500) * 100, (studentScores[1] / 500) * 100, (studentScores[2] / 500) * 100];

document.write('Score of ' + studentNames[0] + ' is ' + studentScores[0] + '. Percentage: ' + percentage[0] + '%', '<br/>');
document.write('Score of ' + studentNames[1] + ' is ' + studentScores[1] + '. Percentage: ' + percentage[1] + '%', '<br/>');
document.write('Score of ' + studentNames[2] + ' is ' + studentScores[2] + '. Percentage: ' + percentage[2] + '%', '<br/>');

let colors = [' Red', ' Pink', ' Green', ' Blue'];
document.write(colors, '<br/>');
console.log(colors);
alert(colors);

const updatedColors1 = prompt('What color do you want to add at the beginning?');
colors.unshift(updatedColors1);
document.write('Updated-1: ' + colors, '<br/>');
console.log('Updated-1: ' + colors);
alert('Updated-1: ' + colors);

const updatedColors2 = prompt('What color do you want to add at the end?');
colors.push(updatedColors2);
document.write('Updated-2: ' + colors, '<br/>');
console.log('Updated-2: ' + colors);
alert('Updated-2: ' + colors);

colors.push('Yellow', 'Orange');
document.write('Updated-3: ' + colors, '<br/>');
console.log('Updated-3: ' + colors);
alert('Updated-3: ' + colors);

colors.shift();
document.write('Updated-4: ' + colors, '<br/>');
console.log('Updated-4: ' + colors);
alert('Updated-4: ' + colors);

colors.pop();
document.write('Updated-5: ' + colors, '<br/>');
console.log('Updated-5: ' + colors);
alert('Updated-5: ' + colors);

const updatedColorsIndex6 = +prompt('Now, at Which index do you want to add color?');
const updatedColors6 = prompt('Which color name do you want to add?');
colors.splice(updatedColorsIndex6, 0, updatedColors6);
document.write('Updated-6: ' + colors, '<br/>');
console.log('Updated-6: ' + colors);
alert('Updated-6: ' + colors);

const updatedColorsIndex7 = +prompt('Now, at Which index do you want to delete color?');
const updatedColors7 = prompt('How many colors do you want to delete?');
colors.splice(updatedColorsIndex7, updatedColors7);
document.write('Updated-7: ' + colors, '<br/>');
console.log('Updated-7: ' + colors);
alert('Updated-7: ' + colors);

const studentScore = [320, 230, 480, 120];
document.write('Scores of Students: ' + studentScore, '<br/>');
console.log('Scores of Students: ' + studentScore);
const studentScoreSort = studentScore.sort()
document.write('Ordered Scores of Students: ' + studentScoreSort, '<br/>');
console.log('Ordered Scores of Students: ' + studentScoreSort);

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write('Cities list:', cities, '<br/>');
console.log('Cities list:', cities);

const selectedCities = cities.slice(0, 3);
document.write('Selected cities list:', selectedCities, '<br/>');
console.log('Selected cities list:', selectedCities);

const arr = ['This ', ' is ', ' my ', ' cat'];
document.write('Array: ', arr, '<br/>');
console.log('Array: ', arr);
const singleString = arr.join("");
document.write('Single string: ', singleString, '<br/>');
console.log('Single string: ', singleString);

let fifo = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write('Devices: ', '<br/>', fifo, '<br/>');
console.log('Devices: ', '<br/>', fifo);
for (let i = 0; i < fifo.length; i++) {
    document.write('Out:', '<br/>', fifo[i], '<br/>');
    console.log('Out:', '<br/>', fifo[i]);
}
let lifo = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write('Devices: ', '<br/>', lifo, '<br/>');
console.log('Devices: ', lifo);

for (let i = lifo.length - 1; i >= 0; i--) {
    document.write('Out:', '<br/>', lifo[i], '<br/>');
    console.log('Out:', lifo[i]);
}



let manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

document.write('<select>');
document.write('<option>', manufacturers[0], '</option>');
document.write('<option>', manufacturers[1], '</option>');
document.write('<option>', manufacturers[2], '</option>');
document.write('<option>', manufacturers[3], '</option>');
document.write('<option>', manufacturers[4], '</option>');
document.write('<option>', manufacturers[5], '</option>');
document.write('</select>');