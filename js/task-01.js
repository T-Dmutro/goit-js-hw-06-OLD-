// const menuEl = document.querySelectorAll('.item');
// console.log('Кількість категорій:' , menuEl.length);

// const animalCetegory = document.querySelector("h2");
// console.log( 'Category:', animalCetegory.textContent);

// const lengthAllCategory = document.querySelectorAll("li.item");
// // console.log( ...lengthAllCategory);
// const lengthCategory = [...lengthAllCategory];
// const elementsItem = categoriesRef.querySelectorAll('.item')
// elementsItem.forEach((title) => {
//     console.log(`Category: ${title.firstElementChild.textContent}
// Elements: ${title.lastElementChild.childElementCount}`);
// });
// console.log(lengthCategory)

const categoriesEl = document.querySelector('#categories');

const itemsEl = categoriesEl.children;
console.log(`Number of categories: ${itemsEl.length}`);

//2)

const elementsItem = categoriesEl.querySelectorAll('.item')
elementsItem.forEach((title) => {
    console.log(`Category: ${title.firstElementChild.textContent}
Elements: ${title.lastElementChild.childElementCount}`);
});