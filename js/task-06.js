const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputActionBlur);

function onInputActionBlur(event) {
  
     if (event.currentTarget.value.trim().length !== Number(inputRef.getAttribute('data-length'))) {
          console.log('false'); inputRef.classList.add('invalid');
         
          
   }
     else if (event.currentTarget.classList.contains('invalid')) {
          inputRef.classList.remove('invalid');
         
     }
     inputRef.classList.add('valid')
     console.log('true')
     
}