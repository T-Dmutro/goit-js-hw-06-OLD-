const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', onNameOutputText);

function onNameOutputText (event){
    if(inputEl.value === ``){
        return nameOutputEl.textContent = `Anonymous`;}
       return nameOutputEl.textContent = event.currentTarget.value;
    };