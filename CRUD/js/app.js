const root = document.querySelector("#root");

const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenBtnAdd = document.createElement("button");

const listsBlock = document.createElement("div");

screenBlock.id = "screenBlock";
screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenBtnAdd.textContent = "ADD";

listsBlock.id = "listsBlock";

root.prepend(screenBlock);
root.append(listsBlock);
screenBlock.append(screenInput, screenBtnAdd);
const url = "http://localhost:7777/todo/";

root.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch(url, {
			method: "POST",
			headers: {
				"content-type" : "application/json"
			},
			body: JSON.stringify({title: val})
		});
	}

	this.reset();
});

fetch(url)
.then(data => data.json())
.then(data => {
	data.forEach(todoObj => {
		listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<p>
					<span>${todoObj.id}</span>
					${todoObj.title}
				</p>
                <button data-up>
                    <img src="icons8-edit-24.png">
                </button>
				<button data-rm>
                    <img src="icons8-delete-30.png">
                </button>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtnsArray = document.querySelectorAll("[data-rm]");

	removeBtnsArray.forEach(btn => {
		btn.addEventListener("click", function () {
			this.parentElement.remove();

			data.forEach(todoObj => {
				const fakeId = this.previousElementSibling.firstElementChild.textContent;

				if (parseInt(fakeId) === todoObj.id) {
					fetch(url+todoObj.id, {
						method: "DELETE",
						headers: {
							"content-type" : "application/json"
						}
					});
				}
			});
		});
	})
    return data
})
.then(data =>{
    const editeBtnsArray = document.querySelectorAll("[data-up]");
	let val;
    editeBtnsArray.forEach(btn =>{
        btn.addEventListener("click", function () {
			if(this.nextElementSibling.nextElementSibling !== null){
				document.querySelector("#editDiv").remove();
			}else{
				btn.parentElement.insertAdjacentHTML("beforeend", `
				<div id="editDiv">
				<input type="text" class="edit" placeholder="Type Title">
				<button class="editBtn">EDIT</button>
				</div>`);
				document.querySelector(".editBtn").addEventListener("click", function(){
					val = this.previousElementSibling.value;
					if(val != ""){
						data.forEach(todoObj => {
							const fakeId = btn.parentElement.firstElementChild.textContent;
							if (parseInt(fakeId) === todoObj.id) {
								fetch(url+todoObj.id, {
									method: "PATCH",
									body: JSON.stringify({
										title: `${val}`,
									}),
									headers: {
										"content-type" : "application/json"
									}
								});
							}
						});
					}
				})
			}
		});
    })
})