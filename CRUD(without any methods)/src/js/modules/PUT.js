const url = "http://localhost:7777/todo/";
function PUT() {
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
			input[index].parentElement.addEventListener("submit", async function (e) {
				e.preventDefault();
				btn.style.display = "inline-block";
				saveBtns[index].style.display = "none";
				input[index].setAttribute("readonly", "");
				input[index].style.border = "0.5px solid transparent";
				val = input[index].value;
				const id = btn.parentElement.firstElementChild.textContent;
				await fetch(url + id, {
					method: "PUT",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({title: val, complete: false})
				})
			})
		})
	})
}
module.exports = PUT;