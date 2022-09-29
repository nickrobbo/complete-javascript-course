console.log("Hello World from script.js!");

const birthYear = 1989;
//const birthYear = 2016;
const date = new Date();
const currentDate = date.getFullYear();

let currentAge = currentDate - birthYear;
if (currentAge >= 18) {
  console.log(
    `You are ${currentAge} years old, you can grab a beer at the bar!`
  );
} else {
  const yearsLeft = 18 - currentAge;
  console.log(`Come back in ${yearsLeft} years for a beer!`);
}
