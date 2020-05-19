export const forEach = (array, fn) => {
  let i;
  for(i = 0; i < array.length; i++) 
    fn(array[i]);
}

export const unless = (condition, fn) => {
  if(condition) 
    fn()
}

export const times = (times, fn) => {
  let j;
  for(j = 0; j < times; j++) 
    fn(j);
}

//every and some are inefficient implementations because they should stop at the first item that either 
//doesnt satisfy or satisfies the condition, hence for very large arrays they are very inefficient.

export const every = (arr, fn) => {
  let result = true;
  for(const item of arr) {
    result = result && fn(item)
  }
  return result;
}

export const some = (arr, fn) => {
  let result = true;
  for(const item of arr) {
    result = result || fn(item);
  }
  return result;
}

export const sortBy = (props) => {
  return (a, b) => {
    var result = (a.props < b.props) ? -1 : (a.props > b.props ) ? 1 : 0;
    return result;
  }
}