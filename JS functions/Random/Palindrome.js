


const palindrome = (strn) => {
  let str = strn.toLowerCase();
  let first, midChar, end;
  let mid = Math.round(str.length/2)

  if(str.length % 2 != 0) {
    midChar = str.slice(mid-1, mid)
  }

  first = str.slice(0, mid-1);
  end = str.slice(mid);
  newFirst = first.split('').reverse().join('');

  if( newFirst == end) {
    return true;
  }

  return false;
}


console.log(palindrome('level'));
console.log(palindrome('racecar'));
console.log(palindrome('Aba'));