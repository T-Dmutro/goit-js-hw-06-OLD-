const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContainerEl = document.querySelector( '#ingredients');

const elements = ingredients.map(option =>{
  const itemsEl = document.createElement ('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = option;
  return itemsEl;
});

ingredientsContainerEl.append(...itemsEl);