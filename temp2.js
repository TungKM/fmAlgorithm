function binarySearchRecursive(arr, num, min = 0, max = arr.length - 1) {
  if (min < 0 || max >= arr.length) {
    return -1;
  }

  let mid = Math.floor((min + max) / 2);

  if (arr[mid] === num) return mid;
  else if (arr[mid] < num) return binarySearchRecursive(arr, num, mid + 1, max);
  else return binarySearchRecursive(arr, num, min, mid - 1);
}

console.log(binarySearchRecursive([1, 2, 4, 7, 23], 23), "4");
