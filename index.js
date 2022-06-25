"use strict";
let count = 0;
for (let i = 0; i < 5 * 5; i++) {
	for (let j = 0; j < 5 * 5; j++) {
		console.log(++count);
	}
}

let count1 = 0;
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		for (let k = 0; k < 10; k++) {
			console.log(++count1);
		}
	}
}

let count2 = 0;
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		for (let k = 0; k < 5; k++) {
			for (let l = 0; l < 5; l++) {
				console.log(++count2);
			}
		}
	}
}

let i = 0;
let j = 0;
let i1 = 0;
let j1 = 0;
while (i < 25) {
	++i1;
	while (j < 25) {
		++j1;
		j++;
	}
	j = 0;
	i++;
}
console.log(i1, j1);

i = 0;
j = 0;
let k = 0;
i1 = 0;
j1 = 0;
let k1 = 0;
while (i < 15) {
	++i1;
	while (j < 15) {
		++j1;
		while (k < 15) {
			++k1;
			k++;
		}
		k = 0;
		j++;
	}
	j = 0;
	i++;
}
console.log(i1, j1, k1);

i = 0;
j = 0;
k = 0;
let l = 0;
i1 = 0;
j1 = 0;
k1 = 0;
let l1 = 0;
while (i < 10) {
	++i1;
	while (j < 10) {
		++j1;
		while (k < 10) {
			++k1;
			while (l < 10) {
				++l1;
				l++;
			}
			l = 0;
			k++;
		}
		k = 0;
		j++;
	}
	j = 0;
	i++;
}
console.log(i1, j1, k1, l1);

function calculator(a, calc, b) {
	switch (calc) {
		case "+": console.log(a + b); break;
		case "-": console.log(a - b); break;
		case "*": console.log(a * b); break;
		case "/": console.log(a / b); break;
		case "%": console.log(a - b * parseInt(a / b)); break;
		default: console.log("error");
	}
}

calculator(9, "%", 2);

let result = "";
let midle = 4;
for (let i = 1; i <= 7; i += 2) {
	for (let j = 1; j <= 7; j++) {
		if (j < midle || j >= i + midle) {
			result += " ";
		} else {
			result += "*";
		}
	}
	midle--;
	result += "\n";
}
console.log(result);
