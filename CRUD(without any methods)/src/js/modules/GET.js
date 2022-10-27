const url = "http://localhost:7777/todo/";
async function GET(UI,PATCH,PUT,DELETE) {
	return await fetch(url)
		.then(data => data.json())
		.then(data => {
            console.log(data);
			data.sort(function(a,b){
				return a.complete < b.complete ? 1 : a.complete > b.complete ? -1 : 0;
			})
			data.forEach(element => {
				UI.toHTML(element.id, element.title, element.complete)
			})
			
			return data;
		})
		.then(data => {
			PATCH(data);
			PUT();
			DELETE();
		})
}
module.exports = GET