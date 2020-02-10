"use strict";
console.log("hello world")
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function getNumber() {
    var enterNumberQues = confirm("Would you like to enter a number?");

    if (enterNumberQues) {
        var num1 = prompt("Enter a number:")
    }

    if(isNaN(num1)){
        alert("The value you entered is not a number.");
        getNumber();
    } else {
        alert("Good Number")
    }

    if (num1 % 2 === 0) {
        alert("The number is even")
    } else {
        alert("The number is odd.")
    }

    var numberPlusOneHun = parseFloat(num1);

    alert("The number plus 100 is: " + (numberPlusOneHun + 100));

    if (num1 > 0) {
        alert("The number is positive.")
    } else {
        alert("The number is negative.")
    }
}
// getNumber();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(col1) {
    if (col1 === "blue") {
        return "Blue is the color of the sky";
    }
    else if (col1 === "red") {
        return "There is red in the American Flag";
    }
    else if (col1 === "green"){
        return "Grass is green";
    }
    else if (col1 === "orange") {
        return "Oranges are orange"
    }
    else if (col1 === "yellow") {
        return "Flowers are yellow"
    }
    else if (col1 === "indigo") {
        return "Indigo is a cool color"
    }
    else {
        return ("I know nothing about " + col1)
    }
}

// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function switchColors(col1) {


    switch (col1) {
        case "blue":
            console.log("Blue is the color of the sky!");
            break;
        case "red":
            console.log("There is red in the american flag");
            break;
        case "green":
            console.log("Grass is green.");
            break;
        case "orange":
            console.log("Oranges are Orange");
            break;
        case "yellow":
            console.log("flowers are yellow.");
            break;
        case "indigo":
            console.log("I love the color indigo");
            break;
        default:
            console.log(("I know nothing about " + col1));
            break;
    }
}

// switchColors(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Enter a color: ");
//
// function analyzeColor() {
//     if (userColor === "blue") {
//         return "Blue is the color of the sky";
//     }
//     else if (userColor === "red") {
//         return "There is red in the American Flag";
//     }
//     else if (userColor === "green"){
//         return "Grass is green";
//     }
//     else if (userColor === "orange") {
//         return "Oranges are orange"
//     }
//     else if (userColor === "yellow") {
//         return "Flowers are yellow"
//     }
//     else if (userColor === "indigo") {
//         return "Indigo is a cool color"
//     }
//     else {
//         return ("I know nothing about " + userColor)
//     }
// }
//
// alert(analyzeColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


var walmartNumbers = ['1', '2', '3','4','5'];
var randomNumber = walmartNumbers[Math.floor(Math.random() * walmartNumbers.length)];


function calculateTotal(luckyNumber) {
    var storeTotal = prompt("What was your total?");
    var luckyNumOne = storeTotal * .9;
    var luckyNumTwo = storeTotal * .75;
    var luckyNumThree = storeTotal - (storeTotal * .35);
    var luckyNumFour = storeTotal * .5;
    var luckyNumFive = storeTotal - storeTotal;

    if (luckyNumber === 0) {
        return "Your number was 0, you do not get a discount."
    } else if (luckyNumber === 1) {
        alert ("Congrats!  You got a lucky number of 1.  Your discount is 10%.  Your new total is: $" + luckyNumOne);
    } else if (luckyNumber === 2) {
        alert ("Congrats!  You got a lucky number of 2.  Your discount is 25%.  Your new total is: $" + luckyNumTwo);
    } else if (luckyNumber === 3) {
        alert ("Congrats!  You got a lucky number of 3.  Your discount is 35%.  Your new total is: $" + luckyNumThree);
    } else if (luckyNumber === 4) {
        alert ("Congrats!  You got a lucky number of 4.  Your discount is 50%.  Your new total is: $" + luckyNumFour);
    } else if (luckyNumber === 5) {
        alert ("Congrats!  You got a lucky number of 5.  Everything is free!  Your new total is: $" + luckyNumFive);
    }
}
// calculateTotal(3);






/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6



var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotalPartTwo() {
    var storeTotal = prompt("What was your total?");
    var luckyNumOne = storeTotal * .9;
    var luckyNumTwo = storeTotal * .75;
    var luckyNumThree = storeTotal - (storeTotal * .35);
    var luckyNumFour = storeTotal * .5;
    var luckyNumFive = storeTotal - storeTotal;


    if (luckyNumber === 0) {
        return "Your number was 0, you do not get a discount."
    } else if (luckyNumber === 1) {
        alert ("Congrats!  You got a lucky number of 1.  Your discount is 10%.  Your new total is: $" + luckyNumOne);
    } else if (luckyNumber === 2) {
        alert ("Congrats!  You got a lucky number of 2.  Your discount is 25%.  Your new total is: $" + luckyNumTwo);
    } else if (luckyNumber === 3) {
        alert ("Congrats!  You got a lucky number of 3.  Your discount is 35%.  Your new total is: $" + luckyNumThree);
    } else if (luckyNumber === 4) {
        alert ("Congrats!  You got a lucky number of 4.  Your discount is 50%.  Your new total is: $" + luckyNumFour);
    } else if (luckyNumber === 5) {
        alert ("Congrats!  You got a lucky number of 5.  Everything is free!  Your new total is: $" + luckyNumFive);
    }
}

// calculateTotalPartTwo();


