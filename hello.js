/* //declaring function to sayHello(name)
const sayHello = function (name) {
  console.log("Hello, " + name);
};
/*
sayHello("Hamlet");
sayHello("Ophelia");
sayHello("Horatio");
//
const returnSayHello = function(name){
  return "Hello, " + name;
}
const greeting = returnSayHello('John'); */
//
//working on using return statements in addition to console.log
/*
const sayHelloToConsole = function (name){
  console.log("Hello, " + name);
}
sayHelloToConsole("John");
*/
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");

console.log(greeting);

