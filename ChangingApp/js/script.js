const buyInp = document.querySelector("#have > input");
const saleInp = document.querySelector("#can > input");
const buyVal = document.querySelector("#haveSel");
const saleVal = document.querySelector("#canSel");
buyInp.addEventListener("input", function(){
    const req = new XMLHttpRequest();
    req.open("GET", "../db/db.json");
    req.setRequestHeader("content-type", "application/json");
    req.send();

    req.addEventListener("readystatechange", () => {
        if(req.readyState === 4){
            const data = JSON.parse(req.response);
            if(saleVal.value == "AMD"){
                saleInp.value =(
                    parseFloat(buyInp.value)
                    * parseFloat(data[buyVal.value].buy)
                ).toFixed(2);
            }else if(saleVal.value != "AMD" && buyVal.value != "AMD"){
                saleInp.value =( 
                    parseFloat(buyInp.value)
                * parseFloat(data[buyVal.value].buy)
                / parseFloat(data[saleVal.value].sale)
                ).toFixed(2);
            }
            else{
                saleInp.value = (
                    parseFloat(buyInp.value)
                    / parseFloat(data[saleVal.value].sale)
                ).toFixed(2);
            }
        }
    })
})