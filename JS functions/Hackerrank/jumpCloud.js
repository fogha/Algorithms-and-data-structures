
//Attmepted Solutions

// const jump = (s) => {
//     let count = 0;
//     let j = 0;
//     for(let i=0; i<s.length; i++) {
//         if (s[i] === 0 && s[i+1] === 0) {
//             i += 2;
//             count += 1;
//         } else if (s[i] === 0 && s[i+1] === 1) {
//             count += 1;
//         }
//     }
//     return count;
// }

//correct solution
function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;

    while (true) {
        if (i + 2 < c.length && c[i + 2] == 0) {
            i += 2;
        } else if (i + 1 < c.length) {
            i++;
        } else {
            break;
        }
        count++;
    }
    return count;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))