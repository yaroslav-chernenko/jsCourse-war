" use strict ";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt(" Сколько фильмов вы уже просмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      numberOfFilms = +prompt(" Сколько фильмов вы уже просмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Один из просмотренных фильмов", ""),
        b = +prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersenolLeevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотренно довольно мальо фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман!");
    } else {
      alert("произошла ошибка");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let a = prompt(`Ваш любимый жар под номером ${i}.`);

      if (a != null && a != "") {
        personalMovieDB.genres.push(a);
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((element, index, arr) => {
      console.log(`Любимый жанр #${index + 1} - это ${element}`);
    });
  },
  showMyDB: function (privat) {
    if (!privat) {
      console.log(personalMovieDB);
    }
  },
  toggleVisebleMyDB: function () {
    if (!this.privat) {
      this.privat = true;
    } else {
      this.privat = false;
    }
  },
};

// start();
// rememberMyFilms();
// writeYourGenres();
// detectPersenolLeevel();
// showMyDB(personalMovieDB.privat);

// let i = 0;
// let a ;
// let b ;

// while (i < 2) {
// 	a =	prompt('Один из просмотреных фильмов?', '');
// 	b = +prompt('На сколько оцените его?', '3');

// 	if( a != '' && b != '' && a.length < 50 ){
// 		personalMovieDB.movies[a] = b;
// 	}else{
// 		i--;
// 	}

// 	i++;
// }

// do {
// 	a =	prompt('Один из просмотреных фильмов?', '');
//  	b = +prompt('На сколько оцените его?', '3');

// 	if(a != '' && b != '' && a.length < 50){
// 		personalMovieDB.movies[a] = b;
// 	}
// 	else{
// 		i--;
// 	}

// 	i++;
// } while (i < 2);

// const object = {
//   name: "yaroslav",
//   second: "chernenko",
//   pet: "cat",
//   pet2: "dog",
//   colorsPet: {
//     cat: "gre",
//     dog: "brown",
//   },
//   dogSay: function () {
//     console.log(`dog say ${this.pet2}`);
//   },
// };

// for (let key in object){
//   if(typeof(object[key]) === 'object'){
//     for(let i in object[key]){
//       console.log(`свойство: ${i} - значение: ${object[key][i]}`);
//     }
//   }else{
//     console.log(`свойство: ${key} - значение: ${object[key]}`);
//   }

// }
// console.log(object.name);
// console.log(object.name);
// console.log(object.dogSay());

// for (const key in object) {
//  console.log(`${key} - ${object[key]}`);
// }
// let a;
// function say(text, callback){
//   // console.log('hi ya name is' + object.name);
//   a = 10;
//  setTimeout(callback, 3000);
// }

// say('yar', ()=>{
//   a += 157;
//   console.log(a);
// });
