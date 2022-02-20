module.exports = function toReadable (number) {
  let result = "";
  const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let strNum = String(number);

  if (number <= 9) {
    result = units[number];
  } else if (number <= 19) {
    result = teens[strNum[1]];
  } else if (number <= 99) {
    result = dozens[strNum[0]];
    if (Number(strNum.slice(-1)) === 0) {
      return result;
    } else {
      result += " " + units[strNum[1]];
    }
  } else {
    result = units[strNum[0]] + " hundred";
    if (Number(strNum.slice(-2)) === 0) {
      return result;
    } else if (Number(strNum.slice(-2)) <= 9) {
      result += " " + units[strNum[2]];
    } else if (Number(strNum.slice(-2)) <= 19) {
      result += " " + teens[strNum[2]];
    } else {
      result += " " + dozens[strNum[1]];
      if (Number(strNum.slice(-1)) === 0) {
        return result;
      } else {
        result += " " + units[strNum[2]];
      }
    }
  }
  return result;
}
