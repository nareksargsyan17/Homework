const url = "http://localhost:7777/todo/";
function DELETE() {
	const removeBtns = document.querySelectorAll(".listsBlockItem > [data-rm]");
	removeBtns.forEach(elem => {
		elem.addEventListener("click", async () => {
			const id = elem.parentElement.firstElementChild.textContent;
			elem.remove();
			console.log(elem);
			await fetch(url + id, {
				method: "DELETE",
				headers: {
					"content-type": "application/json"
				}
			})
		})
	})
}
module.exports = DELETE