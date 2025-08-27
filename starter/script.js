// // // console.log("Fundementals Part2");

// // // console.log("=== FUNCTIONS ===");

// // // function logger() {
// // //     console.log("This function is working");
// // // }

// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor(apples, oranges) {
// // //   console.log(apples, oranges);
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }


// // // const appleJuice = fruitProcessor(5, 0);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // console.log(appleOrangeJuice);

// // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // };

// // // const age1 = calcAge(1991);
// // // console.log(age1);

// // // function calcAge2(birthYear, currentYear) {
// // //   // Parameters
// // //   const age = currentYear - birthYear;
// // //   return age;
// // // }

// // // const myAge = calcAge2(1991, 2037); 
// // // const herAge = calcAge(2005, 2037);

// // // console.log(`I am ${myAge} years old`);
// // // console.log(`She is ${herAge} years old`);

// // // function calcAge3(birthYear) {
// // //   return 2037 - birthYear;
// // // }

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //   const age = calcAge3(birthYear);
// // //   const retirement = 65 - age;

// // //    if (retirement > 0) {
// // //     return `${firstName} retires in ${retirement} years`;
// // //   } else {
// // //     return `${firstName} has already retired!`;
// // //   }
// // // }

// // // console.log(yearsUntilRetirement(2004, "Charles"));
// // // console.log(yearsUntilRetirement(1950, "Mike"));

// // // // Global scope
// // // const globalVar = "I am global";

// // // function testScope() {
// // //   // Function scope
// // //   const localVar = "I am local";
// // //   console.log(globalVar); // Can access global
// // //   console.log(localVar); // Can access local
// // // }

// // // testScope();
// // // // console.log(localVar); // Error! Can't access local from outside
// // // console.log(globalVar); // Works fine

// // // const userName = "Charles"; // Global

// // // function createWelcomeMessage(user) {
// // //   const message = `Welcome back, ${user}!`; // Local to function
// // //   const timestamp = new Date().toLocaleTimeString(); // Local to function

// // //   return `${message} Current time: ${timestamp}`;
// // // }

// // // console.log(createWelcomeMessage(userName));

// // // // 1. Function to calculate average of 3 scores
// // // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // // // 2. Function to check the winner
// // // const checkWinner = function (avgDolphins, avgKoalas) {
// // //  if (avgDolphins >= 2 * avgKoalas) {
// // //    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
// // //  } else if (avgKoalas >= 2 * avgDolphins) {
// // //    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
// // //  } else {
// // //    console.log("No team wins...");
// // //  }
// // // };
// // // // Test Data 1
// // // let avgDolphins = calcAverage(44, 23, 71);
// // // let avgKoalas = calcAverage(65, 54, 49);
// // // console.log("Test Data 1:");
// // // checkWinner(avgDolphins, avgKoalas);
// // // // Test Data 2
// // // avgDolphins = calcAverage(85, 54, 41);
// // // avgKoalas = calcAverage(23, 34, 27);
// // // console.log("Test Data 2:");
// // // checkWinner(avgDolphins, avgKoalas);

// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;

// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // console.log(friends[0]); 
// // console.log(friends[1]); 
// // console.log(friends[2]);

// // const friends2 = ["Michael", "Steven", "Peter"];

// // // Push - add to end
// // const newLength = friends.push("Jay");
// // console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// // console.log(newLength); // 4 (push returns new length)

// // // Unshift - add to beginning
// // friends.unshift("John");
// // console.log(friends);

// // const popped = friends.pop();
// // console.log(popped); // 'Jay' (returns what was removed)
// // console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// // // Shift - remove from beginning
// // const shifted = friends.shift();
// // console.log(shifted); // 'John' (returns what was removed)
// // console.log(friends);

// // console.log(friends.indexOf("Steven")); // 1
// // console.log(friends.indexOf("Bob")); // -1 (not found)

// // // Includes - check if element exists
// // console.log(friends.includes("Steven")); // true
// // console.log(friends.includes("Bob"));

// const friends = ["Michael", "Steven", "Peter"];
 
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
 
// friends.forEach(function(friend, index) {
//   console.log(`${index}: ${friend}`);
// });
 
// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;
 
// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);
 
// let passCount =0;
// grades.forEach(grade => {
//     if (grade >= 70) passCount++;
// });
 
// console.log(`${passCount} out of ${grades.length} students passed.`);

// const grades2 = [78, 85, 92, 67, 88, 95, 73, 82];
// function calculateAverage(grades) {
//  return grades.reduce((a, g) => a + g, 0) / grades.length;
// }
// function findHighestGrade(grades) {
//  return Math.max(...grades);
// }
// function findLowestGrade(grades) {
//  return Math.min(...grades);
// }
// function countPassing(grades, passingGrade) {
//  return grades.filter(g => g >= passingGrade).length;
// }
// const average2 = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);
// console.log(`Average: ${average}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);