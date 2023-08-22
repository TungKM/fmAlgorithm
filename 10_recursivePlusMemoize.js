//Task 1: Write your own recrusive factorial method

//function will take in an integer as argument
function factorial(num) {
  //base case
  if (num === 1) {
    return 1;
  }
  //recursive case
  // console.log(`${num} * ${num -1}`)
  return num * factorial(num - 1);
}

console.log(factorial(4), "24");
console.log(factorial(5), "120");

//Task 2: Use memo function from the previous exercise to memoize your factorial method

const memoize = (callback) => {
  let cache = {};

  return (...args) => {
    let num = args[0];

    if (num in cache) {
      console.log("Fetching from cache", num);
      return cache[num];
    } else {
      console.log("calculate");
      let result = callback(num);
      cache[num] = result;
      return result;
    }
  };
};

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(3));
console.log(memoizedFactorial(3));
