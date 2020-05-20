export const forEach = (array, fn) => {
  let i;
  for(i = 0; i < array.length; i++) 
    fn(array[i]);
}

//example of a projecting function
export const map = (array, fn) => {
  let results = [];
  for(const value of array) 
    results.push(fn(value));
  return results;
}

export const filter = (array, fn) => {
  let results = [];

  for(const value of array)  
    if(condition) 
      results.push(fn(value))

  return results;
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

export const unary = (fn) => {
  fn.length === 1 
    ? fn 
    :(arg) => fn(arg);
}

export const once = (fn) => {
  let done = false;

  return function() {
    return done ? undefined : ((done = true), fn.apply(this, arguments))
  }
}

export const memorize = (fn) => {
  const lookUpTable = {};

  return (arg) => lookUpTable[arg] || (lookUpTable[arg] = fn(arg))
}

export const addReducer = (array, fn) => {
  let accumulator = 0;
  for(const value of array) 
    accumulator = fn(accumulator, value);

  return [accumulator]
}

// export const multiplyReducer = (array, fn) => { 
//   let accumulator;
//   if(array[0]) 
//     accumulator = array[0]
//   else 

// }