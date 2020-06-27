
let test = [

    {

        "name" : "Henry",

        "age" : 36

    },

    {

        "name" : "Leon",

        "age" : 22

    },

    {

        "name" : "Gustave",

        "age" : 38

    },

    {

        "name" : "Leokadie",

        "age" : 24

    },

    {

        "name" : "Talom",

        "age" : 25

    },

    {

        "name" : "Vieux",

        "age" : 31

    },

    {

        "name" : "Serge",

        "age" : 31

    },

    {

        "name" : "Lopaie",

        "age" : 29

    }

]

const ageOrg = (arr) => {
    arr.sort ((a, b) => { 
        let result = (a.age < b.age) ? -1 : (a.age > b.age ) ? 1 : 0;
        return result;
    })
        return arr;
}

const ageOrg2 = (arr) => {
    let temp;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length-1; j++) {
            if(arr[j].age > arr[j+1].age) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


//console.log(ageOrg(test)) 
console.log(ageOrg2(test)) 

