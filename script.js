// // Functions are procedures - we 'train' the computer to do them
// // 1. CREATE/DECLARE the function
// // 2. CALL/INVOKE the function  - where we actually use the function

// // In JS - 2 ways to create functions:

// // 1. Function declaration

// // addTwoNums2(2, 3);

// // // function hoisting
// // function addTwoNums(num1, num2) {
// //   return num1 + num2;
// // }

// // // // 2. Function expression

// // // const addTwoNums2 = (num1, num2) => {
// // //   return num1 + num2;
// // // };

// // // concatenation
// // const name = "John";

// // // console.log("hi " + name + "!");

// // // (string) template literals  - the runtime interpolate the JS values that are placed in ${}

// // console.log(`the sum of our numbers is  ${addTwoNums(200, 500)}!`);

// // if (hasDiscount) {
// //   console.log("your ticket is reduced by 5 dollars");
// // } else {
// //   console.log("please pay full price");
// // }

// // const numbers = [1, 2, 3, 4, 5, 6, 7];

// // const evens = numbers.filter((number) => {
// //   return number % 2 === 0;
// // });

// // const odds = numbers.filter((number) => {
// //   return number % 2 === 1;
// // });

// // const numsMultipliedBy10 = numbers.map((number) => {
// //   return number * 10;
// // });

// // console.log(numsMultipliedBy10);
// // console.log(numbers);

// const bookFromServerSomewhere = {
//   title: "HTML Advanced",
//   author: "Lalo Gonzalez",
//   year: 2024,
// };

// // Object destructuring

// const { title, author, year } = bookFromServerSomewhere;

// console.log(title);
// console.log(author);
// console.log(year);

// const names = ["Scout", "Pearl", "Copper", "Sugar"];

// // Array destructing
// const names2 = ["Lee", "Zoe", "Lily"];

// const allMyDogs = [...names2, ...names];
// console.log(allMyDogs);
// console.log(names);
// console.log(names2);

// const myDog = {
//   name: "Scout",
//   breed: "Beagle",
//   weight: 24,
// };

// const dogWithMoreData = {
//   ...myDog,
//   color: "tricolor",
//   favoriteFood: "cheese",
//   weight: 30,
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

async function getTodo(todoNum) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoNum}`
    );
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

getTodo(67);
