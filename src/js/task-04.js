let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterRef = document.querySelector('#value')


incrementBtn.addEventListener("click", onBtnAction);
decrementBtn.addEventListener("click", onBtnAction);



function onBtnAction(event) {
    if (event.currentTarget === incrementBtn) {
        console.log('click')
        counterValue +=1 
    counterRef.textContent = counterValue
    return counterValue
        
    }
    counterValue -=1 
        counterRef.textContent = counterValue
        return counterValue;
    
}

// incrementBtn.addEventListener("click", onIncrementBtn);
// decrementBtn.addEventListener("click", onDecrementBtn);

// function onIncrementBtn() {
//     counterValue +=1 
//     counterRef.textContent = counterValue
//     return counterValue
    
// }
// function onDecrementBtn() {
//    counterValue -=1 
//     counterRef.textContent = counterValue
//     return counterValue
// }