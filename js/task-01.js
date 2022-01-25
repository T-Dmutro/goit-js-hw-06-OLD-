const categoriesEl = document.querySelector('#categories');

const itemsEl = categoriesEl.children;
console.log(`Number of categories: ${itemsEl.length}`);

//2)

const elementsItem = categoriesEl.querySelectorAll('.item')
elementsItem.forEach((title) => {
    console.log(`Category: ${title.firstElementChild.textContent}
Elements: ${title.lastElementChild.childElementCount}`);
});



