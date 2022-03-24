const numberOfFilms = +prompt(" Сколько фильмов вы уже просмотрели?", "");

console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB.count < 10) {
  alert("Просмотренно довольно мальо фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы класический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман!");
} else {
  alert("произошла ошибка");
}

console.log(personalMovieDB);
