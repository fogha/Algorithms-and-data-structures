


const palindrome = (str) => {
  let first, midChar, end;

  let newStr = str.toLowerCase();
  let mid = Math.round(newStr.length/2)

  if(newStr.length % 2 != 0) {
    midChar = str.slice(mid-1, mid)
  }

  first = newStr.slice(0, mid-1);
  end = newStr.slice(mid);
  newFirst = first.split('').reverse().join('');

  if( newFirst == end) {
    return true;
  }

  return false;
}


console.log(palindrome('level'));
console.log(palindrome('racecar'));
console.log(palindrome('Aba'));
console.log(palindrome('Nixon'));
console.log(palindrome('Kayak'));