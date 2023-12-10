function curry(fn) {
  const arity = fn.length;

  function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  }

  return curried;
}

function addTwoNumbers(a, b) {
  return a + b;
}

const curriedAdd = curry(addTwoNumbers);

const result1 = curriedAdd(2, 3);
const result2 = curriedAdd(5, 7);
const result3 = curriedAdd(1, 2, 3);

console.log(`Result 1: ${result1}`);
console.log(`Result 2: ${result2}`);
console.log(`Result 3: ${result3}`);
