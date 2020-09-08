

const numberOfWays = (n) => {
  if(n <= 1) {
    return n;
  } 

  return numberOfWays(n - 2);
}


console.log(numberOfWays(4))