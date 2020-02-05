'use strict'

console.log("Hello from External JavaScript");




alert("WElOme tO My weBSiTe");

var favColor = prompt("What is your favorite color?");

alert("Awesome! " + favColor + " is my favorite color too!!");





var lengthLM = prompt("How many days do you want to rent The Little Mermaid?");

var lengthBB = prompt("How many days do you want to rent Brother Bear?");

var lengthHerc = prompt("How many days do you want to Hercules?");

var totalPrice = lengthLM * 3 + lengthHerc * 3 + lengthBB * 3;

alert("Your total for today will be $" + totalPrice + ".");





var hoursGoog = prompt("How many hours did you work for Google this week?");

var hoursAmazon = prompt("How many hours did you work for Amazon this week?");

var hoursFacebook = prompt("How many hours did you work for Facebook this week?");

var paychekGoog = hoursGoog * 400;

var paycheckAmazon = hoursAmazon * 380;

var paycheckFacebook = hoursFacebook * 350;

var weeklyPaycheck = paychekGoog + paycheckAmazon + paycheckFacebook;

alert("This week you made $" + paychekGoog + " with Google, $" + paycheckAmazon + " with Amazon, and $" + paycheckFacebook + " with Facebook for a weekly total of $" + weeklyPaycheck + ".")





var peopleInClass = prompt("There is a class limit of 26 people.  How many people are already enrolled?");

if (peopleInClass < 26) {
    alert("Congratulations!  There is still room left for you!");
}   else {
    alert("We're sorry, but there are no more spots left.");
}

var doesConflict = prompt("Does this class conflict with your schedule?");

if (doesConflict === "No", doesConflict === "no"){
    alert("Awesome! We'd love to have you join!");
} else {
    alert("Awe, well if you find time, we'd love to see you join.");
}




var premiumMember = prompt("Are you a premium member?");

if (premiumMember === "Yes", premiumMember === "yes"){
    alert("We have a special offer for you!");
}   else {
    alert("If you buy two items then you will get our special offer!");
}