function DELETE(url) {
	const removeBtns = document.querySelectorAll(".listsBlockItem > [data-rm]");
	if (url != "http://localhost:7777/trash/") {
		const sure = document.querySelector('#sure');
		removeBtns.forEach(elem => {
			elem.addEventListener("click", () => {
				sure.style.display = "block";
				sure.firstElementChild.lastElementChild.addEventListener("click", () => {
					sure.style.display = "none";
				})
				sure.firstElementChild.lastElementChild.previousElementSibling.addEventListener("click", async () => {
					const id = elem.parentElement.firstElementChild.textContent;
					elem.remove();
					await fetch(`${url}${id}`)
						.then(data => data.json())
						.then(data => {
							fetch("http://localhost:7777/trash/", {
								method: "POST",
								headers: {
									"content-type": "application/json"
								},
								body: JSON.stringify({ title: data.title, complete: data.complete })
							})
						})
					await fetch(url + id, {
						method: "DELETE",
						headers: {
							"content-type": "application/json"
						}
					})
				})
			})
		})
	} else {
		const doneBtns = document.querySelectorAll("[data-dn]");
		removeBtns.forEach((elem, index) => {
			elem.addEventListener("click", () => {
				const id = elem.parentElement.firstElementChild.textContent;
				elem.remove();
				fetch(url + id, {
					method: "DELETE",
					headers: {
						"content-type": "application/json"
					}
				})
			})
			doneBtns[index].addEventListener("mouseover", function () {
				this.style.cursor = "no-drop";
				this.style.backgroundColor = "transparent";
			});
		})
	}
}
module.exports = DELETE