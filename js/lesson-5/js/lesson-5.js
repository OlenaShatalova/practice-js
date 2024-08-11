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
}

checkBox.addEventListener("click", (e) => {
  if (e.target.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem(LS_KEY, "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem(LS_KEY, "light");
  }
});

// ========================= Task - 3 ========================

const calendarContainer = document.querySelector(".js-container");

const currentDate = new Date();
const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });
const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });
const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });
const weekDay = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });

calendarContainer.querySelector(".js-month").textContent = month;
calendarContainer.querySelector(".js-day-number").textContent = day;
calendarContainer.querySelector(".js-day").textContent = weekDay;
calendarContainer.querySelector(".js-year").textContent = year;

// ========================= Task - 4 ========================

const inputEl = document.querySelector(".js-input");
const ageBtnEl = document.querySelector(".js-form-btn");
const outputEl = document.querySelector(".js-form-result");

ageBtnEl.addEventListener("click", () => {
  const currentDate = new Date();
  const clientDate = new Date(inputEl.value);
  const diff = currentDate - clientDate;
  const result = getAge(diff);
  outputEl.textContent = `Your age is ${result} old`;
});

function getAge(ms) {
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}
