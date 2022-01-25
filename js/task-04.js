let counterValue = 0;
const step = 1;

const refs = {
    decrementBtnRef: document.querySelector('#counter button[data-action="decrement"]'),
    valueRef: document.querySelector('#value'),
    incrementBtnRef: document.querySelector('#counter button[data-action="increment"]'),
}

refs.decrementBtnRef.addEventListener('click', onDecrementBtnRefClick);
refs.incrementBtnRef.addEventListener('click', onIncrementBtnRefClick);


function onDecrementBtnRefClick (){
    console.log(`Минус 1`);
   counterValue -= step;
   return onValueRefRezult();
    
}

function onIncrementBtnRefClick (){
    console.log(`Плюс один`);
  counterValue += step;
  return onValueRefRezult();
    
}

function onValueRefRezult (){
  return  refs.valueRef.textContent = counterValue;
}

console.log(refs.valueRef);