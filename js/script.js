/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img"),
  promoBG = document.querySelector(".promo__bg"),
  promoGenre = promoBG.querySelector(".promo__genre"),
  promoList = document.querySelector(".promo__interactive-list");

adv.forEach((element) => {
  element.remove();
});

promoGenre.textContent = "драма";

promoBG.style.backgroundImage = 'url("img/bg.jpg")';

promoList.innerHTML = "";

movieDB.movies.forEach((item, index) => {
  promoList.innerHTML += `
    <li class="promo__interactive-item"> ${index + 1}: ${item}
        <div class="delete"></div>
    </li>
    `;
});

// adv.querySelectorAll("img").forEach((item) => item.remove());
// adv.querySelector("div").remove();
// promoGenre.textContent = "драма";

// promoBG.style =
//   'background: url("../img/bg.jpg") center center/cover no-repeat;';

// const movieDB = {
//   movies: [],
// };

// function sortMovies() {
//   promoItems.forEach((item) => {
//     movieDB.movies.push(item.textContent);
//   });

//   movieDB.movies.sort();

//   promoItems.forEach((item, index) => {
//     promoItems[index].textContent = `${index + 1}: ${movieDB.movies[index]}`;
//   });
// }

// console.log(movieDB);
