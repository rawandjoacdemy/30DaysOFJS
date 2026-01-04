const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const passwordInput =  document.querySelector('#password');
const bioInput =  document.querySelector('#bio');
const telephone =  document.querySelector('#phone');


let regexp = /^[A-Za-z0-9]+$/i;

let passwordExp = /^[A-Za-z0-9@-_]+$/i;

let bioExp = /^[a-z_-]+$/;

let emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let phoneExp = /^\d{3}-\d{3}-\d{3}-\d{4}$/





function Submit(){
   const fullName = ValidateFirstName(firstName) + " " + ValidateLastName(lastName)
   const password = ValidatePassword(passwordInput);
   const bio = ValidateBio(bioInput);
   const email = ValidateEmail(emailInput);
   const phone = ValidatePhone(telephone);}


function ValidateFirstName(name){
     if(regexp.test(name.value) && (name.value).length >= 3 && (name.value).length <= 16){
         firstName.style.border = '2px solid green';
         return name.value;
        }
       else{
        firstName.style.border = '1px solid red';
        let feedback = document.createElement('div');
        return;
    }
}

function ValidateLastName(name){
     if(regexp.test(name.value) && (name.value).length >= 3 && (name.value).length <= 16){
         lastName.style.border = '2px solid green';
         return name.value;
        }
        else{
        lastName.style.border = '1px solid red';
        return;
    }
}

function ValidatePassword(passwordInput){
     if(passwordExp.test(passwordInput.value) && (passwordInput.value).length >= 6 && (passwordInput.value).length <= 20){
        passwordInput.style.border = '2px solid green';
        return passwordInput.value;
    }
    else{
        passwordInput.style.border = '1px solid red';
        return;
    }
}

function ValidateBio(bio){
     if(bioExp.test(bio.value) && (bio.value).length >= 8 && (bio.value).length <= 50){
        bioInput.style.border = '2px solid green';
        return bio.value;
    }
    else{
        bioInput.style.border = '1px solid red';
        return;
    }
}


function ValidatePhone(phone){
     if(phoneExp.test(phone.value) && (phone.value).length >= 8 && (phone.value).length <= 50){
        telephone.style.border = '2px solid green';
        return phone.value;
    }
    else{
        telephone.style.border = '1px solid red';
        return;
    }
}

function ValidateEmail(email){
     if(emailExp.test(email.value) && (email.value).length >= 8 && (email.value).length <= 50){
        emailInput.style.border = '2px solid green';
        return email.value;
    }
    else{
        emailInput.style.border = '1px solid red';
        return;
    }
}

