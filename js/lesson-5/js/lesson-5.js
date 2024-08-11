//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */
const itmeList = document.querySelector(".js-accordion-list");

itmeList.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    event.target.nextElementSibling.classList.toggle("active");

});


// ========================= Task - 2 ========================

const body = document.body;
const checkBox = document.querySelector("#theme-switch");

const LS_KEY = "switcher";

document.addEventListener("DOMContentLoaded", checkLocalStorage);

function checkLocalStorage() {
    const lsData = localStorage.getItem(LS_KEY);
    if (lsData === "dark") {
        body.classList.replace("light", "dark");
        checkBox.checked = true;
    } else {
        body.classList.replace("dark", "light"); 
    }
};


checkBox.addEventListener("click", (e) => {
    if (e.target.checked) {
        body.classList.replace("light", "dark");
        localStorage.setItem(LS_KEY, "dark");
    } else {
        body.classList.replace("dark", "light"); 
        localStorage.setItem(LS_KEY, "light");
    }
})