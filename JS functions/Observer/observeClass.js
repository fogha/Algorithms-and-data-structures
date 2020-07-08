class Observe {
    constructor(variableToObserve) {
        this.variableToObserve = variableToObserve;
        this.listeners = [];
    }
    //function to attach a listener to the the variable to be observed
    attach(listener) {
        this.listeners.push(listener);
    }

    //removing all listeners from the variable
    detachAll() {
        this.listeners = [];
        console.log('All listeners detached succesfully');
    }

    //Get all listeners available
    allListeners() {
        return this.listeners;
    }

    //removing one listeners from the variable
    detachOne(listener) {
        for(let i = 0; i < this.listeners.length; i++) {
            if(this.listeners[i] === listener) {
                this.listeners.splice(i, 1);
            }
        }
    }

    //function to get the variable to be observed
    get() {
        return this.variableToObserve;
    }

    //function to set/change the variable to be observed
    set(val) {
        this.variableToObserve = val;
        if(this.listeners.length === 0) {
            return this.variableToObserve;
        }
        for(let i = 0; i < this.listeners.length; i++) {
            this.listeners[i]();
        }
    }

}

module.exports = Observe;