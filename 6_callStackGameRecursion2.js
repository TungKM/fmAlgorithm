//https://frontendmasters.com/courses/practical-algorithms/looping-with-recursion/

// n = 3 //3 //2 //1

// const loopNTimes1 = (n) => {
//     console.log('n === ', n) //n === 3

//     if(n <= 1){
//       return 'complete'
//     }

//     return loopNTimes(n-1) //return complete
//     ~~~~~~~~~~~~
// }

// const loopNTimes2 = (n) => {
//     console.log('n === ', n) // n === 2

//     if(n <= 1){
//       return 'complete'
//     }

//     return loopNTimes(n-1) //return complete
//     ~~~~~~~~~~~~~~
// }

// const loopNTimes3 = (n) => {
//     console.log('n === ', n) // n === 1

//     if(n <= 1){
//       return 'complete' //return complete
//       ~~~~~~~
//     }

//     return loopNTimes(n-1)
// }

// // n === 3
// // n === 2
// // n === 1
// // complete

const loopNTimes = (n) => {
  console.log("n === ", n);

  if (n <= 1) {
    return "complete";
  }

  return loopNTimes(n - 1);
};

console.log(loopNTimes(3));
