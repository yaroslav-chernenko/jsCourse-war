"use strict";
console.log("done");

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
  promoList = document.querySelector(".promo__interactive-list"),
  addForm = document.querySelector(".add"),
  inputValue = addForm.querySelector(".adding__input");

const removeADV = (item) => {
  item.forEach((element) => {
    element.remove();
  });
};

const changeBG = () => {
  promoGenre.textContent = "драма";

  promoBG.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortMovieList = () => {
  movieDB.movies.sort();
};

const changeMovieList = () => {
  sortMovieList();

  promoList.innerHTML = "";

  movieDB.movies.forEach((item, index) => {
    promoList.innerHTML += `<li class="promo__interactive-item">${
      index + 1
    }: ${item}
                            <div class="delete"></div>
                        </li>`;
  });

  document.querySelectorAll(".delete").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();

      movieDB.movies.splice(index, 1);

      changeMovieList();
    });
  });
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputForm = inputValue.value;
  const checkbox = addForm.querySelector("[type=checkbox]");

  if (inputForm && inputForm != " ") {
    if (inputForm.length >= 13) {
      movieDB.movies.push(`${inputForm.substring(0, 13)}...`);
    } else {
      movieDB.movies.push(inputForm);
    }
  }
  if (checkbox.checked) {
    console.log(inputForm);
  }
  addForm.reset();
  changeMovieList();
});

changeMovieList();

// document.addEventListener("DOMContentLoaded", function () {
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */
removeADV(adv);
changeBG();
