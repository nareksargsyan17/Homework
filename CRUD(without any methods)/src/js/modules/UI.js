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
				<img class ="check" src="./icons/end.png">
			</div>
			<div id="nCompleted">
				<img class ="check" src="./icons/done.png">
			</div>
			<div id="trash">
				<img class ="check" src="./icons/delete.png">
			</div>
			<div id="all">
				<img class ="check all checked" src="./icons/all.png">
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
							<img src='./icons/delete.png'>
						</button>
						<button data-dn>
							<img src="${!complete ? './icons/done.png' : './icons/end.png'}">
						</button>
					</div>
				`
	},
	toHTMLTrash(id, title, complete){
		this.listsBlock.innerHTML += `
					<div class="listsBlockItem">
						<span>${id}</span>
						<form id="list">
							<input type = "text" value="${title}" readonly>
						</form>
						<button data-rm>
							<img src='./icons/delete.png'>
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