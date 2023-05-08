//
//Testing using functions to change the output of an array
//
/* var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(num, index){
if (num % 3 === 0) {
    num += 100;
    test[index] += 100;
} else {
console.log(test);
}});
console.log(test); */
//
//using the map method to add tips to bills and update the totals array with new values
//
/* var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var billsWithTip = bills.map(function(bill) {
  bill = bill * 1.15;
  bill = Number(bill);
  return bill.toFixed(2);
});
console.log(bills); */
//
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
// var r = row
//var c = column
for (var r = 0; r < numbers.length; r++) {
  for (var c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0){
      numbers[r][c] = "even";
      console.log("even");
    } else if (numbers[r][c] % 2 !== 0) {
      numbers[r][c] = "odd";
      console.log("odd");
    }
  }
};