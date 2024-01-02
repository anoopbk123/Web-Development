function setError(id, message){
    let errorDisplay = document.getElementById(id);
    errorDisplay.innerHTML = message;
}
function clearError(){
    let error = document.getElementsByClassName('form-error');
    for(item of error){
        item.innerHTML = ''
    }
}

function validateForm(event){
    event.preventDefault();
    clearError();
    let submitForm = true;
    let signUpForm = document.forms["sign-up-form"]
    let userName = signUpForm["user-name"].value;
    let email = signUpForm["email"].value;
    let password = signUpForm['password'].value;
    let confirmPassword = signUpForm['confirm-password'].value;
    let phoneNumber = signUpForm['phone'].value;
    let address = signUpForm['address'].value;
    let genderList = signUpForm['gender']
    let gender;
    //name validation
    if(userName.length < 3 ||/[^\w]/.test(userName) || /\d/.test(userName)){
        setError("name-error", 'name must have atleast three chars and must not contain digits')
        submitForm = false;
    }
    //email validation
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        setError("email-error", 'enter a valid email')
        submitForm = false;
    }
    //password validation
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(password)){
        setError("password-error", 'enter a valid password');
        submitForm = false;
    }
    //confirm-password-validation
    if(confirmPassword !== password){
        setError("confirm-password-error", 'password is not matching');
        submitForm = false;
    }
    //phone number validation
    if(phoneNumber.length<10){
        setError("phone-error", 'enter a valid phone number');
        submitForm = false;
    }
    //address
    if(address.length < 10){
        setError("address-error", 'enter a valid address');
        submitForm = false;
    }
    //gender
    for(let i = 0; i < genderList.length; i++){
        if(genderList[i].checked){
            gender = genderList[i].value;
        }
    }
    if(gender === undefined){
        setError("gender-error", 'this field is required');
        submitForm = false;
    }
    

    
    if(submitForm){
        onSubmitHandler({
        userName:userName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        phoneNumber:phoneNumber,
        address:address
    })


     }
    return submitForm;
}


function onSubmitHandler(formValues){
    console.log(formValues);
   // window.location.href = "result.html"
}