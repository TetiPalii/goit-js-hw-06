const allCategories = document.querySelector('#categories');
console.log(`Number of categories: ${allCategories.children.length}`)




const liItems = document.querySelectorAll('.item')
liItems.forEach(item => console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`) 
)




