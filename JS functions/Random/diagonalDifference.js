const squareArray = [
  [1,2,3],
  [4,6,7],
  [9,6,1]
]

//find the sum of the major diagonals
function majorDiagonal(squareArray) {
  let sum = 0;
  for(let i = 0; i < squareArray.length; i++) {
    sum += squareArray[i][i];
  }
  return sum
}
//find the sum of the minor diagonals 
function minorDiagonal(squareArray) {
  let sum = 0;
  last = squareArray.length - 1
  for(let j = 0; j < squareArray.length; j++) {
    const column = squareArray.length - 1;
    sum += squareArray[j][column]
  }
  return sum
}

//find the difference of both diagonals
function getDifference(squareArray) {
  const major = majorDiagonal(squareArray);
  const minor = minorDiagonal(squareArray);
  const diff = major - minor;

  //Get the absolute value
  return Math.abs(diff)
}

//console.log(majorDiagonal(squareArray))
console.log(getDifference(squareArray))