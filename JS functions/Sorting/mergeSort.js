
const merge = (firstHalf, secondHalf) => {
  const sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < firstHalf.length && rightIndex < secondHalf.length) {
    
    if (firstHalf[leftIndex] < secondHalf[rightIndex]) {
      sortedArr.push(firstHalf[leftIndex]);
      leftIndex++
    } else {
      sortedArr.push(secondHalf[rightIndex]);
      rightIndex++
    }
  }

  return [...sortedArr, ...firstHalf.slice(leftIndex), ...secondHalf.slice(rightIndex)]
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex, arr.length)

  return merge(
    mergeSort(firstHalf),
    mergeSort(secondHalf)
  );
}

console.log(mergeSort([ 1, 22, 5, 66, 3 ,55, 40, 44]))