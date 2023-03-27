const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const createLiItems = ingredients => {
  return ingredients.map(ingredient => {
    const liItems = document.createElement('li');
    liItems.textContent = ingredient;
    liItems.classList.add('item')
    return liItems
  })
}

const elements = (createLiItems(ingredients))
console.log(elements)
listRef.append(...elements)
console.log(listRef)