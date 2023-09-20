arr[mid] = 4; // 7 //23

min = 0; //3 //4
max = 4;
mid = 2; //3

while (min <= max) {
  mid = Math.floor((min + max) / 2); // 2

  if (arr[mid] === item) return mid;
  else if (arr[mid] < item) min = mid + 1; // min === 3
  ///~~~~~~~~~~~~~~~~~
  else max = mid - 1;
}

while (min <= max) {
  mid = Math.floor((min + max) / 2); // 3

  if (arr[mid] === item) return mid;
  else if (arr[mid] < item) min = mid + 1; // min === 4
  ///~~~~~~~~~~~~~~~~~
  else max = mid - 1;
}

while (min <= max) {
  mid = Math.floor((min + max) / 2); // 4

  if (arr[mid] === item) return mid; //return 4
  //~~~~~~~~~~~~~
  else if (arr[mid] < item) min = mid + 1;
  else max = mid - 1;
}
