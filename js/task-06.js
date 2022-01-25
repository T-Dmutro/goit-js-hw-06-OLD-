const inputRef = document.querySelector('#validation-input');
const inputRefLenght = inputRef.getAttribute('data-length');
const inputRefLenghtNumber = Number(inputRefLenght);

inputRef.addEventListener("blur", oninputRefAuditLength);

function oninputRefAuditLength(event){
if(event.currentTarget.value.length === inputRefLenghtNumber){
    inputRef.classList.add("valid");
    inputRef.classList.replace("invalid", "valid");
} else {
    inputRef.classList.add("invalid");
    inputRef.classList.replace("valid", "invalid");
};
};