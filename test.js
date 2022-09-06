const body = document.body;
console.dir(window);
const randomColors = function () {
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return [r, g, b];
}
window.addEventListener("scroll", () => {
	if (parseInt(window.scrollY) % 100 == 0) {
		body.style.backgroundColor = `rgb(${randomColors()[0]}, ${randomColors()[1]}, ${randomColors()[2]})`
		document.querySelector("h1").style.color = `rgb(${randomColors()[0]}, ${randomColors()[1]}, ${randomColors()[2]})`
	}
	document.querySelector("img").addEventListener("click", () => {
		window.scrollTo(0, 0)
	})
})
