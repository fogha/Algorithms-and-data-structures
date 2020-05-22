

const stairCase = (n) => {
  
  for(let i = 0; i <= n; i++) {
    console.log("\x20".repeat(n - i) + "#".repeat(i))
  }
}

stairCase(3);
// console.log('starte')
// console.log('#')
stairCase(4)
//stairCase(6)