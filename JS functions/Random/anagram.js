let result = [];

function getAllSubstrings(str) {
  let i, j;

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  console.log(result)
  return result;
}

function isAnagramSort(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 == str2;
}

function isAnagramMap(str1, str2) {
  //Anagarms must have the same length
  if (str1.length != str2.length) {
    return false;
  }
  var map = new Map();
  for (let i = 0; i < str1.length; i++) {
    let val1 = map.get(str1[i]);
    if (!val1) {
      map.set(str1[i], 1);
    } else {
      map.set(str1[i], val1 + 1);
    }

    let val2 = map.get(str2[i]);
    if (!val2) {
      map.set(str2[i], 1);
    } else {
      map.set(str2[i], val2 + 1);
    }
  }

  //every value in the map should be even.
  let entries = map.entries();
  for(let [_,v] of map){
    if(v % 2 !== 0){
      return false;
    }
  }
  return true;

}

function anagramCheck(arr) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (isAnagramMap(arr[i], arr[j])) {
        final.push(...[arr[i], arr[j]]);
      }
    }
  }
  return final;
}

var theString = 'mmom';
getAllSubstrings(theString);
console.log(anagramCheck(result))
