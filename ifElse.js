/************************
 * If / else statements
 */

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :");
}

var isMarried = true;
if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :");
}

var massMark = 60; // kg
var heightMark = 1.23; // meters

var massJohn = 80;
var heightJohn = 1.34;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's.");
} else {
  console.log("John's BMI is higher than Mark's.");
}

// var markHigherBMI = BMIMark < BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/**********************
 * Boolean logic
 */

/*var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  // Between 13 and 20 === age >= 13 AND age < 20
  console.log(firstName + " is a teenager.");
} else if (age > 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
}*/

/*var age = 16;
age >= 20; // => false
age < 30; // => true
! (age < 30); // => false

age >= 20 && age < 30; // => false
age >= 20 ll age < 30; // => true
*/

/*************************
 * The Ternary Operator and Switch Statements
 */

var firstName = "John";
var age = 14;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 22;
switch (true) {
    case age < 13:
    console.log(firstName + " is a boy.");
    break;
    case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
    case age > 20 && age < 30:
        console.log(firstName + " is a young man.");
        break
        default:
            console.log(firstName + ' is a man.')
}

/*****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height = height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT ben defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}