// forEach
const arr1 = [5, 10, 15, 25, 55, 65, 80];
const arr2 = ["a", "b", "g", "c", "d"];
arr1.forEach((val, index, arr) => {
	arr[index] = val / 5;
});
console.log(arr1);
arr2.forEach((val, index, arr) => {
	arr[index] = val + "?";
})
console.log(arr2);

// my forEach function
function forEach(cbfunc, arr) {
	for (let i = 0; i < arr.length; i++) {
		cbfunc(arr[i], i, arr);
	}
}

forEach((val, index, arr) => {
	arr[index] = val * 5;
}, arr1)

console.log(arr1);
// filter
const arr3 = [9, 3, 8, 7, 8, 7, 8, 9, 0, 8, 7, 4, 5, 2, 5, 4, 5, 6, 2, 4, 7, 9, 8];
const filtaredArr1 = arr3.filter(val => val % 3 == 0)
const filtaredArr2 = arr3.filter(val => val * 5 < 80)
const filtaredArr3 = arr3.filter((val, index, arr) => {
	return val > arr[index + 1];
})
//գտնել այն զանգվածի արժեքները, որոնք այդ պահին գեներացված
//ինչ որ պատահական թվի են հավասար(տվյալ զանգվածի միջակայքից)
const max = Math.max(...arr3);
const min = Math.min(...arr3);
function rand(min, max) {
	return Math.round((Math.random() * (max - min)) + min)
}
const filtaredArr4 = arr3.filter(val => val === rand(min, max))
const filtaredArr5 = arr3.filter(val => val ** 2 <= val * 4)
console.log(filtaredArr4, filtaredArr5);
// my filter function
function filter(cbfunc, arr) {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		if (cbfunc(arr[i], i, arr)) {
			res.push(arr[i])
		}
	}
	return res;
}
const filtaredArr6 = filter((val, index, arr) => {
	return val > arr[index + 1];
}, arr3);
console.log(filtaredArr6, filtaredArr3);


//map
const arr4 = [
	{ id: 1, salary: 100000},
	{ id: 2, salary: 120000},
	{ id: 3, salary: 200000},
	{ id: 4, salary: 150000},
	{ id: 5, salary: 90000},
]
const map1 = arr4.map(val => {
	val.salary += 10000;
	return val
});
const map2 = arr4.map(val => {
	val.salary < 120000? val.salary += 10000 : val.salary;
	return val;
});
const map3 = arr4.map(val => {
	val.id % 2 == 0? val.salary += 15000 : val.salary -= 5000;
	return val;
})
const map4 = arr4.map(val =>{
	val.age = 25 - val.id;
	return val;
})
const map5 = arr4.map(val => val.age += 3)
console.log(arr4);

// my map function
function map(cbfunc, arr){
	const newArr = [];
	for(let i = 0; i < arr.length; i++){
		newArr.push(cbfunc(arr[i], i, arr));
	}
	return newArr;
}
let newMap = map(val => val.salary, arr4)
console.log(newMap);

//reduce
const arr5 = [5, 25, 87, 9, 66, 77, 55, 76, 54, 63, 21, 79];
const arr6 = ["a", "b", "d", "r", "h"];
const reduce1 = arr5.reduce((p, n) => {
	return n + p;
}, 10)
const reduce2 = arr5.reduce((p, n) => p * n, 0);
const reduce3 = arr6.reduce((a, b) => {
	return a + b;
}, [])
const reduce4 = arr5.reduce((p, n) => {
	return n % 2 == 0 ? p += ++n : p += --n;
});
const reduce5 = arr6.reduce((p, n) => {
	return p + n + "abc"
})
const reduce6 = arr5.reduce((p, n) => p *= 2)
const reduce7 = arr5.reduce((p, n) => p += n - p * 2);
const reduce8 = arr6.reduce((p, n) => {
	p = p + n + 15;
	return p
})
console.log(reduce1, reduce2, reduce3, reduce4, reduce5, reduce6, reduce7, reduce8);

//my reduce function

function reduce(cbfunc, arr, start) {
	start != undefined ? res = start : res = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (res == start) {
			i = 0;
		}
		res = cbfunc(res, arr[i], i, arr)
	}
	return res;
}
const myReduce = reduce((a, b) => {
	return a + b;
}, arr5)
console.log(myReduce);


// every and some
const arr7 = [8, 7, 9, 8, 7, 96, 3, 25, 8, 6, 65, 5, 66, 9, 98];
const some1 = arr7.some(val => val == 88);
const some2 = arr7.some(val => val >= 100);
const every1 = arr7.every(val => val > 1);
const every2 = arr7.every(val => val < 98);
console.log(some1, some2, every1, every2);

//fill
const arr8 = [7, 96, 3, 25, 8, 6, 65, 5, 66];
arr8.fill(10**2, 1, 8);
arr8.fill(12, 0, 2)
console.log(arr8);

//find
const arr9 = [9, 3, 8, 7, 8, 7, 8, 9, 0, 8, 7, 4]
const finded1 = arr9.find(val => val >= 9);
const finded2 = arr9.find(val => val**2 == 9)
console.log(finded1);
