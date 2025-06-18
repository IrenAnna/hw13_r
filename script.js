//порівняння двох об'єктів
// const obj1 = {a: 1, b: 2, c: 3};
// const obj2 = {a: 1, b: 5, d: 3};
// for (let g in obj1) {
//     if (g in obj2) {
//         if (obj1[g] === obj2[g]) {
//             console.log(' Ключ `${g}` однаковий');
//         } else {
//             console.log('Ключ `${g}` різний: ${obj1[g]} vs ${obj2[g]}');
//         }
//     } else {
//         console.log('Ключ `${g}` відсутній в obj2');
//     }
// }
// for (let g in obj2) {
//     if (!(g === obj2))  {
//         console.log('Ключ `${g}` відсутній в obj1');
//     }
// }


// Визначення найчастішого ел-та в масиві
// const items = [1, 3, 4, 3, 2, 1, 3, 2, 1, 1]
// const counts = {};
//
// for (let q = 0; q < items.length; q++) {
//    const item = items[q];
//     if (item in counts) {
//         counts[item]++;
//     }else {
//         counts[item] = 1;
//     }
// }
// let mostUse = null;
// let maxCount = 0;
// for (const s in counts) {
//     if (counts[s] > maxCount) {
//         maxCount = counts[s];
//         mostUse = s;
//     }
// }
// console.log(`Найчастіший ел-т: ${mostUse}, к-ть повторень: ${maxCount}`);


//Аналіз символів у рядку
// function getRandomString(length) {
//     const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let result = '';
//
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * str.length);
//         result += str[randomIndex];
//     }
//
//     return result;
// }
// let golosni = "aoieuyAEUIOY".split('');
// const randomString = getRandomString(20);
// console.log("Рандомний ряд:", randomString);
// let s =  randomString.split('');
//
// let gcount = s.filter(function (value){
//     golosni.includes(value.toLowerCase());
//     return golosni.includes(value);
// });
//     let prugolosni = s.filter(function (value){
//         return /[a-zA-Z]/.test(value) && !golosni.includes(value.toLowerCase());
//
//
// });
//     console.log("Кількість голосних:", gcount.length);
//     console.log("Кількість приголосних:", prugolosni.length );


//Аналіз оцінок студента

// const length = Math.floor(Math.random() * 21) + 5;
// const ocinku = [];
//
// for (let i = 0; i < length; i++) {
//     let ocinka = Math.floor(Math.random() * 12) + 1;
//     ocinku.push(ocinka);
// }
// console.log("Оцінки студента:", ocinku);
//
// let sum = 0;
// for (let ocinka of ocinku) {
//     sum += ocinka;
// }
// let mediumBal = sum / ocinku.length;
// console.log('Середній бал:',  mediumBal.toFixed(2));
// let result;
// switch (true) {
//     case (mediumBal >= 1 && mediumBal <= 3):
//         result = "Дуже погано";
//         break;
//     case (mediumBal > 3 && mediumBal <= 6):
//         result = "Погано";
//         break;
//     case (mediumBal > 6 && mediumBal <= 9):
//         result = "Добре";
//         break;
//     case (mediumBal > 9 && mediumBal <= 12):
//
//         result = "Відмінно";
//         break;
//     default:
//         result = "Помилка в обчисленнях";
// }
// console.log("Оцінка за середнім балом:", result);


//Задача 1: Перетворення даних користувачів (map)
// const users = [
//     {id: 1, name: 'Anna', email: 'ANNA@MAIL.COM'},
//     {id: 2, name: 'Bob', email: 'Bob@Mail.com'}
// ];
// let result = users.map((user) => {
//     return {
//         name: user.name,
//         email: user.email,
//     }
// });
// let result1 = result.map(({email}) => ({
//     email: email.toLowerCase(),
// }))
// console.log(result);
// console.log(result1);


// Задача 2: Перевірка доступності товарів (some / every)
// const items = [
//     { name: 'Phone', inStock: true, discounted: false },
//     { name: 'Headphones', inStock: true, discounted: true },
//     { name: 'Charger', inStock: true, discounted: false }
// ];
// let areAllInStock = items.every(item => item.inStock);
//
// let  hasDiscountedItem = items.some(item => item.discounted);
// console.log(hasDiscountedItem);
// console.log(areAllInStock);

//
// //Видалення з масиву за умовою (splice + findIndex)
// const posts = [
//     { id: 101, title: 'Post 1' },
//     { id: 102, title: 'Post 2' },
//     { id: 103, title: 'Post 3' }
// ];
// function  removeById(posts, id) {
//     let num = posts.findIndex(post => post.id === id);
//     if (num !== -1) {
//         posts.splice(num, 1);
//     }
// }
// removeById(posts, 102);
// console.log(posts);
