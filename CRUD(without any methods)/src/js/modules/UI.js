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
	toHTML(id, title, complete){
		this.listsBlock.innerHTML += `
					<div class="listsBlockItem">
						<span>${id}</span>
						<form id="list">
							<input type = "text" value="${title}" readonly>
							<button data-sv type="submit">
								<img src="./icons/save.png">
							</button>
						</form>
						<button data-up style="display:${!complete ? 'inline-block' : 'none'}">
							<img src="./icons/edit.png">
						</button>
						<button data-rm>
							<img src="./icons/delete.png">
						</button>
						<button data-dn>
							<img src="${!complete ? './icons/done.png' : './icons/end.png'}">
						</button>
					</div>
				`
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
}
module.exports = UI;