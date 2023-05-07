const ageCalculator = function(name, yearOfBirth, currentYear) {
  ageCalculator[0] = name;
  ageCalculator[1] = yearOfBirth;
  ageCalculator[2] = currentYear;
  return name + " is " + (currentYear - yearOfBirth) + " years old."
};
console.log(ageCalculator("Miranda", 1983, 2023));
console.log(ageCalculator("Daelyn", 1996, 2023));
