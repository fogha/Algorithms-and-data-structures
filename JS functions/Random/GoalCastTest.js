
//This is a simple to add 3 numbers, but each number to
//be added exists in a separate block.

const sum = (a) => {
  //from the top, each function returns another function with the next value to be added
  return function(b) {
    return function (c) { 
      //in the final function, all values from the function 
      //in the highest to the last are added and returned
      return a + b + c;
    } 
  }
}


//this is a function that will handle any number of chained functions
function chainHandler(a) {
  return function (b) {
    //if the next function has a parameter, it is added the current parameter 'a'
    if (b) {
      return chainHandler(a + b);
    }
    //when there is not other value, the current sum which
    //is a will be returned.
    return a; 
  }
};

//calling the function with the empty brackets will return the current sum when the 
//function without any parameter is reached
console.log(chainHandler(3)(2)(1)(4)(5)(3)(2)(1)(1)(3)());












// //this is a function that will handle any number of chained functions
// function chainHandler(n, arr, res = 0, m = 0) {

//   if (n === 0) {
//     return res
//   }

//   res += arr[m]
//   return chainHandler(n - 1, arr, res, m + 1,)

// }

