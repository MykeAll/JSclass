// Lecture: let and const


/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// we use const if we have a variable that is not going to change its value over time while let is use to change the value of the variable

// ES6
const name5 = 'Jane Smith';
let age5 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

//ES5
function driversLicence5(passedTest) {
    
    console.log(firstName);
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
}

driversLicence5(true);


//ES6
function driversLicence6(passedTest) {
    
    // console.log(firstName);
    let firstName;
        const yearOfBirth = 1990;

        if (passedTest) {
            firstName = 'John';
        }

        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);


var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);


/////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5
(function() {
    var c = 3;
})();

//console.log(c);


///////////////////////////////
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
// Middle
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));


/////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 -el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);


//////////////////////////////////
// Lecture: Arrow Functions Lexical 'this' Keyword

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color; alert(str);
        });
    }
}
box5.clickMe();

var box5 = {
    color: 'blue',
    position: 2,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.blue').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color; alert(str);
        });
    }
}
box5.clickMe();

var box5 = {
    color: 'orangered',
    position: 3,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.orange').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color; alert(str);
        });
    }
}

box5.clickMe();

/*
//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color; alert(str);
        });
    }
}
// box6.clickMe();
*/


function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) { return this.name + ' is friends with ' + el;}.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myFriends6(friends);


/////////////////////////////
// Lecture: Destructuring

//ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName1: 'John',
    lastName1: 'Smith'
};

const {firstName1, lastName1} = obj;
console.log(firstName1);
console.log(lastName1);
//same thing
const {firstName1: a, lastName1: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new
    Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age1, retirement] = calcAgeRetirement(1990);
console.log(age1);
console.log(retirement);


////////////////////////////////
// Lecture: Arrays in ES6 ES2015

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

/*
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

//ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
        // break;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

//ES6
/*
for(const cur of boxesArr6) {
    if(cur.className === 'box blue') {
        continue;
        // break;
    }

    cur.textContent = 'I changed to blue!';
}
*/

for(const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        // continue;
        break;
    }

    cur.textContent = 'I changed to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


/////////////////////////////////
// Lecture: Spread operator (is used in the function call)

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h, ...boxes1];

Array.from(all).forEach(cur => cur.style.color = 'purpple');


///////////////////////////
// Lecture: Rest parameters (is used in the function declaration to accept or return a number of parameters)

/*
//ES5
function isFullAge() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}


// isFullAge(1990, 1999, 1965);
// isFullAge(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log ((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/


//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}


isFullAge5(16, 1990, 1999, 1965);
// isFullAge(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log ((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);


///////////////////////////
// Lecture: Default parameters

/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ?
    nationality = 'American' :
    nationality = nationality ;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')
*/

//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');



///////////////////////////
// Lecture: Maps (we can use anything as key, it is easy to get the size of a map using the size property; we can add and remove data from a map)

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :C');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
// console.log(question.size);

if(question.has(4)) {
    // question.delete(4);
    // console.log('Answer 4 is here')

}
// question.delete(4);
// question.clear();

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


/*
for (let [key, value] of
    question.entries()) {
    console.log(`This is ${key}, and it's set to ${value}`);
}
*/

for (let [key, value] of
    question.entries()) {
        if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
}
}

const ans = parseInt(prompt('Input the correct answer'));
console.log(question.get(ans === question.get('correct')));