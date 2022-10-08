const formData = document.querySelector("#subscribe")
const userMail = document.querySelector("#subscribe > input[type='email']");
const subscribe = document.querySelector("#subscribe > input[type='submit']");
formData.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Dd");
})