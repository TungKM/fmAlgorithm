//https://frontendmasters.com/courses/practical-algorithms/merge-sort-solution/
//merge sort
// base case: if list.length < 2, return list
// break the list into halves of LEFT & RIGHT
// LeftSorted = mergeSort(L)
// RightSorted = mergeSort(R)
// return merge(LeftSorted, RightSorted)

function mergeSort(list) {
  //base case
  if (list.length < 2) return list;

  const mid = Math.floor(list.length / 2);
  const leftList = list.slice(0, mid);
  const rightList = list.slice(mid);

  //recursive case
  const leftSorted = mergeSort(leftList);
  const rightSorted = mergeSort(rightList); //here and above are all O(log n) logarithmic time complexity

  return merge(leftSorted, rightSorted); //O(n) linear tiem complexity
}

//O(n log n)

function merge(left, right) {
  let list = [];

  while (left.length != 0 && right.length != 0) {
    if (left[0] > right[0]) {
      list.push(right.shift());
      console.log(list, "right");
    } else {
      list.push(left.shift());
      console.log(list, "left");
    }
  }

  list = list.concat(left).concat(right);
  console.log(list);

  return list;
}

console.log(mergeSort([1, 2, 3, 4, 5]), "[1, 2, 3, 4, 5]");
console.log(mergeSort([5, 4, 3, 2, 1]), "[5, 4, 3, 2, 1] 2nd test case");

//Divide and conquer
//O(n log n), logarithmic time complexity
