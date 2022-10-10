"use strict"


//1
const prom = new Promise((resolve, reject)=>{
    let x = 0;
    let time = 0;
    let interval = setInterval(()=>{
        x++;
        time += 1000;
        if(time > 20000){
            clearInterval(interval);
            if(x >= 21){
                resolve("done!");
            }else{
                reject(new Error("ERORRR"))
            }
        }
    },100);
    
})
prom.then(result => console.log(result))
.catch(error => console.log(error));


//2
const goals = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(ms), ms);
	});
}

goals(7500).then(ms => console.log(`${ms/100}-րդ րոպեին գոլի հեղինակ դարձավ Ռոնալդուն`));

Promise.all([goals(1000), goals(2000), goals(4000), goals(9400)])
.then(ms => console.log(`Խաղն ավարտվել է ${Math.max(...ms)/100}-րդ րոպեին`));

Promise.race([goals(500), goals(2000), goals(4000), goals(10000)])
.then(ms => console.log(`Առաջին գոլը գրանցվել է ${ms/100}-րդ րոպեին`));