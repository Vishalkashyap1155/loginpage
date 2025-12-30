let form = document.getElementById("myForm");
let btn = document.getElementById("btn");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let userError = document.getElementById("userError");
let emailError = document.getElementById("mailError");
let passError = document.getElementById("passError");
let cpassError = document.getElementById("cpassError")
let isuserError = true;
let ismailError = true;
let ispasswordError = true;
let iscpasswordError = true; 
let passwordDiv = document.querySelector(".password")
let span = document.getElementById("show")
passwordDiv.addEventListener("click", (e)=>{
    if(e.target.tagName == "SPAN"){
    let input = e.currentTarget.querySelector("input");
    input.type =  input.type === "password" ? "text" : "password";

    if(input.type == "password"){
        span.innerText = "show"
    }else{
        span.innerText = "hide"
    }
    }

    

})

userName.addEventListener("input", ()=>{
    let user = userName.value;

    isuserError = true;
    if(user == ""){
        userError.innerText = "invalid user name no space and blank";
        userError.classList.add("visibility");
        return;
    }else{
        userError.classList.remove("visibility");
    }
    let userArr = [...user];
    let isIncorrect = userArr.some(c => c == "" || c == " ");

    if(isIncorrect){
            document.querySelector(".usern").classList.remove("bsuccess");
    document.querySelector(".usern").classList.add("berror");
        userError.innerText = "invalid user name no space and blank";
        userError.classList.add("visibility");
        return;
    }
    document.querySelector(".usern").classList.remove("berror");

    document.querySelector(".usern").classList.add("bsuccess");
    

});


email.addEventListener("input", ()=>{
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      document.querySelector(".Email").classList.add("berror");

    document.querySelector(".Email").classList.remove("bsuccess");
  ismailError = true;
  let emailinput = email.value.trim();
  if(!emailPattern.test(emailinput)){
    emailError.innerText = "invalid mail id";
        emailError.classList.add("visibility");
        return;
  }else{
    emailError.classList.remove("visibility");
  }
   document.querySelector(".Email").classList.remove("berror");

    document.querySelector(".Email").classList.add("bsuccess");
  ismailError = false;
});

password.addEventListener("input", ()=>{
    let pass = password.value.trim();
    ispasswordError = true;
     document.querySelector(".password").classList.add("berror");

    document.querySelector(".password").classList.remove("bsuccess");
    if(pass.length < 8){
        passError.innerText = "password length should be 8 digit";
        return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    let charectors = [...pass]
    let isLowerCase = charectors.some(chr => chr >= "a" && chr <= "z");
    let isUpperCase = charectors.some(chr => chr >= "A" && chr <= "Z");

    if(!isLowerCase){
               passError.innerText = "Atleast one lowerCase";
        return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    if(!isUpperCase){
               passError.innerText = "Atleast one upperCase";
        return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    let specialChr = ["@", "#", "&", "$"];

    let isSpecail = specialChr.some(chr => pass.includes(chr));

    if(!isSpecail){
        passError.innerText = "Atleat one special charector @, #, $, &";
              return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    let nums = [];

    for(let i = 0; i < 9; i++ ){
        nums[i] = i + 1;
    }

    let isnums = nums.some(num => pass.includes(num));

    if(!isnums){

         passError.innerText = "Atleat one numerical value";
              return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

     document.querySelector(".password").classList.remove("berror");

    document.querySelector(".password").classList.add("bsuccess");
    ispasswordError = false;
})


cpassword.addEventListener("input", ()=>{
    iscpasswordError = true;
     document.querySelector(".confirm").classList.add("berror");

    document.querySelector(".confirm").classList.remove("bsuccess");
    if(cpassword.value.trim() != password.value.trim()){
       cpassError.innerText = "Mismatch from password";
              return cpassError.classList.add("visibility");
    }else{
        cpassError.classList.remove("visibility");
    }

     document.querySelector(".confirm").classList.remove("berror");

    document.querySelector(".confirm").classList.add("bsuccess");
    iscpasswordError = false;
});

form.addEventListener("submit", (e)=>{
    e.preventDefault();

      let user = userName.value;
    isuserError = true;
    if(user == ""){
        userError.innerText = "invalid user name no space and blank";
        userError.classList.add("visibility");
        return;
    }else{
        userError.classList.remove("visibility");
    }
    let userArr = [...user];
console.log(user)
    let isIncorrect = userArr.some(c => c == "" || c == " ");

    if(isIncorrect){
        userError.innerText = "invalid user name no space and blank";
        userError.classList.add("visibility");
        return;
    };


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  ismailError = true;
  let emailinput = email.value.trim();
  if(!emailPattern.test(emailinput)){
    emailError.innerText = "invalid mail id";
        emailError.classList.add("visibility");
        return;
  }else{
    emailError.classList.remove("visibility");
  };

    let pass = password.value.trim();
    ispasswordError = true;
    if(pass.length < 8){
        passError.innerText = "password length should be 8 digit";
        return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    let charectors = [...pass]
    let isLowerCase = charectors.some(chr => chr >= "a" && chr <= "z");
    let isUpperCase = charectors.some(chr => chr >= "A" && chr <= "Z");

    if(!isLowerCase){
               passError.innerText = "Atleast one lowerCase";
        return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    if(!isUpperCase){
               passError.innerText = "Atleast one upperCase";
        return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    let specialChr = ["@", "#", "&", "$"];

    let isSpecail = specialChr.some(chr => pass.includes(chr));

    if(!isSpecail){
        passError.innerText = "Atleat one special charector @, #, $, &";
              return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

    let nums = [];

    for(let i = 0; i < 9; i++ ){
        nums[i] = i + 1;
    }

    let isnums = nums.some(num => pass.includes(num));

    if(!isnums){

         passError.innerText = "Atleat one numerical value";
              return passError.classList.add("visibility");
    }else{
        passError.classList.remove("visibility");
    }

     iscpasswordError = true;
    if(cpassword.value.trim() != password.value.trim()){
       cpassError.innerText = "Mismatch from password";
              return cpassError.classList.add("visibility");
    }else{
        cpassError.classList.remove("visibility");
    }





    alert("form submit successfully")




})


