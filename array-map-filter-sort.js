// Map method
// array iig ooriig n oorchilohgui
// map neg function avna, tuhain function bas neg utga avna
// map method shine array uusgej ogno, shine array n huuchin array tei length ijil baina
// yamar array uusgehee map iin return eer shiidne

let ages = [10, 203, 43, 30, 50];
let ageSort = [10, 30, 43, 50, 203];

let duu = ages.map((age) => {
  return age % 2 == 0;
});
console.log(duu);

let data1 = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];

let newStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log(data1);
console.log(newStudents);

// filter
// filter ooriig n oorchlohgui
// shine array uusgej ogno
// filter method neg function avna, tuhain function neg utga avna
// return deer true baih buh element iig tsugluulaad array butsaana
const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(ages);
console.log(filtered);

// sort method
// sort method function avna
// avjgaa function n 2 utga orj irne
// return deer + esve - too butsaana
// sort method n array-iig ooriig n oorchlono

console.log("=========== Sort ============");
let ah = ages.sort((age2, age1) => {
  return age2 - age1;
});
console.log(ages);

// console.log(ages);
// ages.sort((a, b) => {
//   return -1;
// });
// console.log(ages);

console.log(students);
students.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log(students);

students.sort((student2, student1) => {
  if (student1.name > student2.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log(students);






// nasand hursen suragchiig filterlej oloh function bich
let data = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];

function findAdultStudents(data) {
    let filtered = data.filter((student) => {
        return student.age > 18;
    });
    return filtered;
}
let result = findAdultStudents(data);
console.log("bodlog 1 = ", result);

// gender ogonguut tuhain gendereer filterlej ogoh function bich

let data2 = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];
function findByGender(data2, gender) {
const filtereddata = data2.filter((student) => {
        return student.gender === gender;
    });
    return filtereddata;
}
let result1 = findByGender(data2, "male");
console.log(result1);


// nasaar n sortloh function bich

let data3 = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];
data3.sort((student2, student1) => {
  return student1.age - student2.age; 
});
console.log(data3);
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich
let data4 = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];

function findAdultStudents(data4, balance) {
    let filtered = data4.filter((student) => {
        return student.balance > balance;
    });
    return filtered;
}
let du = findAdultStudents(data4, 222);
console.log("bodlog 4 = ", du);
// classCode gesen field nemeh function bich
let data5 = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];
let newData = data5.map((student) => {
  return {
    ...student,
    classCode: "3a",
  };
});
console.log(newData);
// removeGenders from student array function bich
let data5 = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];
function removeGenders(data5) {
  return data5.map((student) => {
    const { gender, ...rest } = student;
    return rest;
  });
};
let newStudents = removeGenders(data5);
console.log(newStudents);
//argchlal 2
function removeGenders(students) {
  students.forEach((student) => {
    delete student.gender;
  });
}
removeGenders(data5);
console.log(data5);



// array method dasgal 2


let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

 // 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  return cars.filter((car) => car.isAvailable === true);
};
let dulma = getAvailableCars(cars);
console.log(dulma);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getRecentCars(cars) {
  return cars.filter((car) => car.year >= 2018);
};
let dusl = getRecentCars(cars);
console.log(dusl);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getExpensiveCars(cars) {
return cars.filter((car) => car.price >= 35000000);
};
let vne = getExpensiveCars(cars);
console.log(vne);
// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getSedans(cars) {
  return cars.filter((car) => car.type === "Sedan");
}
let ganaa = getSedans(cars);
console.log(ganaa);

// 5. Брэндээр шүүж буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function filterByBrand(cars, brandName) {
  return cars.filter((car) => car.brand === brandName);
}
let gan = filterByBrand(cars, "Ford");
console.log(gan);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getHighMileageCars(cars) {
  return cars.filter((car) => car.mileage > 100000);
}
let vnj = getHighMileageCars(cars);
console.log(vnj);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function addEfficiencyFlag(cars) {
  cars.forEach((car) => {
    car.efficient = car.fuelEfficiency < 5.0;
  });
}
addEfficiencyFlag(cars);
console.log(cars);

  // 8. Бүх машины үнийг 15% нэмдэг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function increaseCarPrices(cars) {
  cars.forEach((car) => {
    let newPrice = car.price * 1.15;
    car.price = parseFloat(newPrice.toFixed(2));
  });
}
increaseCarPrices(cars);
console.log(cars);
// map arg
function increaseCarPrices(cars) {
  return cars.map(car => ({
    ...car,
    price: Math.round(car.price * 1.15)
  }));
}

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getLowMileageCars(cars) {
  return cars.filter((car) => car.mileage < 50000);
}
let svn = getLowMileageCars(cars);
console.log(svn);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getMostEfficientCar(cars) {
  return cars.reduce((minCar, currentCar) => {
    return currentCar.fuelEfficiency < minCar.fuelEfficiency ? currentCar : minCar;
  });
}
let lowcar = getMostEfficientCar(cars);
console.log(lowcar);
// foreach argchlal
function getMostEfficientCar(cars) {
  let result = null;
  cars.forEach(function (car) {
    if (result === null) {
      result = car;
    } else {
      if (car.fuelEfficiency < result.fuelEfficiency) {
        result = car;
      }
    }
  });
  return result;
}
// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getMostExpensiveCar(cars) {
return cars.reduce((highCar,currentCar) => {
  return currentCar.price > highCar.price ? currentCar : highCar;
});
}
let senz = getMostExpensiveCar(cars);
console.log(senz);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getTotalMileage(cars) {
return cars.reduce((total, car) => total + car.mileage, 0);
}
let bon = getTotalMileage(cars);
console.log(bon);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function filterBySupplier(cars, supplierName) {
  return cars.filter((car) => car.supplier === supplierName);
}
let san = filterBySupplier(cars, "AutoJapan");
console.log(san);


// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getCarModels(cars) {
  return cars.map(car => car.model);
}
let models = getCarModels(cars);
console.log(models);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function sortCarsByPriceAscending(cars) {
  return cars.slice().sort((a, b) => a.price - b.price);
}
let sortedCars = sortCarsByPriceAscending(cars);
console.log(sortedCars);
// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getLargeEngineCars(cars) {
  return cars.filter((car) => car.engineSize > 2.0);
}
let svv = getLargeEngineCars(cars);
console.log(svv);
// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];
function getUniqueBrands(cars) {
  const brands = cars.map(car => car.brand);        // ["Toyota", "Honda", "Tesla", ...]
  const uniqueBrands = [...new Set(brands)];        // давхардлыг арилгана
  return uniqueBrands;
}
let sv = getUniqueBrands(cars);
console.log(sv);
// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  // ...
}

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  // ...
}

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  // ...
}
 
  
