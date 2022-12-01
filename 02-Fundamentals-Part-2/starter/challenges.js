// --------------------- CODING CHALLENGE 01 ---------------------

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsAverageScore = (50 + 50 + 70) / 3;
const koalasAverageScore = (60 + 80 + 90) / 3;
const minAverageScore = 100;

console.log(
  `Dolphins Avg = ${dolphinsAverageScore}`,
  `Koalas Avg = ${koalasAverageScore}`
);

if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= minAverageScore &&
  koalasAverageScore >= minAverageScore
) {
  console.log(`It was a draw!`);
} else if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore >= minAverageScore
) {
  console.log(`Dolphins win!`);
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= minAverageScore
) {
  console.log(`Koalas win!`);
} else {
  console.log(`No winner!`);
}
