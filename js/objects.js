(function() {
    "use strict";
    console.log("Hello from objects");
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Mitchel",
        lastName: "Sandidge"
        };
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log(person.firstName + " " + person.lastName + " says hello on this fine day.")
    };

    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180, discount: "0%", finalAmount: 180},
        {name: 'Ryan', amount: 250, discount: "12%", finalAmount: 220},
        {name: 'George', amount: 320, discount: "12%", finalAmount: 281.60.toFixed(2)},
    ];

    shoppers.forEach(function (person, i ) {
        console.log("------------");
        console.log("Shopper #" + (i+1) + " is " + person.name);
        console.log("Amount before discount: $" + person.amount);
        console.log("Discount amount: "+ person.discount);
        console.log("Amount after discount: $" + person.finalAmount);
        console.log("------------");
    });




    // shoppers.calcTotals = function () {
    //     console.log(this.amount + " is before the discount")
    // };

    // console.log(shoppers.calcTotals());

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        } ,
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville"
            }
        } ,
        {
            title: "Julius Caesar",
            author: {
                firstName: "William",
                lastName: "Shakespeare"
            }
        } ,
        {
            title: "A tale of two cities",
            author: {
                firstName: "Charles",
                lastName: "Dickens"
            }
        } ,
        {
            title: "Huckleberry Finn" ,
            author: {
                firstName: "Mark" ,
                lastName: "Twain"
            }
        }
    ];



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // cars.forEach(function(car) {
    //     car.features.forEach(function(feature) {
    //         console.log(feature);
    //     });
    // });


    books.forEach(function (book , i ) {
        console.log("------------");
        console.log("Book Number: "+ (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("------------");
    });



    // console.log("Book #1 is: " + books[0].title + ". The author of the book is: " + books[0].author.firstName + " " + books[0].author.lastName);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName) {
        return [
            {
                title: title ,
                author: {
                    firstName: authorFirstName,
                    lastName: authorLastName,
                }
            }
        ];
    }

    function showBookInfo(newBook) {
        books.push(newBook);
        return books;
    }

    console.log(showBookInfo(createBook("Lord of the Flies", "William" , "Golding")));




})();
