class Queue {
  constructor(queueInput) {
    this.queue = queueInput;
  }

  reverseQueue() {
    this.queue.reverse()
    // this.queue.split('').reverse().join('');
  }

  enqueue(_input) {
    this.queue.push(_input)
  }

  dequeue() {
    this.queue.shift()
  }
}

let myQueue = new Queue([1, 2, 3, 4, 5])
myQueue.enqueue(6)
myQueue.dequeue()
myQueue.reverseQueue(6)


console.log(myQueue);