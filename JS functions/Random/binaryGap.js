

const binaryGap = (n) => {
  let bin = (n.toString(2)).split('');
  console.log(bin)
  let test = [];
  let opr = 0

  for(let j = 0; j < bin.length; j++) {

    if(bin[j] == 1 ) {
      if(test.length == 0) {
        test[opr] = [];
      } 
      continue;
    }

    let main = bin[j]
    let rest = bin.slice(j+1, bin.length)
    test[opr].push(main);

   

    if(bin[j+1] == 1) {
      test[opr + 1] = [];
      opr += 1;
    }

  }
  test.pop();

  return test.length
}


console.log(binaryGap(529));
console.log(binaryGap(32));
console.log(binaryGap(9));
console.log(binaryGap(20));



//binaryGap(1041);