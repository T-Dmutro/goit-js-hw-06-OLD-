const fondSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fondSizeControl.value = Number.parseInt(window.getComputedStyle(textSpan).fontSize);

fondSizeControl.addEventListener('input', onInputChangeText);

function onInputChangeText(event){
    textSpan.style.fontSize = event.currentTarget.value + 'px' ;
}