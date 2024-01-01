const loginContainer = document.querySelector(".login-container")
const signupContainer = document.querySelector(".sign-up-container")

loginContainer.addEventListener("click",()=>{
    loginContainer.classList.add("top")
    signupContainer.classList.add("dull")
})

signupContainer.addEventListener("click",()=>{
    loginContainer.classList.remove("top")
    signupContainer.classList.remove("dull")
})

