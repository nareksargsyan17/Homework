"use strict";

function getRandom(min, max) {
	let num = Math.floor(Math.random() * (max - min)) + min;
	return num;
}
console.log(getRandom(3, 6));

console.log(getFactorial(10));
function getFactorial(x) {
	let factorial;
	if (x > 0) {
		factorial = 1;
	} else {
		factorial = false;
	}
	while (x >= 1) {
		factorial *= x;
		x--;
	}
	return factorial;
}

function getTriangleArea(basis, hight) {
	let area = 0.5 * basis * hight;
	console.log(area);
}
getTriangleArea(5, 8);

function getCircleArea(radius) {
	let area = Math.PI * radius ** 2;
	console.log(area);
}
getCircleArea(2);

function getPythagoras(a, b, c) {
	if (a && b !== undefined) {
		c = Math.sqrt(a ** 2 + b ** 2);
		return c;
	} else if (a && c !== undefined) {
		b = Math.sqrt(c ** 2 - a ** 2);
		return b;
	} else {
		a = Math.sqrt(c ** 2 - b ** 2);
		return a;
	}
}

console.log(getPythagoras(10, 5));
 const isPrimeNumber = function(x) {
	if (x >= 2) {
		if (x % 2 === 0 && x !== 2) {
			return "Not a Prime Number";
		} else if (x % 3 === 0 && x !== 3) {
			return "Not a Prime Number";
		} else if (x % 5 === 0 && x !== 5) {
			return "Not a Prime Number";
		} else if (x % 7 === 0 && x !== 7) {
			return "Not a Prime Number";
		} else {
			return "Prime Number";
		}	
	} else {
		return "Not a Prime Number";
	}
};
isPrimeNumber(23);
const arr = [5, 7, 8, 9, 5, 7, 3, 4, 5, 7, 8, 9, 4, 6, 1, 2, 3];
const getMaxNumber = function (x) {
	let max = x[0];
	for (let i = 1; i < x.length; i++) {
		if (max < x[i]) {
			max = x[i];
		}
	}
	return max;
};
console.log(getMaxNumber(arr));

const arr1 = [-20, 5, 4, 7, 8, 9, 5, 78, -65, 9, 8, 15, 5, 5, 57, 788, 0];
const getRange = function (x) {
	let min = x[0];
	let max = x[0];
	for (let i = 1; i < x.length; i++) {
		if (min > x[i]) {
			min = x[i];
		}
		if (max < x[i]) {
			max = x[i];
		}
	}
	console.log(`This array's range is ${min} to ${max}`);
};
getRange(arr1);

const arr2 = [20, 50, 4, 7, 8, 9, 5, 78, 65, 9, 8, 15, 5, 5, 57, 78, 0];
const getAverageAmount = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let averageAmaount = sum / arr.length;
	return averageAmaount;
};
console.log(getAverageAmount(arr2));

let somePreposition = "A preposition is a word or group of words used before a noun, pronoun, or noun phrase to show direction, time, place, location, spatial relationships, or to introduce an object.";
const findWordsCount = function (str) {
	let count = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			count++;
		}
	}
	return count;
};
console.log(findWordsCount(somePreposition));

const getPrimeNumbersRange = (min, max) => {
	let numbers = [];
	let x ;
	for(let i = min; i <= max; i++){
		x = isPrimeNumber(i);
		if(x === "Prime Number"){
			numbers.push(i);
		}
	}
	return numbers;
};

console.log(getPrimeNumbersRange(5,50));

const getIncomeAccount = (monthlyBudget, monthlyExpenses, monthlyTaxes) => {
	if(monthlyBudget > monthlyExpenses + monthlyTaxes){
		let account = monthlyBudget - (monthlyExpenses + monthlyTaxes);
		return `Your monthly Account is ${account}` ;
	}else{
		return "This month you are have not Account";
	}
};
console.log(getIncomeAccount(5000,2500,1500)); 

const isEvenNumber = (x) => x % 2 === 0? "even":"not even";
console.log(isEvenNumber(20));


const type = (x) => typeof(x);
console.log(type(""));

const mostGoalScorer = (team) => {
	switch(team){
		case "Real Madrid": console.log("Cristiano Ronaldo 450 Goals"); break;
		case "Barcelona": console.log("Lionel Messi 709 Goals"); break;
		case "Manchester United": console.log("Wayne Rooney 253 Goals"); break;
		case "Manchester City": console.log("Sergio Agüero 260 Goals"); break;
		case "PSG": console.log("Edinson Cavani 200 Goals"); break;
		case "Juventus": console.log("Alessandro Del Piero 290 Goals"); break;
		default: console.log("error");
	}
};

mostGoalScorer("Real Madrid");