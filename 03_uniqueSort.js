//transform this simple sorting algorithm into unique sort
//It should not return any duplcate values in the sorted array

//Prep -> parameters, results, example, pseudo code

// parameter: array(numbers, no unique elements, no empty, not sorted, whole numbers,
// result: array(sorted, no empty, arrayresult.length <= array receive.length)

//input: [1, 5, 2, 1] => [1, 2, 5]
//input: [4, 2, 2, 3, 2, 2, 2] => [2, 3, 4]

// function uniqueSort2(arr){
//     const breadcrumbs = {}
//     let uniqueArr = []

//     for(let num of arr){
//         if(!breadcrumbs[num]){
//             breadcrumbs[num] = true
//             uniqueArr.push(num)
//         }
//     }

//     return uniqueArr.sort((a,b) => a - b)
// }

function uniqueSort(arr) {
  //remove duplicates
  const breadcrumbs = {};

  for (let num of arr) {
    if (!breadcrumbs[num]) breadcrumbs[num] = true;
  }

  //sort the array through ascending order
  //return result array
  return Object.keys(breadcrumbs)
    .sort((a, b) => a - b)
    .map((e) => parseInt(e));
}

console.log(uniqueSort2([1, 5, 2, 1]), "[1, 2, 5]");
console.log(uniqueSort2([4, 2, 2, 3, 2, 2, 2]), "[2, 3, 4]");
