const db = require('./db.json');
const max = 3;
let cache = new Map();
cache.set('3', { name: 'Gustave', age: 38 })

const caching = (str)  => {
    typeof(str) == 'number' ?  str.toString() : '';
    let result;
    
    cache.forEach((value, key) => {
        if (key == str || value.name == str) {
            console.log('in cache');

            if(value) {
                return value;
            } 
        }  

    } )
        Object.entries(db.users).map(([key, value]) => {
            if(key == str || value.name ==  str) {
                result = value;
                if(cache.size == max) {
                    console.log("Cache is full")
                    //clear cache
                }  else {
                        cache.set(key, value)
                }
            } 
                            
        }) 
    
    if (result)  return result 
    else  return 0;
}

//function to make sure data in the cache is valide
function cacheValidation() {
    Object.entries(db.users).forEach(([key, value]) => {
        cache.forEach((v, k) => {
            if(key == k && value == v) { 
                //continue
                console.log('all good');
            } else if (key == k && value != v) {
                //we could eiither update the data or remove the data
                
            } else {
                //case where we can'r find that data 
                console.log('data not in the cache');
            }
        })
    })
} 

//function to clear the cache
function clearCache() {
     return cache.clear();
}

//console.log(caching('Gustave'))
console.log(cache);
cacheValidation();
console.log(cache);


