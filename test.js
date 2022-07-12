const array = [1, 5, 6, 7];
function func(callback, arr) {
  let item;
  for (let index = 0; index < arr.length; index++) {
    item = arr[index];
    callback(item, index, arr);
    arr[index] = item;
  }
  console.log(arr);
}
func((item, index, arr) => {
  console.log(item + 4);
}, array);

const myObjGym = {
  name: "Extra Gim",
  locationGym: "Erevan",
  phone: "077889966"
}
function copyObj(mainObj) {
  const copyObjGym = {};
  for (let key in mainObj) {
    copyObjGym[key] = mainObj[key];
  }
  return copyObjGym;
}
const copyObjGym = copyObj(myObjGym)
console.log(copyObjGym);
myObjGym.name = "Gym";
console.log(myObjGym);

const bool = {
  open: true,
  close: false
}

const copyBool = Object.assign({}, bool);
bool.close = true;
bool.open = false;
console.log(bool);
console.log(copyBool);

const numbers = {
  num1: 5,
  num2: 25,
  num3: 125
}

const copyNumbers = { ...numbers };
numbers.num1 = 7;
numbers.num2 = 49;
numbers.num3 = 343;
console.log(numbers);
console.log(copyNumbers);

const namesArr = ["Valod", "Karen", "Arkadi"];
function copyArr(mainArr) {
  const copyNamesArr = []
  for (let i in mainArr) {
    copyNamesArr[i] = mainArr[i];
  }
  return copyNamesArr;
}
const copyNamesArr = copyArr(namesArr);
namesArr[0] = "Hrach";
console.log(copyNamesArr);
console.log(namesArr);

const numbersArr = [0, 1, 2, 3, 4, 5];
const copyNumbersArr = numbersArr.slice();
console.log(copyNumbersArr);
numbersArr[0] = 27;
console.log(numbersArr);

const mixedArr = [true, 5, "sss", {}, []];
const copyMixedArr = [...mixedArr];
console.log(copyMixedArr);
mixedArr[3] = () => { };
console.log(mixedArr);

const myArr = ["SSSA", 45, 78, true];
function myArrFunc(...arg) {
  console.log(arg);
}
myArrFunc(myArr);

const str = "abcdefghjklmnopqrstuvwxyz";
function mySplit(str) {
  const arr = [];
  for (let i in str) {
    arr[i] = str[i]
  }
  return arr;
}
console.log(mySplit(str));
const arr = ["e", "k", "Ll", "w", "z", "a", "c", "g", "a", "L"];
console.log(arr);
function mySort(arr) {
  let k = 0;
  let min = arr[k];
  let i = 1;
  let j;
  let c;
  debugger;
  while (i < arr.length) {
    j = i;
    while (j < arr.length) {
      if (min >= arr[j]) {
        min = arr[j];
        c = j;
      }
      if (j == arr.length - 1) {
        if (min == arr[c]) {
          arr[c] = arr[k];
        }
        arr[k] = min;
        k++;
        min = arr[k];
      }
      j++;
    }
    i++;
  }
  return arr;
}
console.log(mySort(arr));

