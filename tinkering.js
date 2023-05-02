/*const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
 //using for loops
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
//using for...of loop
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: ", total);

function sayHello() {
  var message = "Hello!";
  return message;
}
console.log(sayHello());

var catSays = function(x) {
  var catMessage = "";
  for (var i = 0; i < x; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
console.log(catSays(5));
*/
/*
function cat() {
  console.log(purr());
  var meow = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
  function purr() {
    return "purrrr!"
  }
}
cat();
*/
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");