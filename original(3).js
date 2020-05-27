// /* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// "use strict";

// let numberOfFilms;

// function start(){
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    if ( numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)){ 
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
// }
// start();

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false};

// function rememberMyFilms() {
//     let i = 0;
//     do {
//        let a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('something wrong');
//             i--;
//         }
//         i++;
//     } while (i < 2);
    
// }
// rememberMyFilms();

// function detectMyLevel(){
//     if (personalMovieDB.count < 10) { 
//         alert ("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
//             alert ("Вы классический зритель");
//      } else if ( personalMovieDB.count >= 30){
//          alert("Вы киноман");
//      } else {
//          alert("Произошла ошибка");}
// }
// detectMyLevel(); 

// function showMyDB(hid){
//     if (!hid)
//     { console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//    for (let i=1; i <= 3; i++){
// let genre = prompt(`Ваш любимый жанр под номером ${i}`, '')
//    }
//    personalMovieDB.genres[i-1] = genre;
// }

// //  console.log(personalMovieDB);

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

'use strict';

// Код возьмите из предыдущего домашнего задания (original(3))

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        if (personalMovieDB.count == '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
        let i = 0;
        do {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                personalMovieDB.movies[a] = b;
            } else {
                console.log('something wrong');
                i--;
            }
            i++;
        } while (i < 2);

    },

    detectMyLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        //u can do like this 

        // for (let i=1; i <= 3; i++){
        //        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        //         if ( genre === '' || genre === null){
        //             alert (`Incorrect data ${genre}`)
        //             i--;
        //     } else {
        //         personalMovieDB.genres[i-1] = genre;
        //     }
        // }

        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваши любимые жанры через запятую`, '').toLowerCase;
            if (genre === '' || genre === null) {
                alert(`Incorrect data ${genre}`)
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((key, i) => {
            console.log(`Любимый жанр ${i+1} - это ${key}`);
        });
    }
};