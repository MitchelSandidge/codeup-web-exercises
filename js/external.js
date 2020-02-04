'use strict'

console.log("Hello from External JavaScript");


//alert("WElOme tO My weBSiTe");

//var favColor = prompt("What is your favorite color?");

//alert("Awesome! " + favColor + " is my favorite color too!!");



var lengthLM = prompt("How many days do you want to rent The Little Mermaid?");

var lengthBB = prompt("How many days do you want to rent Brother Bear?");

var lengthHerc = prompt("How many days do you want to Hercules?");

var totalPrice = lengthLM * 3 + lengthHerc * 3 + lengthBB * 3;

alert("Your total for today will be $" + totalPrice);