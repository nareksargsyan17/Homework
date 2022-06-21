"use strict";

let arr = [];
let i = 0;
let randomNumber = Math.ceil(Math.random()*15);
while(i<randomNumber){
	arr[i] = i*3+randomNumber/5;
	i++;
}
console.log(arr);
let p = Math.PI;
let count = 1;
while(p>count){
	console.log(p*p/count);
	count+= 0.3;
}

let arr1 = [1,5,8,7,6,5,47,45,12,54,78,96,47,25,1,3];
i = 1;
let max  = arr1[0];
while(i<arr1.length){
	if(max<arr1[i]){
		max = arr1[i];
	}
	i++;
}
console.log(max);

let str = "Hovhannes Tumanyan";
i = 0;
while(i<str.length){
	if(str[i]==="T"){
		console.log(i);
	}
	i++;
}


let numm = 57;
i = 0;
while(i<numm){
	console.log();
	i++;
}

let arr2 = [2,5,8,-7,0,9,-7,8,8,4,6,-58,0,-98,7,9,5,4,58];
let sum = 0;
count = 0;
for(let i = 0;i<arr2.length;i++){
	if(arr2[i]>0){
		sum = sum + arr2[i];
		count ++;
	}
}
let middle = sum/count;
console.log(middle);


count = 0;
for(let i = 0;i<arr2.length; i++){
	if(arr2[i]%2===0){
		count++;
	}
}
console.log(count);
let j=1;
let x=[0,1];
for(let i = 0; i<50; i++){
	x[i+2]=x[i]+x[j];
	j++;
}

for(let i = 0;i<arr2.length;i++){
	if(arr2[i]%3===0 && arr2[i]%2===0){
		arr2[i]= "";
	}
}	
console.log(arr2);
let arr3 = [];
for(let i = 0;i<50; i++){
	if((i**2)%5===0){
		arr3[i]=5;
	}else{
	arr3[i]=i;}
}
console.log(arr3);

i = 0;
let num =65;
do{
	++i;
	if(num%i===0){
		num = num-i;
	}else{
		num++;
	}
	console.log(num);
}while(i<num);
