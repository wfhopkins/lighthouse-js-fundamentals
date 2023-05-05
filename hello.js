//declaring function to sayHello(name)
const sayHello = function (name) {
  console.log("Hello, " + name);
};
/*
sayHello("Hamlet");
sayHello("Ophelia");
sayHello("Horatio");
 */
const returnSayHello = function(name){
  return "Hello, " + name;
}
const greeting = returnSayHello('John');