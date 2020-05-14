/**
 * returns either Yes if for every opening bracket, or brace in an 
 * array there is a closing brace or bracket. Else it will return No
 * eg ['{','(','}'] => No
 *    ['[','{','(',')','}',']'] => Yes
 * 
 * 
 * @param {[]} arr Input array
 *
 */
function brackets(arr) {
  let count = 0;
  let count1 = 0;
  arr.forEach(element => {
    if((element === '{') || (element === '[') || (element === '(') ) {
      count += 1;
    } 
    if((element === '}') || (element === ']') || (element === ')') ) {
      count1 += 1;
    } 

  }); 
  //console.log(count)
  //console.log(count1)
  if( count === count1) {
    return 'Yes'
  } else {
    return 'NO'
  }
}

//Test cases 
console.log(brackets(['{','(','}']));
console.log(brackets(['[','{','(',')','}',']']));
console.log(brackets(['[','{','{','(','(',')','}','}',']']));
console.log(brackets(['[',']','{','}','(',')','{']));
console.log(brackets(['[',']','{','}','(',')']));