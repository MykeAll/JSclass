var firstName = 'Mykeall';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);


/************************
 * Basic operators
 */
var year, yearMykeall, yearMark;
now = 2018;
ageMykeall = now - 28;
ageMark = now - 33;

//Math operators
yearMykeall = now - ageMykeall;
yearMark = now - ageMark;

console.log(yearMykeall);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var mykeallOlder = ageMykeall < ageMark;
console.log(mykeallOlder);

// typeof operator
console.log(typeof mykeallOlder);
console.log(typeof ageMykeall);
console.log(typeof 'Mark is older than Mykeall');
var x;
console.log(typeof x);

/************************
 * Operator precedence
 */

var now = 2018;
var yearMykeall = 1989;
var fullAge = 18;

//Multiple operators
var isfullAge = now - yearMykeall + fullAge; //true
console.log(isfullAge);

//
var ageMykeall = now - yearMykeall;
var ageMark = 35;
var average = (ageMykeall + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More operators
x *=2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
