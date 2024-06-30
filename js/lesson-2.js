// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// styles.unshift("Металл");
// // styles[1] = "Класика";
// const index = styles.indexOf("Блюз");

// if (index !== -1) {
//     styles[index] = "Класика";
// }
// const newValue = ["RnB", "Roc"];
// const newStyles = newValue.concat(styles);
// styles.shift();
// styles.pop();

// console.log(styles.includes("Класик"));
// console.log(newStyles);

//TODO:=========task-1=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ["JavaScript", "HTML", "CSS", "React"];
// const substring = "S";

// function findSubString(arr, sub) {
//   const newArray = [];
//   for (const word of arr) {
//     if (word.indexOf(sub) !== -1) {
//       newArray.push(word);
//     }
//   }
//   return `Масив елементів, що містять підстроку ${sub}: ${newArray.join(", ")}`;
// }
// console.log(findSubString(wordsArray, substring));

//TODO:=========task-02=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) {
//     // console.log(arguments);
//     // console.log(args);
//     let avarage = 0;
//     let count = 0;
//     for (const number of arguments) {
//         if (typeof number !== "number") continue
//         avarage += number;
//         count += 1;
//     }
// return avarage / count;
// }
// console.log(calculateAverage("true", 10, 20, 50, "hello"));
// calculateAverage(10, 20, 50);
// calculateAverage(20, 40, 50, 100);

// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

const human = {
  name: "Mango",
  hobby: "It",
  age: 19,

  greet() {
    return this.name;
  },
};
// human.mood = "happy";
// human.hobby = "skydiving";
// human["lastname"] = "Petrovich";

// for (const key in human) {
//   if (human.hasOwnProperty(key)) {
//      console.log(key);
//      console.log(human[key]);
//   }

// }

// console.log(human);
// console.log(Object.keys(human));
// console.log(Object.values(human));
// console.log(Object.entries(human));
// const employees = {
//   mango: 20000,
//   poly: 25000,
//   ajax: 50000,
// };
// let total = 0;
// for (const key in employee) {
//   if (employee.hasOwnProperty(key)) total += employee[key];
// }
// console.log(total);
// for (const employee of Object.values(employees)) {
//   total += employee;
// }
// console.log(total);

// TODO:=========task-01==============
// Потрібно перебрати об'єкти та вивести ім'я кращого співробітника
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// function findBestEmployee(object) {
//   // return Math.max(...Object.values(object));
//   let bestEmployee = "";
//   let bestEmployeeTask = 0;
//   for (const [name, tasks] of Object.entries(object)) {
//     if (tasks > bestEmployeeTask) {
//       bestEmployeeTask = tasks;
//       bestEmployee = name;
//     }
//   }
//   return bestEmployee;
// }

//TODO:============task-2==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const store = {
//   items: [],

//   hasProduct(name) {
//     return this.items.includes(name);
//   },

//   addProduct(product) {
//     this.items.push(...product);
//   },
// };

// store.addProduct(["tomat", "orange", "kiwi"]);

// console.log(store.items);
// console.log(store.hasProduct("bananas"));
