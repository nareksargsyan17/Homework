const formData = document.querySelector("#subscribe")
const newUserMail = document.querySelector("#subscribe > input[type='email']");
const subscribe = document.querySelector("#subscribe > input[type='submit']");
const signData = document.querySelector("#sign")
const userMail = document.querySelector("#sign > input[type='email']");
const password = document.querySelector("#sign > input[type='password']");
const sign = document.querySelector("#sign > input[type='submit']");
const messages = {
    success: "Success !",
    failure: "Something is wrong. Please reload page and try again !",
    sign: "You are Welcome!!!",
    notSign: "Your email is not founded!"
}
const message = document.createElement("p");
	message.classList.add("message");
	
    
formData.addEventListener("submit",(e)=>{
    e.preventDefault();
    subscribe.before(message);
    const req = new XMLHttpRequest();
    const data = new FormData(e.target);
    req.open("POST", "server/server.php");
    req.send(data);
    req.addEventListener("load", () => {
        if(req.status == 200){
            message.textContent = messages.success;
            message.style.color = "green";
            newUserMail.style.borderColor = "green";
        }else{
            message.textContent = messages.failure;
            message.style.color = "red";
            newUserMail.style.borderColor = "red";
        }
    });
});
signData.addEventListener("submit",(e)=>{
    e.preventDefault();
    sign.before(message)
	const data = new FormData(e.target);
	const dataObj = {};
	data.forEach((value, key) => {
		dataObj[key] = value;
	});
    console.log(dataObj);
	const req = new XMLHttpRequest();
	req.open("POST", "server/server.php");
	req.setRequestHeader("content-type", "application/json");
	req.send(JSON.stringify(dataObj));
    req.addEventListener("load", () => {
        if(req.status === 200 ){
            message.textContent = messages.success;
            message.style.color = "green";
            userMail.style.borderColor = "green";
        }else if(req.status !== 200){
            message.textContent = messages.failure;
            message.style.color = "red";
            userMail.style.borderColor = "red";
        }else{
            message.textContent = messages.notSign;
            message.style.color = "red";
            userMail.style.borderColor = "red";
        }
    });
});
