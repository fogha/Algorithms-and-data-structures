

function isAnagram(str1, str2) {
  let map = {};

  for(let i = 0; i < str1.length; i++) {
    let found = map[str1[i]];
    if(!found) {
      map[str1[i]] = 1;
    } else {
      ++map[str1[i]];
    }
  }

  for(let i = 0; i < str2.length; i++) {
    let found = map[str2[i]];
    if(!found) {
      map[str2[i]] = -1;
    } else {
      --map[str2[i]];
    }
  }

  //check thats keys are zero
  let keys = Object.keys(map);
  for(let i = 0; i < str2.length; i++) {
    if(map[keys[i]] !== 0) {
      return false
    }
  }
  return true;
}

console.log(isAnagram('mm', 'aa'))