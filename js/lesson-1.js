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

function minMaxNumber(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        return "Not a number";
    }
    let sum = 0;
    for (let i = max; i >= min; i--){
    console.log(i);
    if (i%2 === 0) {
        sum += i;
    }
}
return sum;
}
console.log(minMaxNumber("5", 10));
