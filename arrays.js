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

