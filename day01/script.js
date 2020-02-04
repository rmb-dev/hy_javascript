alert('run external JS file!');

let seconds = 60;
let minutes = 60;
const secondsPerHours = (seconds * minutes) * 24;
let days = 365;
const secondsPerYear = secondsPerHours * days;
console.log(secondsPerYear);

let cookieDough = 12;
let cookiesAte = (12 * 0.25);
const cookiesRemaining = cookieDough - cookiesAte;
console.log(cookiesRemaining);

let cookies = 50;
let biscuits = 24;

if (cookies <= biscuits) {
    console.log('we have less cookies!')
} else {
    console.log('we have more cookies!')
}


const numOne = 1;
const numTwo = 2;
const numThree = 3;
let biggestNumber = 0;

if (numOne >= numTwo && numOne >= numThree) {
    biggestNumber = numOne;
}
if (numTwo >= numOne && numTwo >= numThree) {
    biggestNumber = numTwo;
}
if (numThree >= numTwo && numThree >= numOne) {
    biggestNumber = numThree;
}
console.log(biggestNumber);




for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}


for (let i = 1; i <= 100; i + 2) {
    console.log(i);
}
