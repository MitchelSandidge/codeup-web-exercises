// #Loops, Arrays, & Objects
//
// ##Basic Review

console.log("Hello from js 3rd");
//
// 1. What is an array in Javascript?
//
//     2. What is an object in Javascript?
//
//     3. What is the difference between an array and an object?
//
//     4. What is a property? A method?
//
//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?
//
//
//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//     ```js

//     ```

function filterNumbers(array) {
    return parseFloat(array.sort());
}

// console.log(filterNumbers(["fred", true, 5, 3])); //[3, 5]
//if function takes in an array, ittrate through each object using a loop

function filterNumbers2(inputArray) {
    var bucket = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === "number") {
            bucket.push(inputArray[i])
        }
    }
    return bucket.sort(function (a, b) {
        return a - b;
    });
}

// console.log(filterNumbers2());
// console.log(filterNumbers(["fred", true, 5, 3])); //[3, 5]
// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
//     ```js
//     //Example Input:
//
      var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
          {
              name: "Freddy",
             breed: "Lab",
             age: 4
         },
         {
             name: "Mr. Pig",
             breed: "Mastif",
             age: 10
         }

         ];

// 1. Write a function -> getOlder(dogs)
// 2. since we are taking in an array -> loop through each dogs -> dog.age += 1
// 3. return dogs


// var dogs = [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];

function getOlder(dogs) {
    dogs.forEach(function (dog) {
        dog.age += 1;
    });
    return dogs;
}

// console.log(getOlder(dogs));


// function getOlder() {
//     dogs.forEach (function (dog) {
//          dog.age += 1;
//     })
// }
//       getOlder();

// person.sayHello = function () {
//     console.log(person.firstName + " " + person.lastName + " says hello on this fine day.")
// };


// dogs.getAge = function() {
//     console.log(dogs[0].age + ". it used to be 7")
// };

// dogs.getAge();
//
// console.log(dogs);
//
// getOlder();
//
// dogs.getAge();
//
// console.log(dogs);


// console.log(dogs);
//    ```
//     ```js
//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];
//    ```
//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
//
//     ```js
//             // Example input


            var cars =  [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: true
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: true
                 }
            ];


            // cars.washCars = function () {
            //     cars.forEach(function (car) {
            //         car.isDirty = false;
            //     });
            //     return cars;
            // };

            // cars.washCars(cars);

        function washCars(cars) {
            cars.forEach(function (car) {
                car.isDirty = false;
            });
            return cars
        }

// console.log(washCars(cars));


// cars.washCars();
//
// console.log(cars);
//
// cars.isWashed = function () {
//     cars.forEach(function (car, i) {
//         console.log("Car number: " + (i + 1) + " is Dirty: " + car.isDirty)
//     })
// };
// cars.isWashed();


//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//     ```js
//          //Example Input:
        var admin =  [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             },
             {
                 isAdmin: false,
                 email: 'user3@email.com'
             }
         ];
//     ```
// 1. Write a function called adminList(users)
// 2. var adminCount = 0
// 3. for each user -> user.isAdmin -> adminCount =+ 1
// 4. return adminCount


// Redone
// function adminList(users) {
//     var adminCount = 0;
//
//     users.forEach(function (user) {
//         if(user.isAdmin) {
//             adminCount += 1
//         }
//     });
//     return adminCount;
// }

// .2 redone
// function adminList(users) {
//     var bucket = [];
//
//     users.forEach(function (user) {
//         if(user.isAdmin){
//             bucket.push(user.email);
//         }
//     })
//     return bucket;
// }

// .3 Redone
function adminList(users) {
    var bucket = [];

    users.forEach(function (user) {
        if(user.isAdmin){
            bucket.push(user);
        }
    });
    return bucket;
}
// console.log(adminList(admin));


// function adminList() {
//     admin.forEach(function (user) {
//
//         var finalI = (user.isAdmin).length;
//         if (user.isAdmin) {
//             console.log(user);
//         }
//     })
// }

// adminList();


//
//     ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     ```js
//         //     Example Input:
//
         var breads  = [
             "white",
             "wheat",
             "rhy",
             "white"
         ];

         var fillings = [
             "pb&j",
             "ham",
             "cheese steak",
             "tuna"
         ];
//
//          makeSandwichObjects(breads, fillings) // example call to the function

// Redone
// 1. Write a function makeSandwichObjects(breads,fillings)
// 2. var bucket = [];
// 3. we have to loop -> for(var i = 0; i < breads.length; i++)
// 4. we need to create our sandwich object
// 5. bucket.push(sandwichObject)
// 6. return bucket

function makeSandwichObjects(breads, fillings) {
    var bucket = [];

    for(var i = 0; i < breads.length; i++) {

        var sandwichObject = {
            bread: breads[i],
            filling: fillings[i]
        }

     bucket.push(sandwichObject);
    }
    return bucket;
}

console.log(makeSandwichObjects(breads, fillings));


// MY CODE:
// function makeSancdichObjects() {
//     var bucket = [];
//     // bucket.push(breads.toString());
//     // bucket.push(fillings.toString());
//
//     breads.forEach(function (bread) {
//         bucket.push(bread.toString());
//         });
//     fillings.forEach(function (filling) {
//         bucket.push(filling.toString());
//     });
//     console.log(bucket);
// }
// (makeSancdichObjects());


//     ```
//     ```js
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
//
//     ```


// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"


// 1. function keepYellow(colors)
// 2.

function keepYellow(colors) {
    var bucket = [];
    for (var i = 0; i < colors.length; i++) {
        if (colors[i] === "yellow") {
            bucket.push(colors[i])
        }
    }
    return bucket;
}
console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
