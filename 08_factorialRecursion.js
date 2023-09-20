//https://frontendmasters.com/courses/practical-algorithms/factorial-with-a-loop/
//Compute a recursion factorial based on the example below

function computeFactorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    console.log(`${result} * ${i} = ${result * i}`);
    result *= i;
  }

  return result;
}

console.log(computeFactorial(5));

function computeFactorial(num) {
  if (num === 1) {
    console.log("hitting base case");
    return 1;
  }

  console.log(`return ${num} * computeFactorial(${num - 1})`);
  return num * computeFactorial(num - 1);
}

console.log(computeFactorial(5));
