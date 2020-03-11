"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filterYears = users.filter(function (user) {
    return user.yearsOfExperience > 6;
});
console.log(filterYears);



let filterExp = users.filter(user => user.yearsOfExperience >6);
console.log(filterExp);



let emailMap = users.map(user => user.email);
console.log(emailMap);



let totalExp = users.reduce((total, user )=> total + user.yearsOfExperience, 0);
console.log(totalExp);



let averageExp = totalExp / users.length;
console.log(averageExp);



let emailLength = users.reduce((longest, user) => {
    if (user.email.length > longest.length ){
        longest = user.email
    }
    return longest;
},"");

console.log(emailLength);



let names = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ", " + user.name, '');
console.log("Your insructors:" + names);


let userNames = users.reduce((accumulation, currentName) => {
    return accumulation + " " + currentName.name
}, "Your instructors are:");

console.log(userNames);


let uniqueLang = users.reduce((unique, current)=> {
    if (current.languages !== unique) {
        return unique + current.languages
    }
}, "");

console.log(uniqueLang);