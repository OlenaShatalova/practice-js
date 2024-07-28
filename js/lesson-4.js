//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const divConainer = document.createElement("div");
divConainer.classList.add("number-container");
// const divArr = [];         // варіант 2
const fragment = document.createDocumentFragment();      // варіант 3
for (let i = 0; i < 100; i += 1) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = randomNumber();
  div.textContent % 2 === 0
    ? div.classList.add("even")
    : div.classList.add("odd");
  // divConainer.appendChild(div);           // варіант 1
  // divArr.push(div);                  // варіант 2
  fragment.appendChild(div);
}
// divConainer.append(...divArr);     // варіант 2
divConainer.append(fragment);        // варіант 3

const body = document.querySelector("body");
// body.after(divConainer);
// body.before(divConainer);
// body.append(divConainer);
body.prepend(divConainer);
// body.innerHTML = divConainer;



// TODO: =====================task - 02 =====================

// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.
const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];
// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ['film_2', 'film_4', 'film_5'];

function createMarkup(films) {
  return films.map(film => `
    <li id="${film.id}">
     <img src="${film.imgUrl}" alt="${film.title}" />
     <p>${film.title}</p>
</li>
    `).join("");
}

const filmList = document.querySelector(".film-list");

filmList.innerHTML = createMarkup(films);

// filmList.insertAdjacentHTML("beforebegin", createMarkup(films));
// filmList.insertAdjacentHTML("beforeend", createMarkup(films));
// filmList.insertAdjacentHTML("afterbegin", createMarkup(films));
// filmList.insertAdjacentHTML("afterend", createMarkup(films));

watchedFilms.forEach(id => {
  const film = filmList.querySelector(`#${id}`);
  if (film) {
    film.style.opacity = 0.5;
  }

} )