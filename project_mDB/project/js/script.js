/* ДОМАШКА:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    let adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

   
// adv.forEach(function(item){
//     item.remove();
//     });
    
// ДОМАШКА
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"


// let form = document.querySelector('.adding__input');
// let btnE = document.querySelector('button');
// ne pravilno
// ooo.addEventListener('mouseenter', (e) => {
//     console.log(e);
// });

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addInput.value;
        let favorite = checkbox.checked;
// ^ne poniatno

// Заперетить вводить пустую строчку в форму:  if (newFilm){}
    if (newFilm){
// Если название фильма больше, чем 21 символ if (newFilm.lenght){}
    if (newFilm.lenght > 21){
        newFilm = `${newFilm.substring(0, 22)}...`;
//^ не получается, почему?
    }

// Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
    if (favorite) {
        console.log("Добавляем любимый фильм");
    }
movieDB.movies.push(newFilm);
//push потому что нужно добавить а не пересоздать ДБ
    sortArr(movieDB.movies);
        
// строим новый список фильмов (функция описана ниже):
    createMovieList(movieDB.movies, list);
        
    }
// сброс формы:
    event.target.reset();        
    }); 

        function createMovieList(films, parent) {
// добавили 2 аргумента функции
// вместо list пишем parent
// очищаем список
            parent.innerHTML = "";
// Что бы не сбивалась сортировка по алф и при удалении тоже
            sortArr(films); 
// вместо  movieDB.movies пишем films
        films.forEach((film, i) => {
            parent.innerHTML += `
             <li class="promo__interactive-item">${i+1} ${film}
                  <div class="delete"></div>
             </li>
         `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () =>{
// ^при клике на корзинку (class=delete) будет удаляться родительский элемент:
            btn.parentElement.remove();
// При удалении элементаю, он также удаляется с БД    
            movieDB.movies.splice(i, 1);
// Что бы не сбивалась нумерация после удаления эл-тов, вызвать фу-ю внутри фу-и(рекурсия)
// функция с аргументами -films parent
           createMovieList(films, parent);
                 });

        });
        }

// теперь при вызове функции в параметры films и parent будут передаваться:
// movieDB.movies и list

        createMovieList(movieDB.movies, list);

//    удаление рекламы  adv.forEach(item => {
//         item.remove();
//     });
//     обернуть в функцию:
// создается фанкшн экспрешн и добавляется стрелочная функция 
    let deleteAdv = (arr) => {
// что бы не  привязываться к опр элемету на странице (adv), добавляем в фунции аргументы.addEventListener        
     arr.forEach(item => {
            item.remove();
                });

      };

// а при вызове функции параметр adv передается как аргумет фу-и
       deleteAdv(adv);

//    Измененние жанра и фонового рисунка оборачиваем в фунцию. 
//    genre.textContent = 'драма';
//    poster.style.backgroudImage = 'url("img/bg.jpg")';  

    let makeChanges = () => {
      genre.textContent = 'драма';
     poster.style.backgroudImage = 'url("img/bg.jpg")'; 

    };
    makeChanges();

 
 // ---- movieDB.movies.sort(); сортировку списка фильмов тоже оборачиваем в функции:
 // используем стрелочную фу, с аргументом, при вызове фу-и передается параметр в аргумент 
 // также эту фу- ю использовать в месте где добавляется фильм через форму сабмит
    
          let sortArr = (arr)=> {
              arr.sort();
         };
           sortArr(movieDB.movies);
    
});