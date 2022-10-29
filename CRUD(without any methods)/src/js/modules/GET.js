function GET(UI, PATCH, PUT, DELETE, SELECT) {
	SELECT("", UI, PATCH, PUT, DELETE);
	UI.selectMethod();
	const complete = document.querySelectorAll(".check");
	let previus = complete[2];
	complete.forEach(function (item, index) {
		item.parentElement.addEventListener("click", function () {
			previus.classList.remove("checked");
			item.classList.toggle("checked");
			previus = complete[index];
			UI.listsBlock.innerHTML = "";
			if (item.parentElement.id === "completed") {
				SELECT(true, UI, PATCH, PUT, DELETE);
			} else if (item.parentElement.id === "nCompleted") {
				SELECT(false, UI, PATCH, PUT, DELETE)
			} else {
				SELECT("", UI, PATCH, PUT, DELETE);
			}
		})
	})
}
module.exports = GET