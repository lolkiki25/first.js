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
function findAvgBalanceStudent(arr) {
  let balanceStudent = 0;
  let count = 0; 
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      balanceStudent += arr[i].balance;
      count++;
    } 
  }
  if (count === 0){
    return 0; 
  }
  return balanceStudent / count;
}

let manaiduuu = findAvgBalanceStudent(students10);
console.log(manaiduuu);


//ergtei gender tooldog function

let students11 = [
  { name: "boldo", age: 20, grade: 20, balance: 30, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10, gender: "male" },
  { name: "tsetsge", age: 30, grade: 100, balance: 20, gender: "female" },
  { name: "bata", age: 3, grade: 50, balance: 50, gender: "male" },
];

function findMaleStudent(arr) {
  let maleStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male") {
      maleStudent++;
    }
  } 
  return maleStudent;
}
let maindu = findMaleStudent(students11);
console.log(maindu);

//suragchdn hedn huwiin emegtei bgag tooldog funtion

let students12 = [
  { name: "boldo", age: 20, grade: 20, balance: 30, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10, gender: "male" },
  { name: "tsetsge", age: 30, grade: 100, balance: 20, gender: "female" },
  { name: "bata", age: 3, grade: 50, balance: 50, gender: "male" },
];
function findFemaleStudents(arr) {
  let femaleStudent = 0;
  let total = arr.length;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender ==="female") {
      femaleStudent++;
    }
  }
  if (total === 0) {
    return 0;
  }
  let percent = (femaleStudent / total) * 100;
  return percent.toFixed(2);
}
let mainduu = findFemaleStudents(students12);
console.log(mainduu);

// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.
let students12 = [
  { name: "boldo", age: 20, grade: 20, balance: 30, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 10, gender: "male" },
  { name: "tsetsge", age: 30, grade: 100, balance: 20, gender: "female" },
  { name: "bata", age: 3, grade: 50, balance: 50, gender: "male" },
];
let data = students12((grade) => {
  return students12.grade < grade;
})
console.log(data);
// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив болгон ялгаж буцаадаг функц бич.

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }

let animals = [
  {
    leg: 4,
    name: "dog",
    height: 10,
  },
  {
    leg: 2,
    name: "chicken",
    height: 10,
  },
  {
    leg: 4,
    name: "cat",
    height: 123,
  },
  {
    leg: 2,
    name: "kangroo",
    height: 145,
  },
];
// [
//   { name: 'dog', height: 10 },
//   { name: 'cat', height: 10 }
// ]
const find4LeggedAnimals = (aasd) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].leg === 4) {
      filteredAnimals[count] = {
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};

const filteredAnimals = find4LeggedAnimals(animals);
console.log(filteredAnimals);
