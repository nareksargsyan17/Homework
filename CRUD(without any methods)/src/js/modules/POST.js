const {form, screenInput} = require("./UI");

const url = "http://localhost:7777/todo/";
function POST() {
	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		await fetch(url, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({ title: screenInput.value.trim(), complete: false})
		})
		e.target.reset();
	})
}
module.exports = POST