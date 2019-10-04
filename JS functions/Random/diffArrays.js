function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different
    for(let i=0; i<arr1.length; i++){
      for(let j=0; j<arr2.length; j++) {
        if(!arr1.includes(arr2[j])){
          newArr.push(arr2[j]);
          return newArr;
        } else if(!arr2.includes(arr1[i])) {
          newArr.push(arr1[i]);
          return newArr;
        }
      }
    }
  }

  console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));