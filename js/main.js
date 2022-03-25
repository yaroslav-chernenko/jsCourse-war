" use strict ";

const personalMovieDB = {
  count: "",
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из просмотренных фильмов", ""),
      b = +prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("good");
    } else {
      i--;
      console.log("error");
    }
  }
}
function detectPersenolLeevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мальо фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы класический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман!");
  } else {
    alert("произошла ошибка");
  }
}
function start() {
  let numberOfFilms = +prompt(" Сколько фильмов вы уже просмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt(" Сколько фильмов вы уже просмотрели?", "");
  }

  personalMovieDB.count = numberOfFilms;
}
function showMyDB(privat) {
  if (!privat) {
    console.log(personalMovieDB);
  }
}
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let a = prompt(`Ваш любимый жар под номером ${i}.`);

    if (a != null && a != "") {
      personalMovieDB.genres.push(a);
    } else {
      i--;
    }
  }
}

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
