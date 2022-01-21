const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ingredientsContainerEl = document.querySelector("ingredients");
// const ingredientsOptions = (options) => {
// return options.map(options => {
// const itemEl = document.createElement ('li');
// itemEl.classList.add('.item');
// itemEl.textContent = options.label;
// return itemEl;
// });
// };
// const elements = ingredientsOptions (ingredients);
// ingredientsContainerEl.append(...elements);

const ingredientsContainerEl = document.querySelector( '#ingredients');

const elements = ingredients.map(option =>{
  const itemsEl = document.createElement ('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = option;
  return itemsEl;
});

ingredientsContainerEl.append(...itemsEl);