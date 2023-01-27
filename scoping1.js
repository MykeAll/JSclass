//////////////////////////
// Lecture: Scoping


// First scoping example

// Example to show the difference between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = ' John';
    console.log(a + d);
}


//////////////////////////
// Lecture: The 'this' keyword

// console.log(this);

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016-year);
    console.log(this);
}
*/


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method Borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();