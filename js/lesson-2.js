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


function calculateAverage(...args) {
    // console.log(arguments);
    // console.log(args);
    let avarage = 0;
    let count = 0;
    for (const number of arguments) {
        if (typeof number !== "number") continue
        avarage += number;
        count += 1;
    }
return avarage / count;
}
console.log(calculateAverage("true", 10, 20, 50, "hello"));
calculateAverage(10, 20, 50);
calculateAverage(20, 40, 50, 100);
