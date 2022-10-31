const url = "http://localhost:7777/todo/";
function SELECT(state = "", UI, PATCH, PUT, DELETE) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            if (state === "") {
                return data.sort(function (a, b) {
                    return a.complete < b.complete ? 1 : a.complete > b.complete ? -1 : 0;
                })
                    .map(element => {
                        UI.toHTML(element.id, element.title, element.complete)
                        return element;
                    })
            } else {
                return data.filter(elem => elem.complete === state)
                    .map(element => {
                        UI.toHTML(element.id, element.title, element.complete)
                        return element;
                    })
            }
        }).then(data => {
            PATCH(data);
            PUT();
            DELETE(url);
        })
}
module.exports = SELECT;