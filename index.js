"use strict";

const app = {
	restaurantDetails: [
		{ address: "Երևան, Թումանյան 14" },
		{ telNumber: "015 12-23-45" },
		{ mail: "info@template.am" },
		{ facebook: "http://facebook.com/" },
		{ instagram: "http://instagram.com/" },
		{ type: "Ռեստորան" },
		{ isDelivery: true },
		{ isOpen: true }
	],
	restaurantStaff: [
		{ security: "Էդգար Գեվորգյան" },
		{ security: "Արսեն Ավագյան" },
		{ waiter: "Մելքոն Դանիելյան" },
		{ waiter: "Ալիսա Պողոսյան" },
		{ waiter: "Նելլի Դավթյան" },
		{ waiter: "Քրիստինե Արսենյան" },
		{ barman: "Տիգրան Ռուբենյան" },
		{ barman: "Անի Առուստամյան" },
		{ cook: "Կարինե Տոնոյան" },
		{ cook: "Արտակ Ադամյան" },
		{ administrator: "Լիկա Ավագյանց" },
		{ courier: "Սամսոն Խաչատրյան" },
		{ hostess: "Ալիսա Սուրենյանց" },
		{ customer: "Մանե Սարգսյան" }
	],
	restaurantMenu: [
		{
			type: "Տաք ուտեստներ",
			item1: "Խոզի Խորոված",
			item2: "Հավի Խորոված",
			item3: "Ճտի Տապակա ֆրիով",
			item4: "Ձկան Խորոված",
			item5: "Թփով Տոլմա",
			item6: "Կաղամբով Տոլմա",
			item7: "Քյուֆթա"
		},
		{
			type: "Աղցաններ",
			item1: "Մայրաքաղաքային",
			item2: "Հունական",
			item3: "Ամառային",
			item4: "Ցեզար",
			item5: "Վինեգրեդ",
			item6: "Խեցգետնով",
			item7: "Բազուկով"
		},
		{
			type: "Ալկոհոլային Խմիչքներ",
			item1: "Օղի",
			item2: "Գինի",
			item3: "Կոնյակ",
			item4: "Վիսկի",
			item5: "Լիկյոր",
			item6: "Տեկիլա",
			item7: "Ռոմ"
		},
		{
			type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
			item1: "Տնական Կոմպոտ",
			item2: "Կոկա-Կոլա",
			item3: "Ֆանտա",
			item4: "Սփրայթ",
			item5: "Սեվըն Ափ",
			item6: "Թան",
			item7: "Լիմոնադ"
		},
		{
			type: "Խմորեղեններ",
			item1: "Միկադո",
			item2: "Սնիկերս",
			item3: "Տղամարդու Իդեալ",
			item4: "Տիրամիսու",
			item5: "Շոկոլադե",
			item6: "Մրգային",
			item7: "Բրաունի"
		}
	],
	callCenter(address, telNumber, isDelivery, isOpen, type) {
		isOpen = app.restaurantDetails[7].isOpen === true ? `
	Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
    ${address = app.restaurantDetails[0].address !== undefined ?
				"Մեր հասցեն է " + app.restaurantDetails[0].address :
				"Կներեք, մենք հասցե չունենք"
			}
    ${telNumber = app.restaurantDetails[1].telNumber !== undefined ?
				"Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber :
				"Կներեք, մենք չունենք հեռախոսահամար"
			}
    ${isDelivery = app.restaurantDetails[6].isDelivery === true ?
				"Այո, կարող ենք իրականացնել Ձեր պատվերը" :
				"Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"
			}
    ${isOpen = "Այո, բաց ենք ժամը 9:00-24:00:"
			}
			` : "Մեր ռեստորանը փակ է, խնդրում ենք զանգահարել ժամը 9:00-24:00, Շնորհակալություն";
		return isOpen;
	},
	isOpened(start, end, now) {
		now >= start && now < end ?
			app.restaurantDetails[7].isOpen = true :
			app.restaurantDetails[7].isOpen = false;
	},
	order(client) {
		return `Բարև ձեզ, քանի որ ${app.restaurantStaff[9].cook}ը այսօր աշխատանքի է ես ցանկանում եմ
			${app.restaurantMenu[0].type}ից 1 բաժին ${client[0]}, 
			${app.restaurantMenu[1].type}ից 1 բաժին ${client[1]},
			${app.restaurantMenu[2].type}ից 1 շիշ ${client[2]},
			${app.restaurantMenu[3].type}ից 1 շիշ ${client[3]}
			${app.restaurantMenu[4].type}ից 1 բաժին ${client[4]}`;
	},
	rnWaiter(randomWaiter, menu2) {
		return ` 
		Բարև ձեզ ես ${randomWaiter}ն եմ:
		Ցավում եմ, բայց գարեջուր չունենք
		կներկայացնեմ մեր մենյուն 
		${menu2},
		ցանկանալու դեպքում հրավիրեք,
		Շնորհակալություն`;
	}
};
let nowDate = new Date();
let nowHours = nowDate.getHours();
app.isOpened(9, 24, nowHours);
const client = app.callCenter();
console.log(client);
let day = nowDate.getDay();
let isCookist;
function select(isCookist, day) {
	switch (day) {
		case 0: isCookist = app.restaurantStaff[9].cook; break;
		case 1: isCookist = app.restaurantStaff[8].cook; break;
		case 2: isCookist = app.restaurantStaff[9].cook; break;
		case 3: isCookist = app.restaurantStaff[8].cook; break;
		case 4: isCookist = app.restaurantStaff[9].cook; break;
		case 5: isCookist = app.restaurantStaff[8].cook; break;
		case 6: isCookist = app.restaurantStaff[9].cook; break;
		default: return "error";
	}
	return isCookist;
}
const cookistSelect = select(isCookist, day);
function getRandomProperty(restaurantMenu) {
	const keys = Object.keys(restaurantMenu);
	return restaurantMenu[keys[Math.ceil(Math.random() * (keys.length - 1))]];
}
if (cookistSelect === "Արտակ Ադամյան") {
	const client1 = [
		getRandomProperty(app.restaurantMenu[0]),
		getRandomProperty(app.restaurantMenu[1]),
		getRandomProperty(app.restaurantMenu[2]),
		getRandomProperty(app.restaurantMenu[3]),
		getRandomProperty(app.restaurantMenu[4])
	];
	console.log(app.order(client1));
}
function randomWaiters(min, max, restaurantStaff) {
	const keys = Object.keys(restaurantStaff);
	return keys[Math.floor(Math.random() * (max - min)) + min];
}
const randomNum = randomWaiters(2, 6, app.restaurantStaff);
const randomWaiter = app.restaurantStaff[randomNum].waiter;
const menus = app.restaurantMenu[2];
function menu(menus) {
	const keys = Object.keys(menus);
	const menu = [];
	for (let i = 0; i < keys.length; i++) {
		menu[i] = menus[keys[i]];
	}
	return menu;
}
const menu2 = menu(menus);
const client2 = app.rnWaiter(randomWaiter, menu2);
console.log(client2);
