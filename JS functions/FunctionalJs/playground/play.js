import { forEach, times, unless} from '../lib/es6-functional';

// var array = [1,2,3,4];
// forEach(array, (e) => { console.log(e)})

//get all even numbers between 0 and 100
times(100, (i) => {
  unless(i % 2 == 0, () => {
    console.log(i, 'is even');
  })
})