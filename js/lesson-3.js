//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// const numbers = [1, 2, 3, 4, 5];
// function getNewArray(array) {
//   return array.map((el, indx, arr) => Math.pow(el, 2));
// }
// const res = getNewArray(numbers);
// console.log(res);

// const getNewArray = (array) => array.map((el, indx, arr) => Math.pow(el, 2));
// const res = getNewArray(numbers);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const flatArray = (array) => array.flatMap((el) => el.values);
// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const checkAge = (array) => array.some((el) => el.age < 20);
// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = (array) => array.every((el) => el % 2 === 0);
// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 7, 6, 8, 9, 10, 12];

// const findFirstOddNumber = (array) =>array.find(number => number % 2 !== 0);
// console.log(findFirstOddNumber(numbers));



//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbers = [4, 2, 5, 1, 3];
const sortedArrey = (array) => array.toSorted((a, b) => b - a);
console.log(sortedArrey(numbers));
console.log(numbers);