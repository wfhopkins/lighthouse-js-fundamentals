const howManyHundreds = function(num){
  const remainder = num % 100;
  const adjustedNum = num - remainder;
  return adjustedNum / 100;
};
console.log(howManyHundreds(678));



//test runs from compass
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);