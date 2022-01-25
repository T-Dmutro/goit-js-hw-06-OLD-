const CounterPlugin = function({ rootSelector,
     initialValue = 0, step = 1} = {}){
    
    this._value = initialValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector)
};
CounterPlugin.prototype._getRefs = function (rootSelector){
    console.log(rootSelector);
    const refs ={};
    refs.counter = document.querySelector(rootSelector);
    refs.incrementBtn = refs.counter.querySelector([data-increment])
    refs.decrementBtn = refs.counter.querySelector([data-decrement])
    refs.value= refs.counter.querySelector('value');
    return refs;
}

CounterPlugin.prototype.bindEvents = function( ){
    this._refs.incrementBtn.addEventListener('click',() =>{
        this.increment();
    });



    this._refs.decrementBtn.addEventListener('click',() =>{
        this.decrement();
    });

};

CounterPlugin.prototype.updateValueEu = function(){
    this._refs.value.textContent = this.value;
};

CounterPlugin.prototype.increment = function(){
    this._value -= this._step;
};
CounterPlugin.prototype.decrement = function(){
    this._value += this._step;
};
const counter = new CounterPlugin({step: 10});
console.log(counter)