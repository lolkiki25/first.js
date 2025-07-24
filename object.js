//let grades = [100, 70, 30, 100, 20, 30, 100, 200, 300];
/*let grades2 = [-10, 70, 330, 100, 202];
function findAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr(i);
  }
  let avg = sum / arr.length;
  return avg;
}
let result = findAvg(grades);
let result2 = findAvg(grades2);
console.log(result);
console.log(result2);
*/

//string ''
//let grades = [100, 70, 30, -100, 20, -30, 100, 200, 300];
function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let sumResult = findSum(grades);
console.log("sum grade =", sumResult);

// find min
//let grades = [100, 70, 30, -100, 20, -30, 100, 200, 300];
function findMinGrade(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let minGrade = findMinGrade(grades);
console.log("minimum grade = ", minGrade);

// max
//let grades = [100, 70, 30, -100, 20, -30, 100, 200, 300];
function findMaxGrade(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      s;
      max = arr[i];
    }
  }
  return max;
}
let maxGrade = findMaxGrade(grades);
console.log("maximum grade = ", maxGrade);
//array dotroh hamgiin bag eyreg toog oloh functiin bich
//arry dotroh buh tegsh toonuudiin dundajiig oloh function bich
let grades = [100, 70, 30, -100, 20, -30, 100, 200, 300];
