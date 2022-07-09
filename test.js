"use strict";

const myTaxiService = {
    serviceName: "Classic",
    carFirms: ["Mercedes", "BMW", "Lexus", "Mitsubishi"],
    openHours: "6.00 - 24.00",
    drivers: ["Karen", "Aram", "Robert", "Vachagan", "Sanasar"],
    speed: ["Quicly", "Medium", "Slowly"],
    corrections() {
        myTaxiService.serviceName = myTaxiService.serviceName.toUpperCase();
        myTaxiService.speed.forEach((element, index, arr) => {
            arr[index] = element.toLowerCase();
        });
    },
    opening() {
        myTaxiService.openHours = myTaxiService.openHours.split(" - ");
        let thisDate = new Date();
        let thisHour = thisDate.getHours();
        if (thisHour <= myTaxiService.openHours[1] && thisHour >= myTaxiService.openHours[0]) {
            myTaxiService.corrections();
            myTaxiService.selectYourCar("      Mitsubishi   ");
        } else {
            console.log("Մենք փակ ենք:");
        }
    },
    selectYourCar(carFirm) {
        carFirm = carFirm.trim();
        for (let i = 0; i < myTaxiService.carFirms.length; i++) {
            if (carFirm == myTaxiService.carFirms[i]) {
                carFirm = myTaxiService.carFirms.slice(i, i + 1);
                myTaxiService.carFirms = myTaxiService.carFirms.join(", ");
                console.log(`${myTaxiService.carFirms} այս մեքենաներից դուք ընտրեցիք ${carFirm}-ը
                Մեքենայի վարորդն է՝ ${myTaxiService.selectDriver()}-ը`);
            }
        }
    },
    selectDriver(driver) {
        driver = myTaxiService.drivers[Math.floor(Math.random() * 5)];
        return driver;
    }
}
myTaxiService.opening();
console.log(myTaxiService);