let fullname = document.getElementById("txtName");
let email = document.getElementById("txtEmail");
let phone = document.getElementById("txtPhone")
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.querySelector("form");
let alt = document.getElementById("alt");
let button = document.getElementById("register");
let body = document.getElementById("body");


let pass=0, fail=0;
function validateInput(){
    pass = 0;
    fail = 0;
    // Check name validity 

    if(fullname.value.trim()===""){
       onError(fullname,"Name cannot be lesser than 5");

    }else{
        if(!isValidName(fullname.value.trim())){
            onError(fullname, "Name cannot be lesser than 5");
    
        }else{
            onSuccess(fullname);
        }
    }

    // Check email validity

    if(email.value.trim()===""){
        onError(email,"Email ID cannot be empty");
        
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email ID is not valid");
            
        }else{
            onSuccess(email);
            
        }
    }

    // Check phone number validity

    if(phone.value.trim()===""){
        onError(phone,"Phone number cannot be empty");
        
    }else{
        if(!isValidPhone(phone.value.trim())){
            onError(phone,"Phone number is not valid");
            
        }else{
            onSuccess(phone);
            
        }
    }

    // Check password validity
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
     }else{
        if (!isValidPassword(pwd.value.trim())){
            onError(pwd, "Password is too weak");

        }else{
            onSuccess(pwd);
            
        }
     }

     // Check password confirmation validity

     if(conPwd.value.trim()===""){
        onError(conPwd,"Password cannot be empty");
        
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password do not match");
            
         }
         else
         onSuccess(conPwd);
     }
}

// Event for register button

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
    registerButton();
});

// Event for Name

document.getElementById("txtName")
.addEventListener("blur",(event)=>{
    event.preventDefault();
    if(fullname.value.trim()===""){
        onError(fullname,"Name cannot be lesser than 5");

     }else{
         if(!isValidName(fullname.value.trim())){
             onError(fullname, "Name cannot be lesser than 5");
        
         }else{
            onSuccess(fullname)
             
         }
     } 
});

//Event for Email

document.getElementById("txtEmail")
.addEventListener("blur", (event)=>{
    event.preventDefault();
    if(email.value.trim()===""){
        onError(email,"Email ID cannot be empty");
        
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email ID is not valid");
            
        }else{
            onSuccess(email);
            
        }
    }
});

// Event for Phone number

document.getElementById("txtPhone")
.addEventListener("blur", (event)=>{
    event.preventDefault();
    if(phone.value.trim()===""){
        onError(phone,"Phone number cannot be empty");
        
    }else{
        if(!isValidPhone(phone.value.trim())){
            onError(phone,"Phone number is not valid");
            
        }else{
            onSuccess(phone);
        }
    }
});

// Event for Password

document.getElementById("txtPwd")
.addEventListener("blur", (event)=>{
    event.preventDefault();
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
     }else{
        if (!isValidPassword(pwd.value.trim())){
            onError(pwd, "Password is too weak");

        }else{
            onSuccess(pwd);
            
        }
     }
});

// Event for Password confirmation

document.getElementById("txtConPwd")
.addEventListener("blur", (event)=>{
    event.preventDefault();
    if(conPwd.value.trim()===""){
        onError(conPwd,"Password cannot be empty");
        
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password do not match");
            
         }
         else
         onSuccess(conPwd);

     }
});

// Event for phone number correction

document.getElementById("txtPhone")
.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if(this.value.length > 10){
        this.value = this.value.slice(0, this.value.length-1);
    }
});

// Event for name correction

document.getElementById("txtName")
.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
})

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success"); 
    pass += 1; 
}

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

    fail += 1;
}

function isValidName(name){
    let validname;
    if (name.length > 4){
        validname = true;
    }else{
        validname = false;
    }
    return validname;
}

function isValidEmail(email){
    let emailver;
   if (email.indexOf('@') < 0){
    emailver = false;
   }else{
    emailver = true;
   }
   return emailver;
}

function isValidPhone(phone){
    let phoneIsNum = /^\d+$/.test(phone);
    let phoneLen = phone.length;
    let validPhone = phoneIsNum && (phoneLen === 10);
    let resPhone;
    if(phone === "1234567890"){
        resPhone = false;
    }else{
        resPhone = true;
    }
    return resPhone && validPhone;
}

function isValidPassword(password){
    let pwdver;
    if (password.length < 8){
        pwdver = false;
    }else if(password === "password" || password === fullname.value.trim()){
        pwdver = false;
    }
    else{
        pwdver = true;
    }
    return pwdver;
}

function registerButton(){
    pass = Number(pass);
    fail = Number(fail);
    if(Number(pass - fail) >= 5){
        button.style.backgroundColor = "rgb(26, 167, 26)";
        console.log(Number(pass), Number(fail), Number(pass - fail));
        popup.classList.add("open-popup");
        setTimeout(function(){
            popup.classList.remove("open-popup");
        }, 4000);
        setTimeout(function(){
            window.location.reload();
        }, 5000);
        

    }else{
        alert("Registration error");
        console.log(Number(pass), Number(fail), Number(pass - fail));
    }
}



