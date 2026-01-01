let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let myForm = document.getElementById("myForm");
let userError = document.getElementById("userError");
let mailError = document.getElementById("mailError");
let passError = document.getElementById("passError");
let cpassError = document.getElementById("cpassError");
let passshow = document.getElementById("show");
let passdiv = document.querySelector(".password");


passdiv.addEventListener("click", (e)=>{
    if(e.target.tagName == "SPAN"){
        let input = e.currentTarget.querySelector("input");
        input.type = input.type == "password" ? "text" : "password";

        if(input.type == "password"){
            passshow.innerText = "show";
        }else{
            passshow.innerText = "hide";
        }

    }
});


username.addEventListener("input", () => {
    userHandel("Invalid username");
});

email.addEventListener("input", () => {
    mailHandel("Invalid mail id");
});



password.addEventListener("input", ()=>{
   passwordHandel();
})

cpassword.addEventListener("input", ()=>{
    cpasswordHandel("password is not match");
})

function  cpasswordHandel(msg){
    if(password.value !== ""){
    if(password.value != cpassword.value){
        error(".confirm")
        cpassError.style.visibility = "visible";
        cpassError.innerText = msg;
        return false;
    }else{
        success(".confirm")
          cpassError.style.visibility = "hidden";
        cpassError.innerText = "";
        return true;
    }
}else{
    cpassword.value = "";
    error(".confirm");
    return false;
}
}

function passwordHandel(){
     let pass = password.value.trim();

     passError.style.visibility = "visible";

     if(password.value !== cpassword.value){
        
    cpasswordHandel("password is mismatch");
    error(".confirm");
    ;
     }


    if(pass.length < 8){
        error(".password");
        passError.innerText = "Password should be 8 digit"
       return    false ;  
    }

    let passArr = [...pass];
    let isLowerCase = passArr.some(chr => chr >= "a" && chr <= "z");
    let isUpperCase = passArr.some(chr => chr >= "A" && chr <= "Z");

    if(!isLowerCase){
        error(".password")
         passError.innerText = "atleast one lower case"
       return false;
    
    }
    
      if(!isUpperCase){
        error(".password");
             passError.innerText = "atleast one Upper case"
       return false;
    
    }

    let nums = [];

    for(let i = 0; i < 9;i++){
        nums[i] = i + 1
    }

    let isNum = nums.some(num => pass.includes(num));

    if(!isNum){
        error(".password")
             passError.innerText = "atleast one number"
       return false;
    }

    let specialchr = ["@", "#", "$", "&"];

    let isSpecial = specialchr.some(chr => pass.includes(chr));

    if(!isSpecial){
    error(".password")
            passError.innerText = "one special charrector"
       return false;
    }

    success(".password")
         passError.innerText = ""
       passError.style.visibility = "hidden";
       return true;
}





function userHandel(msg) {
    let user = username.value;
    let userArr = [...user];
    let isUserCorrect = userArr.some(chr => chr == " ");
    if (isUserCorrect || user.trim() == "") {
        userError.innerText = msg;
        error(".usern");
         userError.style.visibility = "visible";
         return false;
    } else {
        success(".usern");
        userError.innerText = "";
        userError.style.visibility = "hidden";
        return true;
    }

}



function mailHandel(msg) {
    let mail = email.value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(mail)) {
        mailError.innerText = msg;
        error(".Email");
        mailError.style.visibility = "visible";
        return false;
    } else {
        success(".Email")
        mailError.innerText = "";
        mailError.style.visibility = "hidden";
        return true;
    }

}



function error(msg) {
    document.querySelector(msg).classList.add("berror")
    document.querySelector(msg).classList.remove("bsuccess")
}

function success(msg) {
    document.querySelector(msg).classList.remove("berror");
    document.querySelector(msg).classList.add("bsuccess")
}


myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if( userHandel("Invalid username") &&
    mailHandel("Invalid mail id") &&
    passwordHandel() &&
    cpasswordHandel("password is not match")
){
    alert("successfully Sign Up");
}
})