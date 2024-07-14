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

// const numbers = [4, 2, 5, 1, 3];
// const sortedArrey = (array) => array.toSorted((a, b) => b - a);
// console.log(sortedArrey(numbers));
// console.log(numbers);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortedArray = (array) => array.toSorted((a, b) => b.localeCompare(a));
// console.log(sortedArray(stringArray));

//TODO:=========task-8=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]
// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const filteredAge = (users) => users.filter((user) => user.age > 20);
// console.log(filteredAge(users));

//TODO:=========task-09=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const totalSum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
// console.log(totalSum(numbers));

//TODO:=========task-10=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const averageValue = (arr) =>
//   arr.reduce((acc, num) => acc + num / arr.length, 0);
// console.log(averageValue(arr));

// const users = [
//   { name: "Mango", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 17 },
// ];

// const res = users
//   .filter((user) => user.age > 20)
//   .toSorted((a, b) => a.name.localeCompare(b.name))
//   .map((el) => el.name);
// console.log(res);




/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login () {
//         return this.#login;
//     }
//     set login (newLogin) { 
//         this.#login = newLogin;
//     }
//      get email () {
//         return this.#email;
//     }
//     set email (newEmail) { 
//         this.#email = newEmail;
//     }
// }

// const client = new Client("mango", "mango@gmail.com");
// console.log(client);
// console.log(Client.prototype);
// client.login = "Kiwi";
// client.email = "kiwi@gmail.com";
// console.log(client);
// console.log(client.email);
// const client1 = new Client("Orange", "orange@gmail.com");
// console.log(client1);



/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//     constructor() {
//         this.result = 0;
//     }
//     number(num) {
//         this.result = num;
//         return this;
//     }
//     getResult() {
//         return this.result;
//     }
//     add(num) {
//         this.result += num;
//         return this;
//     }
//     substract(num) {
//         this.result -= num;
//         return this;
//     }
//     divide(num) {
//         this.result /= num;
//         return this;
//     }
//     multiply(num) {
//         this.result *= num;
//         return this;
//     }
// }
// const calculator = new Calculator();
// const res1 = calculator.number(10).substract(5).multiply(2).divide(5).getResult();
// console.log(res1);
// const calculator1 = new Calculator();
// const res2 = calculator1.number(20).substract(5).multiply(2).add(3).getResult();
// console.log(res2);