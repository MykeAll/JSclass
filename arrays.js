/******************************
 * Arrays
 */

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

//How to add from the end side
john.push('blue');
//How to add from the front side
john.unshift('Mr.')
console.log(john);

// How to delete from the back side
john.pop();
john.pop();
john.shift();
console.log(john);

//How to know the position of a string
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ?
'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);




/******************************
 * Objects and properties
 */

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john.lastName);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john[x]);
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 'Jane';
jane['lastName'] = 'Smith';
console.log(jane);


/******************************
 * Loops and iteration
 */

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
// ...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// console.log(john[0]);
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]); i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}