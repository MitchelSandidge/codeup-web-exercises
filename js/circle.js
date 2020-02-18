(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            console.log(Math.PI * (Math.pow(this.radius, 2)));


            return; // TODO: return the proper value
            // console.log(area);

        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding === true) {
                console.log("Rounded to the nearest whole number is: " + Math.round(Math.PI * (Math.pow(this.radius, 2))))
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.PI * (Math.pow(this.radius, 2))
        );
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.


        // log info about the circle
        console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
