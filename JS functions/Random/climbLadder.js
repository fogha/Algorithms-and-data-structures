let  scoreArr = [100,90,90,80,75, 60];
let aliceArr = [50, 65,  77, 90, 102];

const insert = (scoreArr, num) => {
    let index = -1;
    for(let i = 0; i < scoreArr.length; i++) {
        if(scoreArr[i] < num) {
            index = i;
            break;
        } 
    }
    index >= 0 ? scoreArr.splice(index, 0, num) : scoreArr.push(num);
    return scoreArr;
}

const rank = (arr, num) => {
    let rank = 0;

    for(let i = 0; i < arr.length; i++) {
    
        if(arr[i] != arr[i - 1]) {
            rank += 1
        }

        if(arr[i] == num) {
            return rank;
        }
    }
}

for(let i = 0; i < aliceArr.length; i++) {
    console.log(rank(insert(scoreArr, aliceArr[i]), aliceArr[i]))
}

// const ins = (arr, n) => {
//     arr.push(n);
//     arr.sort((a, b) => {
//         return b > a;
//     });
//     return arr
// }
// console.log(insert([100,90,90,80,75, 60], 50))
// console.log(ins([1,2,3,4,7], 5))
// console.log(rank([100,90,90,80,75, 60], 50))
