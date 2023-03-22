const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    
    formData.forEach((value, name) => {
        if (value === "" || name === "") {
        console.log("Alert")
        }
        else {
            const formElements = event.currentTarget.elements;
            const userData = {};
            userData.email = formElements.email.value;
            userData.password = formElements.password.value;
            console.log(userData);
            
        }
    })

    formRef.reset();
}

