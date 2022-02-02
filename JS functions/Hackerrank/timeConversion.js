function timeConversion(s) {
  // Write your code here
  let hours = s.substr(0, 2);
  let zone = s.substr(8)
  let minSec = s.substr(2, 6)
  if (zone == "AM") {
    if (hours == '12') {
      return "00".concat(minSec)
    }
    return hours.concat(minSec)
  } else {
    if (hours == '12') {
      return hours.concat(minSec)
    }
    return convert(hours, minSec)
  }
}

function convert(hours, minSec) {
  hours = Number(hours)
  hours = (hours + 12).toString();
  return hours.concat(minSec)
}

console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("12:45:54AM"));
console.log(timeConversion("06:45:54PM"));
console.log(timeConversion("06:45:54AM"));