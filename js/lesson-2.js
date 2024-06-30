// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.


const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-рол");
styles.unshift("Металл");
// styles[1] = "Класика";
const index = styles.indexOf("Блюз");

if (index !== -1) {
    styles[index] = "Класика";
}
const newValue = ["RnB", "Roc"];
const newStyles = newValue.concat(styles);
styles.shift();
styles.pop();




console.log(styles.includes("Класик"));
console.log(newStyles);