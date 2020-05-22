


const findPermutations = (string) => {
    if(!string || typeof string !== "string") {
        return "Please you should enter a string";
    
    } else if(string.length < 2) {
        return string;
    }

    let permutationsArray = [];

    for(let i=0; i<string.length; i++) {
        let mainChar = string[i];
        let remainingChars = string.slice(0, i) + string.slice(i+1, string.length);
        for(let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(mainChar + permutation)
            console.log(mainChar);
            console.log(permutation);
        }
    }
    return permutationsArray;
}


//findPermutations("abc");
console.log(findPermutations("care"));
//findPermutations("ball");