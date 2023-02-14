// Task 1

// Текст задания 
// Создать новый файл lesson2.html
// Создать переменную и спросить у пользователя “Ваш возраст”
// Вывести на экран текст. Вам “возраст пользователя” лет
// Спросить у пользователя его имя
// Вывести на экран, Добро пожаловать на сайт “Имя пользователя”

// let age = prompt("Ваш возраст?", 18);
// console.log(`Вам ${age} лет`);

// let myName = prompt("Ваше имя?", "Юлия");
// console.log(`Добро пожаловать на сайт, ${myName}`);

// Task 2

// Текст задания 
// Найти остаток от деления двух переменных
// let a = 13;
// let b = 5;
// Что выведет на экран (Сначала проговорите, потом проверьте)
// let a;
// alert(a); 
// Что выведет на экран (Сначала проговорите, потом проверьте)
// alert('abc' * 3);
// Что выведет на экран (Сначала проговорите, потом проверьте)
// alert( 1 / 0);
// alert(-1 / 0);
// Что выведет на экран (Сначала проговорите, потом проверьте)
// alert('2' * '3');

// let a=13;
// let b=5;
// console.log(a%b);

// let a;
// alert(a); 

// Task 3

// Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.
// Необходимо вывести в консоль результат суммы данных переменных
// let a = '2';
// let b = '3';
// Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст
// Сумма чисел равна “результат”
// Разность чисел равна “результат”
// Произведение чисел равно “результат”
// Частное чисел равно “результат”
// Остаток от деления чисел равен “результат”

// let a = '2';
// let b = '3';
// console.log(a+b);

// let a = parseInt(prompt("Введите а", 0));
// let b = parseInt(prompt("Введите b", 0));
// let sum = a + b;
// console.log(`Сумма чисел равна ${sum}`);

// Task 4

// Не запуская код, определите, что выведется в консоль: 
// console.log(String(true)); 
// Не запуская код, определите, что выведется в консоль:
// console.log('a' + true); 
// Не запуская код, определите, что выведется в консоль:
// console.log(Number(true));
// Не запуская код, определите, что выведется в консоль:
// console.log(true + 1);
// Не запуская код, определите, что выведется в консоль:
// console.log(true + true)
// Не запуская код, определите, что выведется в консоль:
// console.log(true - true)
// Не запуская код, определите, что выведется в консоль:
// console.log( String(true) + Number(true) )

// Task 5

// Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// Выводит в консоль “Число больше 5”
// Выводит в консоль “Число меньше 5”
// Выводит в консоль “Число равно 5”
// Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// Пользовать с клавиатуры вводит 2 числа
// Необходимо найти какое из двух чисел минимальное
// Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

// console.log(instanceof("слово"));

// let a = Number(prompt("Введите число:"));
// if (a > 5) {
//     console.log("Число больше 5");
// } else if (a < 5) {
//     console.log("Число меньше 5");
// } else {
//     console.log("Число равно 5");
// }

// let test1 = Number(prompt("Введите первое число:"));
// // let test2 = Number(prompt("Введите второе число:"));

// // (test1 === test2) ? console.log("числа равны") : console.log("числа не равны");

// if (test1 > 0 && test1 < 15) {
//     console.log("Переменная прошла проверку");
// } else {
//     console.log("Переменная не прошла проверку");
// }

// (test1 > 0 && test1 < 15) ? console.log("Переменная прошла проверку") : console.log("Переменная не прошла проверку");



//sem 3
//Task 1
// Написать функцию, которой передаем, имя, фамилия и возраст, 
// и получаем строку "Привет Иван Петров с возрастом 17" 
// (только здесь данные, которые были переданы в функцию)

// function hello(myname, lastName, age) {
//     console.log(`Привет ${myname} ${lastName} с возрастом ${age}`);
// }
 
// // const hello = (myname,lastName, age) => {
// //     console.log(`Привет ${myname} ${lastName} с возрастом ${age}`);
// // }

// hello("Юля", "Полякова", 30);

// Task 2 Создайте функцию которая возводит переданное число в квадрат

// function quad(num) {
//     let res = num * num;
//     return res;
// }
// console.log(quad(5));

//Task 3
// Сделайте функцию, которая параметром принимает число и проверяет,
//  положительное это число или отрицательное. В первом случае пусть функция 
//  выводит в консоль текст '+++', а во втором '---'.

// function isPositive(num) {
//     if (num > 0) {
//         console.log("+++");
//     } 
//     else if (num < 0){
//         console.log("---");
//     }
//     else {
//         console.log("num = 0");
//     }
// }

// isPositive(6);
// isPositive(-3);
// isPositive(0);

// Task 4
// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function sum(num1, num2, num3) {
//    let res = num1 + num2 + num3;
//    return res;
// }


// // С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1;	
// let param2 = 2;	
// let param3 = 3;
// console.log(sum(param1,param2,param3));

// //Дана фукнция
// function func(num = 5) {
//     console.log(num * num);
//     }
//    // Расскажите, каким будет результат каждого из вызовов функции.
//     func(2);
//     func(3);
//     func();
    
    //Task 3
    // Сделайте функцию, которая параметром принимает число, 
    // а возвращает квадратный корень из этого числа. 
    // С помощью этой функции найдите корень числа 3, 
    // затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

   //photo

   //Task 4
   //Сделайте функцию, которая принимает параметром число от 1 до 7, 
   //а возвращает день недели на русском языке.

// function day(num) {
//         switch (num) {
//             case 1:
//                 console.log(`понедельник`);
//                 break;
//             case 2:
//                 console.log(`вторник`);
//                 break;
//             case 3:
//                 console.log(`среда`);
//                 break;
//             case 4:
//                 console.log(`четверг`);
//                 break;
//             case 5:
//                 console.log(`пятница`);
//                 break;
//             case 6:
//                 console.log(`суббота`);
//                 break;
//             case 7:
//                 console.log(`воскресенье`);
//                 break;
//             default:
//                 console.log(`дня недели не существует`);
//                 break;
//         }
//     } 
// day(Number(prompt(`Введите номер дня недели`)));

//Написать функцию, которой передаем имя и она возвращает 
//приветствие в зависимости от времени суток 
//(Доброе утро\день\вечер\ночи Иван)

// function hello(name)

//SEMINAR 4

// Task 1

// const arr = [];
// let size = Number(prompt(`введите размер массива`));
// for (let i = 0; i < size; i++) {
//     arr.push(Math.round(Math.random()*100));
// }
// console.log(arr);
// console.log(arr.length);

// const arr = ["a","b","c"];
// for (let index = 0; index < arr.length; index++) {
//     arr[i] = i + 1;
// }
// console.log(arr);

//Task 2

//Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// const arr = [1,2,3];
// for (let index = 0; index < arr.length; index++) {
//     arr[index]++;
// }
// console.log(arr);

//Узнайте длину следующего массива:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

//Пусть дан такой массив:
// const arr = [1, 2, 3];
// //Добавьте ему в конец элементы 4 и 5.
// arr.push(4,5);
// console.log(arr);

//Создайте произвольный массив из 5 элементов, Удалите из него два элемента. 
//Проверьте, какое станет значение свойства length после этого.

// const arr = [];
// let size = 5;
// for (let i = 0; i < size; i++) {
//     arr.push(Math.round(Math.random()*100));
// }
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr.length);

//либо

// arr.splice(3,4);
// console.log(arr);

//Task 3
// С помощью цикла for выведите в консоль числа от 11 до 33.
// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
// С помощью цикла for выведите в консоль числа от 100 до 0.
// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, 
// пока результат умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.


// for (let item = 11; item <=33; item++) {
//     console.log(item);
// }

// for (let item = 1; item <=99; item = item + 2){ //item += 2
//     console.log(item);
// }

// for (let item = 100; item >= 0; item--){
//     console.log(item);
// }

// let num = (Math.round(Math.random()*10));
// let count = 0;
// console.log(num);
// while(num <= 1000){
//     num = num * 3;
//     count++;
// }
// console.log(num, count);

// Task 4


// SEMINAR 6

// Task 1

// const link = document.querySelector('#block');
// console.log(link);

// const link = document.querySelectorAll('p');
// console.log(link[0].textContent);

// const link = document.querySelector('.www');
// console.log(link.textContent);

// Task 2

// const link = document.querySelector('.link');
// link.textContent = 'link text js';
// link.href = 'https://developer.mozilla.org/ru/';

// console.log(link);

// const img = document.querySelector('.photo');
// img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG';

// Task 3

// const content = document.querySelector('.content');
// const newContent = document.createElement('p');
// newContent.textContent = 'новый текстовый элемент';
// content.appendChild(newContent);
// content.removeChild(newContent);

// Task 4

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько 
// раз пользователь нажал на данную кнопку

// const button1 = document.createElement('button');
// const button2 = document.createElement('button');
// const counterText = document.createElement('p');

// button1.textContent = 'нажми меня';
// button2.textContent = 'обнулить счетчик';

// const content = document.querySelector('.content');

// content.appendChild(counterText);
// content.appendChild(button1);
// content.appendChild(button2);

// let counter = 0;
// counterText.textContent = (`Совершено ${counter} нажатий`);

// button1.onclick = function() {
//     counter++;
//     counterText.textContent = (`Совершено ${counter} нажатий`);
// }

// button2.onclick = function() {
//     counter = 0;
//     counterText.textContent = (`Совершено ${counter} нажатий`);
// }

// СЕМ 7

//Task 1
// Дан блок, внутри него необходимо создать элемент div с классом item, 
// разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const block = document.querySelector('.block');
// const item = document.createElement('div');
// item.className = 'item';
// item.textContent = 'Элемент внутри';
// item.style.color = 'blue';
// item.style.border = '1px solid black';
// item.style.backgroundColor = '#f8f8f8';
// item.style.padding = '16px';
// block.setAttribute('class', 'item_1');
// block.appendChild(item);

// Task 2

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const text = document.querySelector('.text');
// console.log(text.previousElementSibling);
// console.log(text.parentElement);
// console.log(text.parentElement.previousElementSibling[0]);
// console.log(text.parentElement.parentElement);

// Task 3
// С помощью querySelector найти элемент h2  и вывести в консоль 
//всех его родителей

// const h2 = document.querySelector('.subtitle');
// let parent = h2.parentElement;
// while(parent.className){
//     console.log(parent.className);
//     parent = parent.parentElement;
// }

// Task 4

// Дано поле ввода и кнопка отправить, необходим реализовать функционал,
// если пользователь нажимает на кнопку отправить, 
//а поле ввода пустое, то под полем ввода и кнопкой должен 
//появиться заголовок h2 с текстом вы не заполнили поле ввода
//Цвет у рамки сделать красным

// const form = document.querySelector('form');
// const input = form.children[0];
// const button = form.children[1];

// const textError = document.createElement('h2');
// textError.textContent = '';
// form.appendChild(textError);
// button.onclick = function () {
//     if(input.value.length == 0) {
//         textError.textContent = 'Вы не заполнили после ввода';
//     } else {
//         textError.textContent = '';
//     }
// }

// Task 5

// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся 
// на “Текст отправлен”

// SEM 8

// task 1

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// window.addEventListener('load', function (e){
//     console.log('страница загрузилась');
// })

// // const button = document.querySelector('.button');
// // button.onclick = function () {
// //     console.log('событие onclick');
// // }

// // document.addEventListener('click', function (e){
// //     console.log('событие addEventListener');
// // })

// // task 2

// // Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// // Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали

// document.addEventListener('click', function (e){
//          console.log(e.target.className);
// });
// // Добавить кнопку button с текстом 4, которая считает сколько раз на 
// // нее нажали и количество нажатий на эту кнопку выводит в консоль

// const button4 = document.querySelector('.button4');
// let counter = 0;
// button4.onclick = function () {
//     counter++;
//     console.log(`количество нажатий ${counter}`);
// }

// // Создать кнопку button с текстом 5, При клике на которую, меняется 
// // текст данной кнопки на “Вы нажали на эту кнопку”

// const button5 = document.querySelector('.button5');
// button5.onclick = function () {
//     button5.textContent = 'Вы нажали на эту кнопку';
// }

// // Task 3

// // Создать кнопку, которая добавляет заголовок h1 с текстом, 
// // “Новый заголовок", данный элемент нужно расположить после кнопки

// const button = document.querySelector('.button');
// const text = document.createElement('h1');
// button.parentElement.appendChild(text);

// button.onclick = function () {
//    text.textContent = 'Новый заголовок';
// }

// // Создать вторую кнопку, которая будет удалять созданный заголовок h1

// const button1 = document.querySelector('.button1');
// button1.onclick = function () {
//     button.parentElement.removeChild(text);
// }
// // Создать третью кнопку, при наведении на которую в консоль будет 
// // выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки,
// //  в консоли должен появиться текст “Наведения на кнопку больше нет”

// const button2 = document.querySelector('.button2');
// button2.addEventListener('mouseover', function () {
//     console.log('вы навели на данную кнопку');
// })
// button2.addEventListener('mouseout', function (){
//     console.log('Наведения на кнопку больше нет');
// })

// Task 4

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”

// const button = document.querySelector('.button');
// const list = document.querySelector('ul');
// button.onclick = function () {
//     list.appendChild(document.createElement('li'));
//     list.children[list.children.length - 1].textContent = 'новый элемент списка';
// }

// // Создать кнопку, которая будет удалять первый элемент из созданного списка

// const button1 = document.querySelector('.button1');
// button1.onclick = function () {
//     list.removeChild(list.children[0]);
// }

// // Создать кнопку, при клике на которую ей добавляется класс “click”

// const button2 = document.querySelector('.button2');
// button2.onclick = function () {
// //     button2.className = 'click';
// }

// Task 5

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button

// const button = document.createElement('button');
// button.textContent = 'Отправить';
// const div = document.querySelector('.content');
// div.appendChild(button);

// button.onclick = function () {
//     button.textContent = 'Текст отправлен';
// }

// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

