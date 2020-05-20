

const fibonacci = (n) => {
  if(n === 1)
    return n

  return n + fibonacci(n-1);
}

console.log(fibonacci(4));