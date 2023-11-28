function FizzBuzz(number) {
  let res;
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      res = "FizzBuzz";
    } else if (index % 3 == 0) {
      res = "Fizz";
    } else if (index % 5 == 0) {
      res = "Buzz";
    } else {
      res = index;
    }
    console.log(res);
  }
}

FizzBuzz(100);
