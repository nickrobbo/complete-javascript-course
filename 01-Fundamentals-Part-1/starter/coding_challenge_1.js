// --------------------- CODING CHALLENGE 01 ---------------------

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

function getBMI(mass, height) {
  return mass / height ** 2;
}

const massMark = 95;
const heightMark = 1.88;
const markBMI = getBMI(massMark, heightMark);
console.log(`Mark BMI -> ${markBMI}`);

const massJohn = 85;
const heightJohn = 1.76;
const johnBMI = getBMI(massJohn, heightJohn);
console.log(`John BMI -> ${johnBMI}`);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
