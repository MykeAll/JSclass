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