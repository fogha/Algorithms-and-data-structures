var longestPalindrome = function (s) {
  let longestPal = "";

  if (s.length === 1) {
    longestPal = s;
    return longestPal;
  }

  if (s.length === 2) {
    let newStr = s.toLowerCase();
    let mid = Math.round(newStr.length / 2)
    let first = newStr.substring(0, mid);
    let end = newStr.substring(mid);

    first !== end ? longestPal = first : longestPal = s;

    return longestPal;
  }

  for (i = 0; i < s.length; i++) {
    for (j = s.length; j > 0; j--) {

      let testString = s.substring(i, j);
      console.log(testString);

      if (palindrome(testString)) {
        if (testString.length > longestPal.length) {
          longestPal = testString;
        }
      }
    }
  }

  return longestPal;
};


const palindrome = (str) => {
  let first, midChar, end;
  let newStr = str.toLowerCase();
  let mid = Math.round(newStr.length / 2)

  if (newStr.length % 2 != 0) {
    midChar = str.substring(mid - 1, mid);
    first = newStr.substring(0, mid - 1);
    end = newStr.substring(mid);
  } else {
    first = newStr.substring(0, mid);
    end = newStr.substring(mid);
  }

  newFirst = first.split('').reverse().join('');

  if (newFirst === end) {
    return true;
  }

  return false;
}

console.log(longestPalindrome("anugnxshgonmqydttcvmtsoaprxnh"));
console.log(longestPalindrome("ccc"));