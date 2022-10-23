"use strict";

const root = document.querySelector("#root");

const UI = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Async Application";
		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.textContent = "ADD";
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
}

UI.start();
const url = "http://localhost:7777/todo/";
function GET(url) {
	fetch(url)
		.then(data => data.json())
		.then(data => {
			data.forEach(element => {
				UI.listsBlock.innerHTML += `
					<div class="listsBlockItem">
						<span>${element.id}</span>
						<form id="list">
							<input type = "text" value="${element.title}" readonly>
							<button data-sv type="submit">
								<img src="icons/save.png">
							</button>
						</form>
						<button data-up style="display:${!element.complete ? 'inline-block' : 'none'}">
							<img src="icons/edit.png">
						</button>
						<button data-rm>
							<img src="icons/delete.png">
						</button>
						<button data-dn>
							<img src="${!element.complete ? 'icons/done.png' : 'icons/end.png'}">
						</button>
					</div>
				`
			})
			return data;
		})
		.then(data => PATCH(url, "PATCH", data))
		.then(data => DELETE(url, "DELETE"))
		.then(data => PUT(url, "PUT"))
}
GET(url);
function POST(url, method, body) {
	fetch(url, {
		method: method,
		headers: {
			"content-type": "application/json"
		},
		body: body
	})
}
UI.form.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = UI.screenInput.value.trim();
	POST(url, "POST", `${JSON.stringify({ title: val, complete: false })}`)
})

function DELETE(url, method) {
	const removeBtns = document.querySelectorAll(".listsBlockItem > [data-rm]");
	removeBtns.forEach(elem => {
		elem.addEventListener("click", () => {
			const id = elem.parentElement.firstElementChild.textContent;
			elem.remove();
			fetch(url + id, {
				method: method,
				headers: {
					"content-type": "application/json"
				}
			})
		})
	})
}

function PUT(url, method) {
	const editeBtns = document.querySelectorAll("[data-up]");
	const saveBtns = document.querySelectorAll("[data-sv]");
	const input = document.querySelectorAll(".listsBlockItem > form > input");
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
				const id = btn.parentElement.firstElementChild.textContent;
				fetch(url + id, {
					method: method,
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({title: val})
				})
			})
		})
	})
}


function PATCH(url, method, data) {
	const doneBtns = document.querySelectorAll("[data-dn]");
	const editeBtns = document.querySelectorAll("[data-up]");
	doneBtns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			btn.firstElementChild.src = "icons/end.png";
			if (!data[index].complete) {
				editeBtns[index].firstElementChild.style.display = "none";
				const id = btn.parentElement.firstElementChild.textContent;
				fetch(url + id, {
					method: method,
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ ...data[index], complete: true })
				})
			}
		})
		if (data[index].complete) {
			btn.addEventListener("mouseover", function () {
				this.style.cursor = "no-drop"
				this.style.backgroundColor = "transparent";
			});
		}
	})
}