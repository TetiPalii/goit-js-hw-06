// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const listRef = document.querySelector('.gallery');

// const createImages = images => {
//   const galleryImages = images.map(image => {
//    return `<li><img src = "${image.url}" alt = "${image.alt}" width = 240 height = 140></li>`
//   })
//   return galleryImages
// }

// const imgRef = createImages(images).join("")
// listRef.insertAdjacentHTML('afterbegin', imgRef)



class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items
  }
  addItem(item) {
    this.items.push(item);

  }
  removeItem(itemToRemove) {
    return this.items.find((item, idx) => {
      if (itemToRemove === item) {
        this.items.splice(idx, 1)
        
      }
      return this.items
    })
  
  }
}
const storage = new Storage([1, 2, 3])
console.log(storage)
console.log(storage.getItems())
console.log(storage.removeItem(1))
console.log(storage.getItems())
