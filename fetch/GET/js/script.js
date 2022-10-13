const posts = "https://jsonplaceholder.typicode.com/posts";
const comments = "https://jsonplaceholder.typicode.com/comments";
const photos = "https://jsonplaceholder.typicode.com/photos";
const post = document.querySelector("#post");
const comment = document.querySelectorAll(".comment");
const photo = document.querySelectorAll("#photo > div")
let id;
function randomNum(count){
    return Math.floor(Math.random()*count+1);
}
fetch(`https://jsonplaceholder.typicode.com/posts/${randomNum(100)}`)
.then(data => data.json())
.then(data => {
    post.children[0].textContent=data.title.toUpperCase();
    post.children[1].textContent=data.body;
    id = data.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(data => data.json())
    .then(data => data.forEach((element, index) => {
        comment[index].children[0].textContent = element.name.toUpperCase();
        comment[index].children[1].textContent = element.body;
        comment[index].children[2].textContent = element.email;
    }))
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(data => data.json())
    .then(data => data.forEach((elem, ind)=>{
        console.log(photo[ind]);
        photo[ind].style.backgroundImage = `url(${elem.url})` 
    }))
})
console.log(id);