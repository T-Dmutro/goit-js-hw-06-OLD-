function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  number: document.querySelector("input"),
  btCreate: document.querySelector("[data-create]"),
  btDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
 }
 
 const INTIAL_BOX_SIZE = 30;
 const BOX_SIZE_STEP = 10;
 
 let boxSize = INTIAL_BOX_SIZE;
 
 function createBox(amount) {
   for (let i = 1; i <= amount; i += 1) {
     const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`;
     ref.boxes.insertAdjacentHTML('beforeend', box);
     boxSize += BOX_SIZE_STEP;
   }
 }
 
 function resetBoxSize() {
   boxSize = INTIAL_BOX_SIZE;
 }
 
 function destroyBox() {
    ref.boxes.innerHTML = '';
 };
 
 ref.btCreate.addEventListener("click", () => {
   createBox( ref.number.value);
 });
 console.log();
 ref.btDestroy.addEventListener("click", () => {
   destroyBox();
    ref.number.value = "";
 });
