// f(n) = f(n - 1) + f(n - 2)
// only for n > 1..
// f(0) = 0, f(1) = 1

// import { plot, Plot } from 'nodeplotlib';
const { plot, Plot } = require("nodeplotlib")

const data = [
  {
    x: [],
    y: [],
    type: 'scatter',
    name: "Simple"
  },
  {
    x: [],
    y: [],
    type: 'scatter',
    name: "Memoization"
  },
];

function fibonacciSequence(n) {
    
    for(let i = 0; i <= n; i++) {

        const t1 = new Date().getTime();
        let res = fibonacci(i)
        const t2 = new Date().getTime()
        const T = t2 - t1;
        data[0].x.push(i)
        data[0].y.push(T)

        const ti1 = new Date().getTime();
        let results = fibonacciMemo(i)
        const ti2 = new Date().getTime()
        const Ti = ti2 - ti1;
        data[1].x.push(i)
        data[1].y.push(Ti)
    }

    // return sequence;
} 

function fibonacci(n) {
    if( n === 0 || n === 1) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

const store = {
}

function fibonacciMemo(n) {
    if(store[n] != undefined) {
        return store[n]
    }

    const res = fibonacci(n)
    store[n] = res;
    return res;
}


console.log(fibonacciSequence(50));
plot(data);

// console.log(fibonacciSequence(3));
// console.log(fibonacciSequence(2));