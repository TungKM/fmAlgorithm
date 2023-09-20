//implement binary search

//2 parameters:
//array(numbers, whole, positive, no funny business)
// number(whole, positive, no funny business, must be identical to 1 of the element in the array)

//return: number(whole, postive, no funny buisiness)

// [1,23,4], 23 => 1
// [4，5，6，7], 7 => 3

// function will be taking 2 parameters
function binarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;
  let mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (arr[mid] === item) return mid;
    else if (arr[mid] < item) min = mid + 1;
    else max = mid - 1;
  }

  return -1;
}

//logarithmic time complexity O(log n)

console.log(binarySearch([1, 2, 4, 7, 23], 23), "4");
console.log(binarySearch([1, 4, 5, 6, 7], 1), "0");

//construct binary search in a recursive way
function binarySearchRecursive(arr, num, min = 0, max = arr.length - 1) {
  // Check the validity of the arguments
  if (min < 0 || max >= arr.length) {
    return -1; // Invalid range
  }

  let mid = Math.floor((min + max) / 2);

  //base case
  if (arr[mid] === num)
    //conditional if arr[mid] == num, return mid
    return mid;
  //recursive case
  //else if, arr[mid] < num, min = mid + 1
  else if (arr[mid] < num) return binarySearchRecursive(arr, num, mid + 1, max);
  //else, arr[mid] > num, max = mid - 1
  else return binarySearchRecursive(arr, num, min, mid - 1);
}

console.log(binarySearchRecursive([1, 2, 4, 7, 23], 23), "4");
