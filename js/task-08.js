const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
    event.preventDefault()
    const { elements:{ email, password }
    } = event.currentTarget;
    

    if (email.value === "" || password.value === "") {
        console.log("Alert")
    }
    else {const userData = {};
            userData.email = email.value;
            userData.password = password.value;
            console.log(userData);

    }
    formRef.reset();
      // const formData = new FormData(event.currentTarget);
    
    // formData.forEach((value, name) => {
        
    //     if (value === "" || name === "") {
    //     console.log("Alert")
    //     }
    //     else {
    //         const  {elements: {email, password}} = event.currentTarget
    //         // const formElements = event.currentTarget.elements;
    //         const userData = {};
    //         userData.email = email.value;
    //         userData.password = password.value;
    //         console.log(userData);
            
    //     }
    // })
}
  

    

