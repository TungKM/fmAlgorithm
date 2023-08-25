//https://frontendmasters.com/courses/practical-algorithms/factorial-with-a-loop/
//Based on the recursion below, write out and analyze all the stack and changes to the data

function logNumbersRecursively(start, end) {
  console.log(`recursively looping from ${start} until ${end}`);

  function recurse(i) {
    //i = 1
    console.log("hitting index", i);

    if (i < end) {
      return recurse(i + 1);
      //~~~~~~~
    }
  }

  return recurse(start);
}

console.log(logNumbersRecursively(1, 3));

//   function recurse(i){ //i = 2
//     console.log('hitting index', i)

//     if(i < end){
//       return recurse(i + 1)
//       ~~~~~~~
//     }
//   }

//   function recurse(i){ //i = 3
//     console.log('hitting index', i)
//     ~~~~~~
//     if(i < end){
//       return recurse(i + 1)
//     }
//   }

//hitting index 1
//hitting index 2
//hitting index 3
//return undefined
