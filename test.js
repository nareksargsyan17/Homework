function someDate(someDay, someMonth) {
    const text = document.querySelector("#h2")
    const date = new Date();
    const newDate = new Date();
    newDate.setMonth(someMonth);
    newDate.setDate(someDay);
    if (newDate > date) {
        newDate.setFullYear(2021);
    }
    let day = (date - newDate) / 1000 / 3600 / 24;
    let hour = 0;
    let minutes = 0;
    let seconds = 1;
    const timer = setInterval(() => {
        seconds--;
        if (day == 0 && hour == 0 && minutes == 0 && seconds == 0) {
            console.log("done");
            clearInterval(timer)
        } else {
            if (hour == 0 && minutes == 0 && seconds == 0) {
                hour = 24;
                day--;
            }
            if (minutes == 0 && seconds == 0) {
                minutes = 60;
                hour--;
            }
            if (seconds == 0) {
                seconds = 60;
                minutes--;
            }
        }
        text.textContent = `
        ${day} : ${hour} : ${minutes} : ${seconds}
        `
    }, 1000)
}
someDate(31, 7)