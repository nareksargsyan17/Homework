const div = document.querySelector("#div");
div.style.marginTop = "200px";
div.style.marginLeft = "700px";
console.dir(window);
addEventListener('keydown', (e) => {
    switch (e.key) {
        case 's': for (let i = 0; i < 50; i++) {
            if (parseInt(div.style.marginTop) + div.clientHeight > window.innerHeight) {
                div.style.marginTop = `${window.innerHeight - div.clientHeight}px`;
            } else {
                div.style.marginTop = `${parseInt(div.style.marginTop) + 1}px`;
            }
        }; break;
        case 'w': for (let i = 0; i < 50; i++) {
            if (parseInt(div.style.marginTop) < 0) {
                div.style.marginTop = `0px`;
            } else {
                div.style.marginTop = `${parseInt(div.style.marginTop) - 1}px`;
            }
        }; break;
        case 'a': for (let i = 0; i < 50; i++) {
            if (parseInt(div.style.marginLeft) < 0 || parseInt(div.style.marginLeft) > window.innerWidth) {
                div.style.marginLeft = '0px';
            } else {
                div.style.marginLeft = `${parseInt(div.style.marginLeft) - 1}px`;
            }
        } break;
        case 'd': for (let i = 0; i < 50; i++) {
            if (parseInt(div.style.marginLeft) + div.clientWidth > window.innerWidth) {
                div.style.marginLeft = `${window.innerWidth - div.clientWidth}px`;
            } else {
                div.style.marginLeft = `${parseInt(div.style.marginLeft) + 1}px`;
            }
        } break;
    }
})
