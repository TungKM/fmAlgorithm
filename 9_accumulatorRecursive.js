//https://frontendmasters.com/courses/practical-algorithms/accumulators/

//Based on the recursion below, write out and analyze all the stack and changes to the data

// function recurse1(index, resultSoFar){
//     //0, ''

//     resultSoFar += array[index] //'s

//     if(index === array.length - 1){
//       return resultSoFar
//     }
//     else{
//       return recurse(index + 1, resultSoFar + joinString) //1, 'se'
//       ~~~~~~~
//     }
//   }

//   function recurse1(index, resultSoFar){
//     //1, 'se'

//     resultSoFar += array[index] //'secr'

//     if(index === array.length - 1){
//       return resultSoFar
//     }
//     else{
//       return recurse(index + 1, resultSoFar + joinString) //2, 'secre'
//       ~~~~~~~
//     }
//   }

//   function recurse1(index, resultSoFar){
//     //2, 'secre'

//     resultSoFar += array[index] //'secret cod'

//     if(index === array.length - 1){
//       return resultSoFar
//     }
//     else{
//       return recurse(index + 1, resultSoFar + joinString) //3, 'secret code'
//       ~~~~~~~
//     }
//   }

//   function recurse1(index, resultSoFar){
//     //3, 'secret code'

//     resultSoFar += array[index] //'secret code :):)'

//     if(index === array.length - 1){
//       return resultSoFar
//       ~~~~~ //return 'secret code :):)'
//     }
//     else{
//       return recurse(index + 1, resultSoFar + joinString)
//     }
//   }

function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, "");
  //~~~~
}

console.log(joinElements(["s", "cr", "t cod", ":):)"], "e"));
