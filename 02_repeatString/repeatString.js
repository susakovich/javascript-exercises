const repeatString = function (name, num) {
  let finalString = "";

  while (num > 0) {
    finalString += name;
    num--;
  }
  return finalString;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
