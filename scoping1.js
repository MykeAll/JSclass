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