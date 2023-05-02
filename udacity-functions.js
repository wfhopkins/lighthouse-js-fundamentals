function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
//console.log(makeLine());
function buildTriangle(width) {
  var triangle = "";
  var rowNumber = 1;
  for (rowNumber = 1; rowNumber <= width; rowNumber++) {
      triangle += makeLine(rowNumber)
  }
  return triangle;
}
console.log(buildTriangle(10));