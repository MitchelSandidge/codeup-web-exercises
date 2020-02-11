console.log("hello from break_and_continue.js");

for (var i = 1; i <= 50; i++){
    var userNumber = prompt("Enter an odd number between 1 and 50");
    if (userNumber % 2 !== 0 && userNumber < 50) {
        console.log("Your number to skip is: " + userNumber);
        break;
    }
}

for (var n = 1; n <= 50; n++){
    if (n == userNumber) {
        console.log("Skipping this number...");
        continue;
    } else if (n % 2 !== 0) {
        console.log("Here is an odd number: " + n);
    }
}
