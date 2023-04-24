/*const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
*/
/*
const temperature = 20;

if (temperature < 0){
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");
*/
/*
const temperature = -46;
const raining = false;

if (temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea...");
}
if (!raining){
  console.log("Leave your umbrella at home!");
}
*/
const whichSchool  = function (age) {
  //Print Elementary School if age is less than 13
   if (age >= 1 && age < 13){
     return "Elementary School";
   }
   //Print Secondary school if age is 13 or greater up to and including 18
   else if (age >= 13 && age <= 18){
     return "Secondary School";
   }
   //Any age over 18 print Lighthouse Labs
   else {
     return "Lighthouse Labs";
   }
 };
