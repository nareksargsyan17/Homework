const header = document.querySelector("#header");
console.log(header);
header.style.backgroundColor = "grey";
const menu = document.querySelectorAll(".menu");
console.log(menu);
menu.forEach(element => {
    element.style.border = "2px solid black";
});
const dives = document.querySelector("#dives");
dives.style.borderRadius = "5%";
const childrens = document.querySelectorAll(".childrens");
childrens.forEach(element => {
    element.style.borderRadius = "10% 100%";
    element.style.textDecoration = "underline";
    element.style.fontSize = "20px";
    element.style.textAlign = "right";
    element.style.color = "red";
});
const menuNames = document.querySelectorAll("[name = 'menuNames']");
menuNames.forEach(element => {
    element.style.color = "white";
});
let lorem = document.querySelector("p[name = 'lorem']");
console.log(lorem.textContent);
let loremText = lorem.textContent.trim();
loremText = loremText.split("");

console.log(loremText);
for(let i = 0; i < loremText.length; i++){
    if(loremText[i] == " "){
        loremText[i+1] = loremText[i+1].toUpperCase();
        console.log(loremText[i+1]);
    }
}
console.log(loremText.join(""));
lorem.style.color = "red";
const numbers = document.querySelector("#numbers");
numbers.style.color = "blue";
numbers.style.backgroundColor = "aliceblue";
numbers.style.display = "flex";
numbers.style.flexDirection = "column-reverse"
const num = document.querySelectorAll(".num");
for(let i = 0; i<num.length; i++){
    num[i].style.color = "orange";
}

