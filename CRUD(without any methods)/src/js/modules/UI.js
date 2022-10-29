const root = document.querySelector("#root");

const UI = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	selectBlock: document.createElement("div"),
	listsBlock: document.createElement("div"),

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Async Application";
		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.innerHTML = "<img src='./icons/add.png'>"
		this.screenAddBtn.id = "screenAddBtn";
		this.selectBlock.id = "selectBlock";
		this.listsBlock.id = "listBlock";
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form,this.selectBlock, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},
	selectMethod(){
		this.selectBlock.innerHTML=`
			<div id="completed">
			<p>Completed </p>
			<div class ="check"></div>
			</div>
			<div id="nCompleted">
			<p>Not Completed </p>
			<div class ="check"></div>
			</div>
			<div id="all">
			<p>All</p>
			<div class ="check checked"></div>
			</div>
		`
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