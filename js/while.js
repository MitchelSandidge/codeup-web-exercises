console.log("hello from while.js");

// for (var i = 2; i < 70000; i *= 2 ) {
//     console.log(i);
// }


var i = 2;

while (i < 70000) {
    console.log(i);
    i *= 2;
}


//Ice Cream Problem

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Today you have to sell: " + allCones + " ice cream cones");
var i = allCones;

while (i > 0) {
    var r =Math.floor(Math.random() * 5) + 1;
    console.log(r + " cones sold...");
    i -= r;
    console.log(i + " cones left");
    if (i < 0) {
        console.log("cannot sell you that")
    } else if (i === 0) {
        console.log("Out of cones!");
    }
}

