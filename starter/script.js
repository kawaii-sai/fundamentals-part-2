// // // // // console.log("Fundementals Part2");

// // // // // console.log("=== FUNCTIONS ===");

// // // // // function logger() {
// // // // //     console.log("This function is working");
// // // // // }

// // // // // logger();
// // // // // logger();
// // // // // logger();

// // // // // function fruitProcessor(apples, oranges) {
// // // // //   console.log(apples, oranges);
// // // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // // //   return juice;
// // // // // }


// // // // // const appleJuice = fruitProcessor(5, 0);
// // // // // console.log(appleJuice);

// // // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // // console.log(appleOrangeJuice);

// // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // // // const calcAge = function (birthYear) {
// // // // //   return 2037 - birthYear;
// // // // // };

// // // // // const age1 = calcAge(1991);
// // // // // console.log(age1);

// // // // // function calcAge2(birthYear, currentYear) {
// // // // //   // Parameters
// // // // //   const age = currentYear - birthYear;
// // // // //   return age;
// // // // // }

// // // // // const myAge = calcAge2(1991, 2037); 
// // // // // const herAge = calcAge(2005, 2037);

// // // // // console.log(`I am ${myAge} years old`);
// // // // // console.log(`She is ${herAge} years old`);

// // // // // function calcAge3(birthYear) {
// // // // //   return 2037 - birthYear;
// // // // // }

// // // // // function yearsUntilRetirement(birthYear, firstName) {
// // // // //   const age = calcAge3(birthYear);
// // // // //   const retirement = 65 - age;

// // // // //    if (retirement > 0) {
// // // // //     return `${firstName} retires in ${retirement} years`;
// // // // //   } else {
// // // // //     return `${firstName} has already retired!`;
// // // // //   }
// // // // // }

// // // // // console.log(yearsUntilRetirement(2004, "Charles"));
// // // // // console.log(yearsUntilRetirement(1950, "Mike"));

// // // // // // Global scope
// // // // // const globalVar = "I am global";

// // // // // function testScope() {
// // // // //   // Function scope
// // // // //   const localVar = "I am local";
// // // // //   console.log(globalVar); // Can access global
// // // // //   console.log(localVar); // Can access local
// // // // // }

// // // // // testScope();
// // // // // // console.log(localVar); // Error! Can't access local from outside
// // // // // console.log(globalVar); // Works fine

// // // // // const userName = "Charles"; // Global

// // // // // function createWelcomeMessage(user) {
// // // // //   const message = `Welcome back, ${user}!`; // Local to function
// // // // //   const timestamp = new Date().toLocaleTimeString(); // Local to function

// // // // //   return `${message} Current time: ${timestamp}`;
// // // // // }

// // // // // console.log(createWelcomeMessage(userName));

// // // // // // 1. Function to calculate average of 3 scores
// // // // // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // // // // // 2. Function to check the winner
// // // // // const checkWinner = function (avgDolphins, avgKoalas) {
// // // // //  if (avgDolphins >= 2 * avgKoalas) {
// // // // //    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
// // // // //  } else if (avgKoalas >= 2 * avgDolphins) {
// // // // //    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
// // // // //  } else {
// // // // //    console.log("No team wins...");
// // // // //  }
// // // // // };
// // // // // // Test Data 1
// // // // // let avgDolphins = calcAverage(44, 23, 71);
// // // // // let avgKoalas = calcAverage(65, 54, 49);
// // // // // console.log("Test Data 1:");
// // // // // checkWinner(avgDolphins, avgKoalas);
// // // // // // Test Data 2
// // // // // avgDolphins = calcAverage(85, 54, 41);
// // // // // avgKoalas = calcAverage(23, 34, 27);
// // // // // console.log("Test Data 2:");
// // // // // checkWinner(avgDolphins, avgKoalas);

// // // // const student1Grade = 85;
// // // // const student2Grade = 92;
// // // // const student3Grade = 78;

// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // console.log(friends);

// // // // const mixed = ["Jonas", 27, true, friends];
// // // // console.log(mixed);

// // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // console.log(years);

// // // // console.log(friends[0]); 
// // // // console.log(friends[1]); 
// // // // console.log(friends[2]);

// // // // const friends2 = ["Michael", "Steven", "Peter"];

// // // // // Push - add to end
// // // // const newLength = friends.push("Jay");
// // // // console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// // // // console.log(newLength); // 4 (push returns new length)

// // // // // Unshift - add to beginning
// // // // friends.unshift("John");
// // // // console.log(friends);

// // // // const popped = friends.pop();
// // // // console.log(popped); // 'Jay' (returns what was removed)
// // // // console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// // // // // Shift - remove from beginning
// // // // const shifted = friends.shift();
// // // // console.log(shifted); // 'John' (returns what was removed)
// // // // console.log(friends);

// // // // console.log(friends.indexOf("Steven")); // 1
// // // // console.log(friends.indexOf("Bob")); // -1 (not found)

// // // // // Includes - check if element exists
// // // // console.log(friends.includes("Steven")); // true
// // // // console.log(friends.includes("Bob"));

// // // const friends = ["Michael", "Steven", "Peter"];
 
// // // for (let i = 0; i < friends.length; i++) {
// // //   console.log(friends[i]);
// // // }
 
// // // friends.forEach(function(friend, index) {
// // //   console.log(`${index}: ${friend}`);
// // // });
 
// // // const grades = [85, 92, 78, 96, 88, 74];
// // // let total = 0;
 
// // // for (let i = 0; i < grades.length; i++) {
// // //   total += grades[i];
// // // }

// // // const average = total / grades.length;
// // // console.log(`Average grade: ${average.toFixed(2)}`);
 
// // // let passCount =0;
// // // grades.forEach(grade => {
// // //     if (grade >= 70) passCount++;
// // // });
 
// // // console.log(`${passCount} out of ${grades.length} students passed.`);

// // // const grades2 = [78, 85, 92, 67, 88, 95, 73, 82];
// // // function calculateAverage(grades) {
// // //  return grades.reduce((a, g) => a + g, 0) / grades.length;
// // // }
// // // function findHighestGrade(grades) {
// // //  return Math.max(...grades);
// // // }
// // // function findLowestGrade(grades) {
// // //  return Math.min(...grades);
// // // }
// // // function countPassing(grades, passingGrade) {
// // //  return grades.filter(g => g >= passingGrade).length;
// // // }
// // // const average2 = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);
// // // console.log(`Average: ${average}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // const jonasArray = [
// //   "Jonas",
// //   "Schmedtmann",
// //   2037 - 1991,
// //   "teacher",
// //   ["Michael", "Peter", "Steven"],
// // ];

// // console.log(jonasArray[0]); // What is this? firstName?
// // console.log(jonasArray[1]); // lastName?
// // console.log(jonasArray[2]); // age?

// // console.log("=== OBJECTS ===");

// // // Object literal syntax - curly braces create objects
// // const jonas = {
// //   firstName: "Jonas", // property: string value
// //   lastName: "Schmedtmann", // property: string value
// //   age: 2037 - 1991, // property: calculated value
// //   job: "teacher", // property: string value
// //   friends: ["Michael", "Peter", "Steven"], // property: array value
// // };
// // console.log(jonas);

// // const jonasArray2 = [
// //   "Jonas",
// //   "Schmedtmann",
// //   46,
// //   "teacher",
// //   ["Michael", "Peter", "Steven"],
// // ];

// // const jonasObject = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   age: 46,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// // };

// // console.log(jonas.firstName); 
// // console.log(jonas.lastName); 
// // console.log(jonas.age); 
// // console.log(jonas.job); 
// // console.log(jonas.friends);

// // console.log(jonas["firstName"]); 
// // console.log(jonas["lastName"]);
// // console.log(jonas["age"]);

// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]);
// // console.log(jonas["last" + nameKey]);

// // jonas.job = "programmer";
// // jonas["age"] = 35;
// // console.log(jonas);

// // jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtman";
// // jonas.hasDriversLicense = true;
// // console.log(jonas);

// // // Create a 'book' object
// // const book = {
// //   title: "The Great Gatsby",
// //   author: "F. Scott Fitzgerald",
// //   pages: 218,
// //   isRead: false
// // };

// // // Create a 'playlist' object
// // const playlist = {
// //   name: "Chill Vibes",
// //   creator: "John Doe",
// //   songs: ["Song 1", "Song 2", "Song 3"],
// //   genre: "Chillout"
// // };

// // // Access and log different properties using dot and bracket notation
// // console.log(book.author);
// // console.log(playlist["name"]);

// // // Add a new property to each object
// // book.year = 1925;
// // playlist.duration = "1 hour";

// // // Modify an existing property in each object
// // book.isRead = true;
// // playlist.creator = "Jane Smith";

// // // Logging the updated objects
// // console.log(book);
// // console.log(playlist);

// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];

// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], 
// //   address: {
    
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]); 
// // console.log(student.address.city); 

// // const jonas2 = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

  
// //   calcAge: function (birthYear) {
// //     return 2037 - birthYear;
// //   },
// // };


// // console.log(jonas2.calcAge(1991));
// // console.log(jonas2.calcAge(jonas.birthYear)); 

// // const jonasImproved = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     console.log(this); // Shows the jonas object
// //     return 2037 - this.birthYear; // Access own birthYear!
// //   },
// // };

// // console.log(jonasImproved.calcAge());

// // const jonasAdvanced = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     this.age = 2037 - this.birthYear; 
// //     return this.age;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// //       this.job
// //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// //   },
// // };

// // console.log(jonasAdvanced.calcAge());
// // console.log(jonasAdvanced.age);
// // console.log(jonasAdvanced.getSummary());

// // const calculator = {
// //   num1: 10,
// //   num2: 5,
// //   operator: "+",

// //   add: function () {
// //     return this.num1 + this.num2;
// //   },

// //   subtract: function () {
// //     return this.num1 - this.num2;
// //   },

// //   multiply: function () {
// //     return this.num1 * this.num2;
// //   },

// //   divide: function () {
// //     return this.num1 / this.num2;
// //   },

// //   calculate: function () {
// //     if (this.operator === '+') return this.add();
// //     else if (this.operator === '-') return this.subtract();
// //     else if (this.operator === '*') return this.multiply();
// //     else if (this.operator === '/') return this.divide();
// //     else return "Invalid operator";
// //   },

// //   getResult: function () {
// //     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
// //   },
// // };

// // // Test the calculator
// // console.log(calculator.calculate());
// // console.log(calculator.getResult());

// // const user = {
// //   firstName: "Zoe",
// //   lastName: "Laput",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   calcAge: function() {
// //     const currentYear = new Date().getFullYear();
// //     this.age = currentYear - this.birthYear;
// //   },

// //   addFriend: function(name, status = "active") {
// //     this.friends.push({ name, status });
// //     return this.friends.length;
// //   },

// //   getActiveFriends: function() {
// //     return this.friends.filter(friend => friend.status === "active").length;
// //   },

// //   toggleStatus: function() {
// //     this.isActive = !this.isActive;
// //     return this.isActive ? "active" : "inactive";
// //   },

// //   getSummary: function() {
// //     this.calcAge();
// //     const friendCount = this.friends.length;
// //     const activeFriendCount = this.getActiveFriends();
// //     const status = this.isActive ? "active" : "inactive";

// //     return `
// //       Name: ${this.firstName} ${this.lastName}
// //       Age: ${this.age}
// //       Location: ${this.location}
// //       Status: ${status}
// //       Friend Count: ${friendCount} (Active: ${activeFriendCount})
// //       Interests: ${this.interests.join(", ")}
// //     `;
// //   },
// // };

// // // Test the user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// //query selector - uses css selector

// const message = document.querySelector(".message");
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

const message = document.querySelector(".message");

console.log(message.textContent);
message.textContent = "Hello from JavaScript";
console.log(message.textContent); 

message.innerHTML = "<strong>Bold text from JS!</strong>";

console.log(message.innerText); 

const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text";

const heading = document.querySelector("h1");
heading.style.color = "blue";
heading.style.backgroundColor = "gold";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = '20px';
button.style.borderRadius = '10px';

//Event Listeners - user interactions

button.addEventListener("click", function(){
    console.log("Button was clicked!");
    message.textContent = "You clicked the button";
    message.style.color = "red";
});

let clickCount = 0;

button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

const input2 = document.querySelector(".guess");

input.addEventListener("input", function () {
  const userText = input.value;
  message.textContent = `You typed: ${userText}`;
  message.style.fontSize = `${userText.length + 10}px`;
});

// Keyboard events - responding to specific keys
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    message.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = ""; // Clear input
  }
});

// Global keyboard events
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Reset everything
    message.textContent = "Reset with Escape key!";
    input.value = "";
    clickCount = 0;
    button.textContent = "Click Me!";
  }
});



