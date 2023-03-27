const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputActionBlur);

function onInputActionBlur(event) {
  
     if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
         inputRef.classList.add('valid');
         console.log('true')
   }
     else { console.log('false'); inputRef.classList.add('invalid');}
}