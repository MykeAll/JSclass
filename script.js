var firstName = 'Qudos';
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
var year, yearQudos, yearMark;
now = 2018;
ageQudos = now - 28;
ageMark = now - 33;

//Math operators
yearQudos = now - ageQudos;
yearMark = now - ageMark;

console.log(yearQudos);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var qudosOlder = ageQudos < ageMark;
console.log(qudosOlder);

// typeof operator
console.log(typeof qudosOlder);
console.log(typeof ageQudos);
console.log(typeof 'Mark is older than Qudos');
var x;
console.log(typeof x);

/************************
 * Operator precedence
 */

var now = 2018;
var yearQudos = 1989;
var fullAge = 18;

//Multiple operators
var isfullAge = now - yearQudos + fullAge; //true
console.log(isfullAge);

//
var ageQudos = now - yearQudos;
var ageMark = 35;
var average = (ageQudos + ageMark) / 2;
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
