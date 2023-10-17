//https://frontendmasters.com/courses/practical-algorithms/bubble-sort-solution/

//basic implementation
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSortBasic(arr) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (let i = 0; i < arr.length; i++) {
    countOuter++;
    for (let j = 0; j < arr.length; j++) {
      countInner++;
      if (arr[j - 1] > arr[j]) {
        countSwap++;
        swap(arr, j - 1, j);
        console.log(arr);
      }
    }
  }

  console.log(
    `countOuter: ${countOuter},  countInner:${countInner},  countSwap: ${countSwap}`
  );
  return arr;
}

console.log(bubbleSortBasic([5, 4, 3, 2, 1]), "[1,2,3,4,5]");
console.log(bubbleSortBasic([6, 8, 3, 5, 1]), "[1,3,5,6,8]");

//optimized
function bubbleSortOptimized(arr) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;

  do {
    countOuter++;
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      countInner++;
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        countSwap++;
        swap(arr, i, i + 1);
        swapped = true;
        console.log(arr);
      }
    }
  } while (swapped);

  console.log(
    `countOuter: ${countOuter},  countInner:${countInner},  countSwap: ${countSwap}`
  );
  return arr;
}

console.log(
  bubbleSortOptimized([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]),
  "[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]"
);
console.log(
  bubbleSortOptimized([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(
  bubbleSortOptimized([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
  "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"
);

//parameter: arr, all numbers, both pos & neg values, no funny buisness, at least 1 value

//return: sorted ascending array, no funny business

//1st example: [5,4,3,2,1]. output: [1,2,3,4,5]
//2nd example: [6,8,3,5,1]. output: [1,3,5,6,8]

//bubble sort, take an array parameter
function bubbleSort(arr) {
  //nested loop
  for (let i = arr.length - 1; i > 0; i--) {
    let swap = 0;
    let temp;

    for (let j = 0; j < i; j++) {
      //compare the value adjacent to it, if its is bigger, the value would swap
      if (arr[j] > arr[i]) {
        swap = 1;

        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }

      //if swap times < 1, return sorted arr
    }
    if (swap === 0) return arr;
  }
  //return sorted arr
  return arr;
}

//O(n^2), quadratic time complexity

console.log(bubbleSort([5, 4, 3, 2, 1]), "[1,2,3,4,5]");
console.log(bubbleSort([6, 8, 3, 5, 1]), "[1,3,5,6,8]");
