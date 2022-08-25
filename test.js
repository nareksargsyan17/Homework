const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
let y2, x1, y1, x2;
div1.addEventListener("touchmove", ev);
div2.addEventListener("touchmove", ev);
function ev(e) {
    e.target.style.cssText = `
    transform : translateX(${e.touches[0].pageX}px) translateY(${e.touches[0].pageY}px);
    `
    if (e.target.id == "div1") {
        x1 = e.touches[0].pageX;
        y1 = e.touches[0].pageY;
        if (x1 + 100 >= x2 && x1 <= x2 + 100 && y1 + 100 >= y2 && y1 <= y2 + 100) {
            div1.style.background = "yellow"
            div2.style.background = "green"
        } else {
            div2.style.background = "yellow"
        }
    } else {
        x2 = e.touches[0].pageX;
        y2 = e.touches[0].pageY;
        if (x2 + 100 >= x1 && x2 <= x1 + 100 && y2 + 100 >= y1 && y2 <= y1 + 100) {
            div1.style.background = "yellow"
            div2.style.background = "green"
        } else {
            div1.style.background = "green"
        }
    }
}

// 2 harc
const someDiv = document.querySelector("#someDiv");
someDiv.addEventListener("dragstart", () => {
    console.log("onDrag");
})
someDiv.addEventListener("drag", () => {
    console.log("Draging..");
})
someDiv.addEventListener("dragend", (e) => {
    someDiv.style.cssText = `
    transform: translateX(${e.pageX -100}px) translateY(${e.pageY}px)`
    console.log("dragEnd");
})
