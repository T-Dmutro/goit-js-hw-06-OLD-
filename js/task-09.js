
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorBody = document.querySelector('body');
const btnChangeColor = colorBody.querySelector('.change-color');
const spanText = colorBody.querySelector('.color');

console.log(colorBody);


btnChangeColor.addEventListener('click', onColorImprovisation);



function onColorImprovisation(){
  const color = getRandomHexColor();
  colorBody.style.backgroundColor = color;
  spanText.textContent = color;
}

console.log(btnChangeColor);