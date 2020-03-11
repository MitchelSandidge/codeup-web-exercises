"use strict";

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    });

}
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//------------------------------

// function wait(num) {
//     const newPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num < 4000) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, num)
//     });
//     newPromise.then(() => console.log("resolve/then || Not bad, you only waited " + num/1000 + " seconds"));
//
//     newPromise.catch(() => console.log("reject/catch || WOW you're patient, you waited " + num/1000 + " seconds"));
// }
//
//
// wait(3000);
// wait(6000);





function getGithubUsernames() {
    return fetch('https://api.github.com/users/MitchelSandidge/events/public', {headers: {'Authorization': 'token '+ gitHubAPI}})
        .then(response => response.json());
}

getGithubUsernames().then((data) => {
    console.log(data);
    console.log("Username of victim: " + data[0].actor.login);
    console.log("Last commit: " + data[0].payload.commits[0].message);
    console.log("Time of last commit: " + data[0].created_at);
    console.log("Victims email: " + data[0].payload.commits[0].author.email);
    console.log('------------------------------');

}).catch(error => console.error(error));










//
// function changeBackground() {
//     return fetch('data/profiles.json')
//         .then(response => response.json());
// }
//
// changeBackground().then((data)=> {
//     console.log(data);
//     changeBackground().then((data) => {
//         if (data.sandy123) {
//             console.log("test");
//             changingBack()
//         }
//     })
// });
//
//
// function changingBack() {
//     $('body').css('background-color', 'red')
// }

//$('body').css('background-color', 'brown');

// $('#name-submit').click()


$('#name-submit').click(function () {
    if ($('#name-input').val() === 'sandy123') {
        $('body').css('background-color', 'brown')
    } else if ($('#name-input').val() === 'bob234') {
        $('body').css('background-color', 'green')
    } else if ($('#name-input').val() === 'sally345') {
        $('body').css('background-color', 'blue')
    }
});



// changeBack();
