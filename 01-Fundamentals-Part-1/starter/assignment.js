// LECTURE: Values and Variables
// LECTURE: let, const and var
// const country = "Wales";
// const continent = "Europe";
// let population = 3136183;
// const thirtyThreeMillion = 3300000;

//////////////////////////////////////////////////////////////////////////////////////////

// const isIsland = false;
// const language = "English";

// console.log(
//   `Hello, I am from ${country}, which is in ${continent}, it has a population of ${population}.`
// );

// LECTURE: Taking Decisions: if / else Statements
// if (population >= thirtyThreeMillion) {
//   console.log(`The population of ${country} is above average!`);
// } else {
//   const amountBelowAverage = thirtyThreeMillion - population;
//   console.log(
//     `${country}'s population is ${amountBelowAverage} below the average.`
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// console.log(numNeighbours, typeof numNeighbours);

// if (numNeighbours < 1 || isNaN(numNeighbours)) {
//   console.log(`Invalid input!!!`);
// }

// if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border!`);
// }

//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Logical Operators
// const country = "Wales";
// let population = 3136183;
// const isIsland = false;
// const language = "English";

// if (language === "English" && population < 5000000 && !isIsland) {
//   console.log(`${country} is a good match for you!`);
// }

//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Switch Statement
// const language = prompt("What is your language?");

// switch (language) {
//   case `Welsh`:
//     console.log(`Not a popular language`);
//     break;
//   case `English`:
//     console.log(`Very popular language`);
//     break;
//   default:
//     console.log(`I'm not sure about that one!`);
// }

//////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Conditional (Ternary) Operator

// result = what you want to evaluate ? if it is true : otherwise;
// const population = 33000001;
// const populationAverage = 33000000;

// aboverOrBelow = population >= populationAverage ? `above` : "below";

// console.log(`The population is ${aboverOrBelow} average!`);

//////////////////////////////////////////////////////////////////////////////////////////
