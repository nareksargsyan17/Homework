const root = document.querySelector("#root")
const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenBtnAdd = document.createElement("button");
const rootForm = document.querySelector("#rootForm")
const listsBlock = document.createElement("div");

screenBlock.id = "screenBlock";
screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenBtnAdd.textContent = "ADD";

listsBlock.id = "listsBlock";

rootForm.prepend(screenBlock);
root.append(listsBlock);
screenBlock.append(screenInput, screenBtnAdd);
const url = "http://localhost:7777/todo/";
function fetching(url, todoID = "", method, fBody = "") {
	fetch(todoID == "" ? url : url + todoID, {
		method: `${method}`,
		headers: {
			"content-type": "application/json"
		},
		body: fBody
	});
}
rootForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();
	if (val !== "") {
		fetching(url, "", "POST", `${JSON.stringify({ title: val, complete: false })}`);
	}
	this.reset();
});
console.log();
fetch(url)
	.then(data => data.json())
	.then(data => {
		data.forEach(todoObj => {
			listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<div id="forInp">
				<form id="form">
				<span>${todoObj.id}</span>
				<input type="text" value="${todoObj.title}" readonly>
					<button data-sv type="submit">
						<img src="icons/save.png">
					</button>
				</form>
					<button data-up style="display:${!todoObj.complete ? 'inline-block' : 'none'}">
					<img src="icons/edit.png">
					</button>
					
					<button data-rm>
						<img src="icons/delete.png">
					</button>

					<button data-dn>
						<img src="${!todoObj.complete ? 'icons/done.png' : 'icons/end.png'}">
					</button>
				</div>
			</div>
		`;
		});
		return data;
	})
	.then(data => {
		const removeBtns = document.querySelectorAll("[data-rm]");
		removeBtns.forEach(btn => {
			btn.addEventListener("click", function (e) {
				e.preventDefault();
				this.parentElement.parentElement.remove();
				data.forEach(todoObj => {
					const fakeId = this.parentElement.firstElementChild.firstElementChild.textContent;
					if (parseInt(fakeId) === todoObj.id) {
						fetching(url, todoObj.id, "DELETE");
					}
				});
			});
		})
		return data
	})
	.then(data => {
		const editeBtns = document.querySelectorAll("[data-up]");
		const saveBtns = document.querySelectorAll("[data-sv]");
		const input = document.querySelectorAll("#forInp >form> input");
		let val;
		editeBtns.forEach((btn, index) => {
			btn.addEventListener("click", function () {
				btn.style.display = "none";
				saveBtns[index].style.display = "inline-block"
				console.log(input[index].parentElement);
				input[index].removeAttribute("readonly");
				input[index].style.border = "1px solid #5e5656";
				input[index].parentElement.addEventListener("submit", function (e) {
					e.preventDefault();
					btn.style.display = "inline-block";
					saveBtns[index].style.display = "none";
					input[index].setAttribute("readonly", "");
					input[index].style.border = "0.5px solid transparent";
					val = input[index].value;
					if (val != "") {
						data.forEach(todoObj => {
							const fakeId = input[index].previousElementSibling.textContent;
							if (parseInt(fakeId) === todoObj.id) {
								fetching(url, todoObj.id, "PATCH", `${JSON.stringify({ title: val })}`)
							}
						});
					}
				})
			});
		})
		return data;
	})
	.then(data => {
		const doneBtns = document.querySelectorAll("[data-dn]");
		doneBtns.forEach((btn, index) => {
			btn.addEventListener("click", (e) => {
				btn.firstElementChild.src = "icons/end.png";
				if (!data[index].complete) {
					btn.parentElement.firstElementChild.style.display = "none";
					fetching(url, data[index].id, "PUT", `${JSON.stringify({ ...data[index], complete: true })}`)
				}
			})
			if (data[index].complete) {
				btn.addEventListener("mouseover", function () {
					this.style.cursor = "no-drop"
					this.style.backgroundColor = "transparent";
				});
			}
		})
	})