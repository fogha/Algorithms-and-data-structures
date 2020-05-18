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
// function bracketsFirst(arr) {
//   let count = 0;
//   let count1 = 0;
//   arr.forEach(element => {
//     if((element === '{') || (element === '[') || (element === '(') ) {
//       count += 1;
//     } 
//     if((element === '}') || (element === ']') || (element === ')') ) {
//       count1 += 1;
//     } 

//   }); 
//   //console.log(count)
//   //console.log(count1)
//   if( count === count1) {
//     return 'Yes'
//   } else {
//     return 'NO'
//   }
// }

// function brackets(arr) {
//   let count = 0;
//   let count1 = 0;
//   let test = [];
//   mid = arr.length/2;
//   let end = [];
//   last = arr.length;

//   if(arr.length % 2 != 0) {
//     return false
//   }

//   for(let i=0; i<arr.length; i++) {
//     if(arr[i] == '(' && arr[i+1] == ')') {
//       count += 1;
//     }

//     if(arr[i] == '{' && arr[i+1] == '}') {
//       count += 1;
//     }

//     if(arr[i] == '[' && arr[i+1] == ']') {
//       count += 1;
//     }
//     i += 1;
//   }
//   //console.log(count)
//   if(count == mid) {
//     return true;
//   }
//   test = arr.slice(0, mid);
//   end = arr.slice(mid, arr.length);
//   let newTest = test.reverse();
//   //console.log(newTest)
//   for(let i=0; i<newTest.length; i++) {
//       if(test[i] == '(' && end[i] != ')') {
//         return false
//       } else {
//         count += 1;
//       }

//       if(test[i] === '{' && end[i] != '}') {
//         return false
//       } else {
//         count += 1;
//       }

//       if(test[i] === '[' && end[i] != ']') {
//         return false
//       } else {
//         count += 1;
//       }
//     }
//     //console.log(count)
//     return true;
//   }

let opening = ['(','{','['];
let closing = [')','}',']'];
let stack = []

function Brackets(str) {
  for(let i = 0; i < str.length; i++) {
    if(opening.includes(str[i])) {
      stack.push(str[i]);
    } else {
        let last = stack[stack.length - 1];
        let index = closing.indexOf(str[i]);
        let test = opening[index];
        if(test == last) {
          stack.pop();
        } else {
          return false
        }
      }
    }
    
    return stack.length == 0;
}

console.log(Brackets('{([])}'))

