const country = "Wales";
const continent = "Europe";
let population = 3136183;
const thirtyThreeMillion = 3300000;

const isIsland = false;
const language = "English";

console.log(
  `Hello, I am from ${country}, which is in ${continent}, it has a population of ${population}.`
);

if (population >= thirtyThreeMillion) {
  console.log(`The population of ${country} is above average!`);
} else {
  const amountBelowAverage = thirtyThreeMillion - population;
  console.log(
    `${country}'s population is ${amountBelowAverage} below the average.`
  );
}
