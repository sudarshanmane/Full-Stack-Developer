const recurSiveFun = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * recurSiveFun(number - 1);
};

const input1 = 5;
const input2 = 0;
const input3 = 7;

console.log(`Factorial of ${input1}: ${recurSiveFun(input1)}`);
