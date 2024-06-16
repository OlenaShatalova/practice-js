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

// const number = prompt("Enter number");
// const hour = 60;
// let hours = parseInt(number / hour);
// let minutes = number % hour;
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);


//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const min = +prompt("min number: ");
// const max = +prompt("max number: ");
// let sum = 0;

// for (let i = max; i >= min; i--){
//     console.log(i);
//     if (i%2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// function minMaxNumber(min, max) {
//     if (typeof min !== "number" || typeof max !== "number") {
//         return "Not a number";
//     }
//     let sum = 0;
//     for (let i = max; i >= min; i--){
//     console.log(i);
//     if (i%2 === 0) {
//         sum += i;
//     }
// }
// return sum;
// }
// console.log(minMaxNumber("5", 10));



// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = +prompt("Enter number");
// let result = '';
// switch (num) {
//     case 1:
//         result = 'Зима'
//         break;
//     case 2:
//         result = 'Весна'
//         break;
//     case 3:
//         result = 'Літо'
//         break;
//     case 4:
//         result = 'Осінь'
//         break;
//     default:
//         result = 'Від 1 до 4'

// }
// console.log(result)


// function checkSeason(number) {


//     switch (number) {
//         case 1:
//             return 'Зима'

//         case 2:
//             return  'Весна'

//         case 3:
//             return  'Літо'

//         case 4:
//             return 'Осінь'

//         default:
//             return'Від 1 до 4'

//     }

// }

// console.log(checkSeason(4))



//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера
//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

const login = prompt("Enter login");

console.log(login);
if (login === "Адмін") {
    const password = prompt("Enter your password");
    // if (password === "Я головний") {
    //     alert("Вітаю!");
    // }
    // else {
    //     alert("Невірний пароль!");
    // }
    alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
}
else if (login === "" || login === null) {
    alert("Скасовано");

}
else {
    alert("Я вас не знаю");
}

