function spread(arrMain, arrForSpread){
  for (let i of arrForSpread){
    arrMain.push(i);
  }
}
const arr = [9, 10, 20];
const arr1 = [5, 6, 8];
const array = [1, 5, 6];
spread(array, arr);
spread(array, arr1);
console.log(array);