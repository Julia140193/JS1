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


