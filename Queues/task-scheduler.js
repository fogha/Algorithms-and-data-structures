class Solution {
  constructor(nums, k) {
    this.taskBoard = nums;
    this.timeAlloc = k
  }

  reArrange() {
    console.log(this.taskBoard);
    for (let i = 0; i < this.taskBoard.length; i++) {
      if (this.taskBoard[i] === this.taskBoard[i + 1] && this.taskBoard[i + 1] != this.taskBoard[i + 2]) {
        let temp = this.taskBoard[i + 1];
        this.taskBoard[i + 1] = this.taskBoard[i + 2];
        this.taskBoard[i + 2] = temp;
      }
    }
  }

  timeScheduler() {
    let timeSpent = 0;
    for (let i = 0; i < this.taskBoard.length; i++) {
      timeSpent++
      if (this.taskBoard[i] === this.taskBoard[i - 1]) {
        timeSpent += this.timeAlloc;
      }
    }
    console.log(timeSpent);
    return timeSpent;
  }
}

let my = new Solution([0, 0, 0, 1, 1, 0], 1)
my.reArrange()
my.timeScheduler()

console.log(my)