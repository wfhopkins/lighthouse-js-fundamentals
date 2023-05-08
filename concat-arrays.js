function concat(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  // arr3.sort(function(a, b) {
  // return a - b;
  console.log(arr3);
  return arr3;
}
//
console.log(concat([5, 2, 3], [9, 1]));
//
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
