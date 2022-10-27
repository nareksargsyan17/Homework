const url = "http://localhost:7777/todo/";
function PATCH(data) {
	const doneBtns = document.querySelectorAll("[data-dn]");
	const editeBtns = document.querySelectorAll("[data-up]");
	doneBtns.forEach((btn, index) => {
		btn.addEventListener("click", async () => {
			btn.firstElementChild.src = "icons/end.png";
			if (!data[index].complete) {
				editeBtns[index].firstElementChild.style.display = "none";
				const id = btn.parentElement.firstElementChild.textContent;
				await fetch(url + id, {
					method: "PATCH",
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
module.exports = PATCH