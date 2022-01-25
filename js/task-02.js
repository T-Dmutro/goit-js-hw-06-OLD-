const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");


const itemRef = ingredients.map(elem => 
  { const itemRef = document.createElement("li");
    itemRef.classList.add("item");
    itemRef.textContent = elem;
    return itemRef;
  });
  console.log(itemRef);

  listIngredients.append(...itemRef);