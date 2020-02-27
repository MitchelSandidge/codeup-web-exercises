"use strict";


// $(document).ready(function() {

// $('#big-div').css('background-color', 'grey');

// $('.codeup').css('border', '1px solid black');

// $('li').css('font-size', '30px');
//
// $('h1, p, li').css('background-color', 'lightgray');
//
//
// alert($('#big-div').html());
//
// });




// Mouse Events Exercise

$ ('h1').click(function () {
    $(this).css('background-color', 'green');
});

$('p').dblclick(function () {
    $(this).css('font-size', '30px');
});

$('li').hover(
    function () {
    $(this).css('background-color', 'red');
} ,
    function () {
        $(this).css('background-color', 'white');
    }
);


$("#submit").click(function (e) {
    e.preventDefault();
        var val = $('input').val().toLowerCase();
        if (val === 'dog') {
            $('#animal-pic').html('<img class="push" src="img/cute-dog-transparent-background.png" alt="dawg">');
        } else {
            $('#animal-pic').html('<img class="push" src="img/error.png" alt="error-msg" style="height: 50px">');
            $('body').css('background-color', '#8B0000');
        }
});


