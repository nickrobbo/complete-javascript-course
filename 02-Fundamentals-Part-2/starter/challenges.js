// --------------------- CODING CHALLENGE 01 ---------------------

// Test data:
//  - Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//  - Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAvergage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`No winner this time`);
  }
}

const dolphinsAverageScore = calcAvergage(44, 23, 71);
console.log(`Dolphins average score: ${dolphinsAverageScore}`);
const koalasAverageScore = calcAvergage(65, 54, 49);
console.log(`Koalas average score: ${koalasAverageScore}`);

checkWinner(dolphinsAverageScore, koalasAverageScore);
