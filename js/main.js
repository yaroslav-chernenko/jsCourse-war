const numberOfFilms = prompt(' Сколько фильмов вы уже просмотрели?', '1');

console.log(numberOfFilms);

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false

};

for( let i = 0; i < 2; i++){
   // let a = prompt('Один из просмотреных фильмов?');
   // let b = +prompt('На сколько оцените его?', '3');

   // personalMovieDB.movies[prompt('Один из просмотреных фильмов?')] = +prompt('На сколько оцените его?', '3');

    let a = prompt('Один из просмотреных фильмов?');
    let b = +prompt('На сколько оцените его?', '3');

    personalMovieDB.movies[a] = b;
} 

console.log(personalMovieDB);