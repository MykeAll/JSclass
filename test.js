/***********
 * CODING CHALLENGE1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIS
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4.  Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

*/

var massMark = 60; // kg
var heightMark = 1.23;

var massJohn = 80;
var heightJohn = 1.34;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark < BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the lastst 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scoress to show different winners.
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.)
5.  Like before, change the scores to generate different winners, keeping in mind there might be draws.*/

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary)
{
    console.log("John's team wins with " + scoreJohn + " points");  
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log("Mary's team wins with " + scoreMary + " points");
} else {
    console.log('There is a draw');
}

/*if (scoreJohn > scoreMike) {
    console.log("John's team wins with " + scoreJohn + " points");
}  else if (scoreMike > scoreJohn) {
    console.log("Mike's team wins with " + scoreJohn + " points");
} else {
    console.log('There is a draw');
}*/


/****************************
 * CODING CHALLENGE 3
 */

/**
 * John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
 * 
 * To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
 * 
 * In the end, John would like to have 2 arrays:
 * 1) Containing all three tips (one for each bill)
 * 2) Containing all three final paid amounts (bill + tip).
 * 
 * (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
 */

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2]];

console.log(tips, finalValues);


/****************************
 * CODING CHALLENGE 4
 */

/**
 * Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
 * 1. For each of themm, create an object with properties for their full name, mass, and height
 * 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
 * 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they sight have the same BMI.
 * 
 * Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
 */

var john = {
    fullName: 'John Smith',
    mass: 100,
    height: 1.89,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 65,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

/*john.calcBMI();
mark.calcBMI();
console.log(john, mark);*/

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (john.bmi < mark.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}



/****************************
 * CODING CHALLENGE 5
 */

/**
 * Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
 * 
 * This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
 * John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between  $50 and $200, and 10% if the bill is more than $200.
 * 
 * Implement a tip calculator using objects and loops:
 * 1.   Create an object with an array for the bill values
 * 2.   Add a method to calculate the tip
 * 3.   This method should include a loop to iterate over all the paid bills and do the tip calculations
 * 4.   As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
 * 
 * 
 * EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
 * Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
 * 
 * 5.   Implement the same functionality as before, this time using Mark's tipping rules
 * 6.   Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting form 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
 * 7.   Calculate the average tip for each family
 * 8.   Log to the console which family paid the highest tips on average
 */

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        // this.tips = this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                // for 20%
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                // for 15%
                percentage = .15;
            } else {
                // for 10%
                percentage = .1;
            }

            // Add results to the corresponign arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        // this.tips = this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                // for 20%
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                // for 10%
                percentage = .1;
            } else {
                // for 25%
                percentage = .25;
            }

            // Add results to the corresponign arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < this.bills.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// [2, 6, 4] -> 0 / 2 / 8 / 12


// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);
} else if (john.average < mark.average) {
    console.log(mark.fullName + '\'s family pays higher tips with an average of $' + mark.average);
}


/****************************
 * CODING CHALLENGE 7
 * 
 * --- Let's build a fun quiz game in the console! ---
 * 
 * 1. Build a function constructor called Question to describe a question. A question should include:
 * a) question itself
 * b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
 * c) correct answer (I would use a number for this)
 * 
 * 2.   Create a couple of questions using the constructor
 * 
 * 3.   Store them all inside an array
 * 
 * 4.   Select one random question and log it on the console, together with the possible anwers (each question should have a number) (Hint: write a method for the Question objects for this task).
 * 
 * 5.   Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
 * 
 * 6.   Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).
 * 
 * 7.   Suppose this code would be a plugin for other programmers to use in their conde. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
 * 
 * 
 * --- Expert level ---
 * 
 * 8.   After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
 * 
 * 9.   Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes'exit' instead of the answer. In this case, DON'T call the function from task 8.
 * 
 * 10.  Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
 * 
 * 11.  Display the score in the console. Use yet another method for this.
 */