function lastIndexOf(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
lastIndexOf([5, 7, 3, 1], 7);
console.log(lastIndexOf([5, 7, 3, 4], 7));
