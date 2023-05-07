//function to calculate rectangle are using length and width perameters
const calculateRectangleArea = function(length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  }
  else {
    return;
  }
};
console.log(calculateRectangleArea(10, 5));
//
//function to calcualte triangle area using  base(width) and height perameters
const calculateTriangleArea = function(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  }
  else {
    return;
  }
};
console.log(calculateTriangleArea(10, 5));
//
//function to calculte circe area using radis peramter
const calculateCircleArea = function(radius) {
  if (radius > 0) {
    return (radius * radius) * Math.PI;
  }
  else {
    return;
  }
};
console.log(calculateCircleArea(-1));
