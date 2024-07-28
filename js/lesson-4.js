//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const divConainer = document.createElement("div");
divConainer.classList.add("number-container");

for (let i = 0; i < 100; i += 1) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = randomNumber();
  div.textContent % 2 === 0
    ? div.classList.add("even")
    : div.classList.add("odd");
  divConainer.appendChild(div);
}
const body = document.querySelector("body");
// body.after(divConainer);
// body.before(divConainer);
// body.append(divConainer);
body.prepend(divConainer);
// body.innerHTML = divConainer;
