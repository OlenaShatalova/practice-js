//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const input = prompt("Яка офіційна назва JavaScript?");

// if (input === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// alert(input === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!");

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

const number = prompt("Enter number");
const hour = 60;
let hours = parseInt(number / hour);
let minutes = number % hour;
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
console.log(`${hours}:${minutes}`);
