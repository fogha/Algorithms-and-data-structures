const Observe = require('./observeClass');

observer = new Observe(29);
//console.log(observer.get());
//console.log(observer.set(32));

const listener1= function(val) {
    console.log(`the variable has been changed to `);
}

const listener2= function(val) {
    console.log('do a backflip');
}

const listener3= function(val) {
    console.log('do a backflip, then say namaste');
}

observer.attach(listener1);
observer.attach(listener2);
observer.attach(listener3);

observer.set(48);

observer.detachOne(listener2);
observer.set(58);
console.log(observer.allListeners());

// observer.detach();
// console.log(observer.set(28));



