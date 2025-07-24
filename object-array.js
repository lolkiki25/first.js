//array of objects
let students = [
  { name: "boldo", age: 20, grade: 20 },
  { name: "dorjo", age: 15, grade: 30 },
  { name: "tsetsge", age: 30, grade: 100 },
  { name: "bata", age: 10, grade: 50 },
];
function findTopStudent(arr) {
  let topStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (topStudent.grade < arr[i].grade) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}
let manaiDuu = findTopStudent(students);
console.log(manaiDuu);
// findOldStudent
let students1 = [
  { name: "boldo", age: 20, grade: 20, balance: 30 },
  { name: "dorjo", age: 15, grade: 30, balance: 10 },
  { name: "tsetsge", age: 30, grade: 100, balance: 20 },
  { name: "bata", age: 10, grade: 50, balance: 50 },
];
function findOldStudent(arr) {
  let oldStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (oldStudent.age < arr[i].age) {
      oldStudent = arr[i];
    }
  }
  return oldStudent;
}
let manaiAh = findOldStudent(students1);
console.log(manaiAh);

// topBalanceStudent

let students2 = [
  { name: "boldo", age: 20, grade: 20, balance: 30 },
  { name: "dorjo", age: 15, grade: 30, balance: 10 },
  { name: "tsetsge", age: 30, grade: 100, balance: 20 },
  { name: "bata", age: 10, grade: 50, balance: 50 },
];
function findTopStudent(arr) {
  let topStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (topStudent.balance < arr[i].balance) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}
let manai = findTopStudent(students2);
console.log(manai);

//findStudentByAge

let students6 = [
  { name: "boldo", age: 20, grade: 20, balance: 30 },
  { name: "dorjo", age: 15, grade: 30, balance: 10 },
  { name: "tsetsge", age: 30, grade: 100, balance: 20 },
  { name: "bata", age: 3, grade: 50, balance: 50 },
];
function findStudentByAge(arr, age) {
  let studentByeAge = "iim hvn bhgu bna";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      studentByeAge = arr[i];
    }
  }
  return studentByeAge;
}

let manaidu = findStudentByAge(students6, 30);
console.log(manaidu);
// argchlal 2
let students9 = [
  { name: "boldo", age: 20, grade: 20, balance: 30, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10, gender: "male" },
  { name: "tsetsge", age: 30, grade: 100, balance: 20, gender: "female" },
  { name: "bata", age: 3, grade: 50, balance: 50, gender: "male" },
];
function findStudentByAge(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age === age) {
      return arr[i];
    }
  }
}
let manaiAh = findStudentByAge(students9, 30);
console.log(manaiAh);

// dundaj nas oldog function
let students0 = [
  { name: "boldo", age: 20, grade: 20, balance: 30, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10, gender: "male" },
  { name: "tsetsge", age: 30, grade: 100, balance: 20, gender: "female" },
  { name: "bata", age: 30, grade: 50, balance: 50, gender: "male" },
];
function findAvgAge(arr) {
  let totAge = 0;
  for (i = 0; i < arr.length; i++) {
    totAge += arr[i].age;
  }
  return totAge / arr.length;
}
let mnai = findAvgAge(students0);
console.log(mnai);

//nasand hvregchdn dundaj balance
let students10 = [
  { name: "boldo", age: 20, grade: 20, balance: 30 },
  { name: "dorjo", age: 15, grade: 30, balance: 10 },
  { name: "tsetsge", age: 30, grade: 100, balance: 20 },
  { name: "bata", age: 3, grade: 50, balance: 50 },
];
function findMaxBalanceStudent(arr, age, balance) {
  let studentbalance = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      studentbalance = arr[i];
    } else {
      maxBalanceStudent.balance > arr[i];
    }

    return maxBalanceStudent;
  }
}

let manaidu = findMaxBalanceStudent(students10);
console.log(manaidu);
