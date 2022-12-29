// -------------------- Variables and Types (Lesson 1) --------------------

// ******************** Numbers ********************

// console.log(Number('23qwe')); //NaN
// console.log(Number(23)); //23
// console.log(Number.parseInt('3.14')); //3
// console.log(Number.parseFloat(Math.PI)); //3.141592653589793
// console.log(Number.parseFloat('pi3.14')); //NaN
// console.log(Number.parseFloat('3.14pi')); //3.14
// console.log(Number.isNaN(0 / 0)); //true
// console.log(Number.isNaN(NaN)); //true

// ******************** Strings ********************

// console.log('apple'.length); //5
// const titel = 123;
// console.log(titel.length); //undefined
// console.log('apple'.toUpperCase()); //APPLE
// console.log('apple'.indexOf('ap', 1)); //-1
// console.log('apple'.includes('pp', 2)); //false
// console.log('apple'.endsWith('le')); //true
// -----------------------------------------------------------------------------
//  Виведи на екран загальну кількість всіх яблук
// -----------------------------------------------------------------------------
// const goodApples = 10;
// const badApples = 5;
// const halfApples = 4;
// console.log(goodApples + badApples + halfApples / 2);
// -----------------------------------------------------------------------------
// Заміни вираз перевизначення комбінованим оператором `+=`
// -----------------------------------------------------------------------------
// let students = 100;
// students = students + 50;
// console.log((students += 50));
// -----------------------------------------------------------------------------
// Виведи у консоль заокруглені вгору/вниз і т.д. значення змінної
// `value`. Використовуй методи `Math.floor()`, `Math.ceil()`,  `Math.round()`
// -----------------------------------------------------------------------------
// let value;
// value = Math.round(Math.PI * 10000) / 10000;
// value = Math.floor(3.1416);
// value = Math.ceil(3.1416);
// console.log(value);
// -----------------------------------------------------------------------------
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`
// -----------------------------------------------------------------------------
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const allBots = repairBots + defenceBots;
// console.log(`${companyName} has ${allBots} Bots in stock`);
// -----------------------------------------------------------------------------
// Напиши скрипт, який розраховує індекс маси тіла людини і округлити
// до однієї цифри. Розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.
// -----------------------------------------------------------------------------
// const weight = prompt('Введіть масу, кг');
// const height = prompt('Введіть зріст, м');
// const weightNa = weight.replace(',', '.');
// const heightNa = height.replace(',', '.');
// const massIndex = Number(weightNa / Math.pow(heightNa, 2));
// console.log(Math.round(massIndex * 100) / 100);
// -----------------------------------------------------------------------------
// Яким буде результат виразів? String порівнюються посимвольно по коду символа.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// -----------------------------------------------------------------------------
// console.log(5 > 4); // true
// console.log(10 >= '7'); // true.
// console.log('2' > '12');// true.
// const str = '12';
// console.log(str.charCodeAt(0));
// const apple = 'apple';
// const bigApple = 'Apple';
// console.log(`${bigApple.charCodeAt(0)} < ${apple.charCodeAt(0)}`);
// console.log('Apple' > 'apple'); // false
// console.log('2' < '12'); // false
// console.log('45' == 45); // true
// console.log('6' === 6); // false.
// console.log('false' === false); // false
// console.log(1 == true); // true.
// console.log(1 === true); // false.
// console.log('0' == false); //true.
// console.log('0' === false); // false.
// console.log('Apple' === 'apple'); // false.
// console.log(undefined == null); // true.
// console.log(undefined === null); // false.
// -----------------------------------------------------------------------------
// && - повертає перший який дасть false. Або останній, якщо false нема
// || - повертає перший який дасть true. Або останній, якщо true нема
//  Яким буде результат виразів?
// -----------------------------------------------------------------------------
// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(1 && null && 2); // null
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(2 && 3); // 3
// console.log(null || (2 && 3) || 4); // 3
// console.log(null && 'Mango'); // null
// console.log((null && 'Mango') || 'Kiwi'); //Kiwi
// console.log(null || ('Mango' && false)); //false
// -----------------------------------------------------------------------------
// ?? - returns its right-hand side operand when its left-hand side operand is
// null or undefined, and otherwise returns its left - hand side operand.
// -----------------------------------------------------------------------------
// const defaultValue = 'Kiwi';
// console.log(null ?? defaultValue); //Kiwi
// console.log(undefined ?? defaultValue); //Kiwi
// console.log(defaultValue ?? undefined); //Kiwi
// console.log(0 ?? defaultValue); //0
// console.log(false ?? defaultValue); //false
// console.log(defaultValue ?? false); //Kiwi
// -----------------------------------------------------------------------------
// Напиши скрипт, який переведе значення `totalMinutes`
// (кількість хвилин) в рядок у форматі годин та хвилин `HH:MM`.
//     70 покаже 01:10     //    450 покаже 07:30     //    1441 покаже 24:01
// -----------------------------------------------------------------------------
// const time = prompt('Введіть кількість хвилин');
// const timeHour = Math.floor(time / 60);
// const timeMinutes = time % 60;
// const formatTimeHour = String(timeHour).padStart(2, '0');
// const formatTimeMinutes = String(timeMinutes).padStart(2, '0');
// console.log(`${formatTimeHour}:${formatTimeMinutes}`);

// -------------------- Branches and Cycles (Lesson 2) --------------------

// -----------------------------------------------------------------------------
// Використовуючи if..else та prompt, напиши код, який питатиме:
// `"Яка офіційна назва JavaScript?"`. Якщо введено `ECMAScript`, то показуй
// alert з рядком`"Правильно!"`, в іншому випадку - `"Не знаєте? ECMAScript!"`
// -----------------------------------------------------------------------------
// let nameJS;
// nameJS = prompt('Яка офіційна назва JavaScript?');
// if (nameJS === 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }
// -----------------------------------------------------------------------------
// Напиши скрипт для відображення годин та хвилин у консолі браузера
// у вигляді рядка формату `"14 г. 26 хв."`. Якщо значення змінної `minutes`
// дорівнює `0`, то виводь рядок `"14 г."`, без хвилин.
// -----------------------------------------------------------------------------
// let time;
// time = prompt('Введіть хвилини');
// const hours = Math.floor(time / 60);
// const minutes = time % 60;
// if (minutes === 0) {
//   alert(`${hours} г.`);
// } else {
//   alert(`${hours} г. ${minutes} хв.`);
// }
// -----------------------------------------------------------------------------
// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`, якщо
// у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.
// -----------------------------------------------------------------------------
// const anyNumber = Number(prompt('Add any Number'));
// if (anyNumber === 0) {
//   console.log('Це нуль');
// } else if (anyNumber > 0) {
//   console.log('Це позитивне число');
// } else if (anyNumber < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Це не число');
// }
// -----------------------------------------------------------------------------
// Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 1000.
// -----------------------------------------------------------------------------
// const a = Number(prompt('a ='));
// const b = Number(prompt('b ='));
// if (a && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 1000);
// }
// -----------------------------------------------------------------------------
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використай
// конструкцію `if...else`. (використання ! оператора Logical NOT)
// -----------------------------------------------------------------------------
// let link = 'https://www.edu.goit.global/learn';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);
// -----------------------------------------------------------------------------
// Напиши скрипт який перевіряє чи закінчується змінна `link` символом `/`.
//  Якщо ні, додай до кінця значення `link` цей символ, але тільки втому випадку,
//  якщо в `link` є підрядок `"my-site"`.
// -----------------------------------------------------------------------------
// let link;
// link = 'https://www.edu.goit.global/my-site/learn';
// if(!link.endsWith('/') && link.includes('my-site')){link += '/'}
// console.log(link);
// -----------------------------------------------------------------------------
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.
// -----------------------------------------------------------------------------
// const age = 26;
// const beverage = age >= 21 ? 'Beer' : 'Juice';
// console.log(beverage); // "Beer"
// -----------------------------------------------------------------------------
// let link;
// link = 'https://www.edu.goit.global/my-site/learn';
// !link.endsWith('/') && link.includes('my-site') ? link += '/': link ='Не той сайт';
// console.log(link);
// -----------------------------------------------------------------------------
// Напиши скрипт, що виводитиме в консоль рядок залежно від значення змінної `hours`.
// Якщо значення змінної `hours`:
// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`
// -----------------------------------------------------------------------------
// let hours = prompt('Введіть кількість годин');
// if (hours < 17) {
//   console.log('Pending');
// } else if (hours > 24) {
//   console.log('Overdue');
// } else {
//   console.log('Expires');
// }
// -----------------------------------------------------------------------------
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй `switch`.
// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`
// -----------------------------------------------------------------------------
// const restOfDays = Number(prompt('Скільки днів'));
// switch (restOfDays) {
//   case 0:
//     console.log('Сьогодні');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Післязавтра');
//     break;
//   default:
//     console.log('Дата у майбутньому');
// }
// -----------------------------------------------------------------------------
// Напиши цикл for, який виводить у консоль браузера числа за зростанням
// від `min` до `max`, але тільки якщо число кратне `5`.
// -----------------------------------------------------------------------------
// const min = 13;
// const max = 89;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }
// -----------------------------------------------------------------------------
// const min = 13;
// const max = 89;
// let i = min;
// while (i <= max) {
//   if (i % 5 === 0) console.log(i);
//   i += 1;
// }
// -----------------------------------------------------------------------------
// Напиши скрипт, який питатиме логін за допомогою `prompt`
// - Якщо відвідувач вводить `"admin"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Я вас не знаю"`
// Пароль перевіряти так:
// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Привіт!"`
// - Інакше виводити рядок `"Невірний пароль"`
// -----------------------------------------------------------------------------
// const user = prompt('Who are you?');
// if (user === 'admin') {
//   const pass = prompt('Enter password');
//   if (pass === 'iadmin') {
//     console.log('Hello');
//   } else {
//     console.log('Wrong pasword');
//   }
// } else {
//   if (!user) {
//     console.log('Canceled');
//   } else {
//     console.log("I don't know you");
//   }
// }
// console.log(!null);
// console.log(!undefined);
// console.log(!false);
// console.log(!'');
// console.log(!0);

// -------------------- Arrays (Lesson 3) --------------------

// ******************** Value and Reference ********************

// const fruits = ['apple', 'banana', 'plum', 'kiwi', 'peach'];
// const vitamins = ['apple', 'banana', 'plum', 'kiwi', 'peach'];
// console.table(fruits);
// const a = fruits;
// const b = fruits;
// console.log(a === b); //true
// console.log(fruits === vitamins); //false

// ******************** Array Iteration ********************

// const fruits = ['apple', 'banana', 'plum', 'kiwi', 'peach'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(i, fruits[i]);
// }
// for (const localVariable of fruits) {
//   console.log(localVariable);
// }
// -----------------------------------------------------------------------------
// for (const varName of arrayName/stringName) {console.log(varName);}
// iterates over iterable(enumerable) objects such as arrays and strings;
// -----------------------------------------------------------------------------
// const numbers = [1, 2, 5, 4, 7, 34, 12, 9, 15, 22, 31, 26, 23];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     total += number;
//   }
// }
// console.log(total);
// -----------------------------------------------------------------------------
// const string = 'Depeche Mode';
// for (const letter of string) {
//   console.log(letter);
// }
// -----------------------------------------------------------------------------
// const numbers = [1, 2, 5, 4, 7, 34, 12, 9, 15, 22, 31, 26, 23];
// let maxNumber = numbers[0];
// for (const number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);

// ******************** Array Methods ********************

// const passwords = ['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'];
// const adminPass = 'qweasd';
// for (const password of passwords) {
//   if (password === adminPass) {
//     console.log(`Success, admin is found! adminPass is '${password}'`);
//     break;
//   }
//   console.log('Found NOTHING');
// }
// -----------------------------------------------------------------------------
// const passwords = ['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'];
// const adminPass = 'qweasd';
// const message = passwords.includes(adminPass)
//   ? `Success, admin is found! adminPass is '${adminPass}'`
//   : 'Found NOTHING';
// console.log(message);
// -----------------------------------------------------------------------------
// const fruits = ['apple', 'banana', 'plum', 'kiwi', 'peach'];
// let string = '';
// for (const fruit of fruits) {
//   string += fruit + '---';
// }
// string = string.slice(0, string.length - 3);
// console.log('method .slice: ', string);

// const fruitsJoin = fruits.join('---');
// console.log('method .join:  ', fruitsJoin);
// -----------------------------------------------------------------------------
// const DM = 'Depeche Mode';
// const arrayDM = DM.split('');
// let inverseDM = '';
// for (const letter of arrayDM) {
//   inverseDM +=
//     letter === letter.toUpperCase()
//       ? letter.toLowerCase()
//       : letter.toUpperCase();
// }
// console.log(inverseDM);
// -----------------------------------------------------------------------------
// const string = 'How can I make a Chain of Calls?';
// const chain = string.replaceAll('?', '').toLowerCase().split(' ').join('-');
// console.log('chain: ', chain);
// -----------------------------------------------------------------------------
// const numbers1 = [1, 2, 5, 4, 7, 34, 12, 9];
// const numbers2 = [15, 22, 31, 26, 23];
// for (const number of numbers1.concat(numbers2)) {
//   console.table(number);
// }
// -----------------------------------------------------------------------------
// const wrong = ['d', 'i', 'p', 'i', 'ch', 'M', 'o', 'd', 'a', 'R', 'x'];
// console.log('string DM: ', wrong.join(''));
// let DM = '';
// DM = wrong.splice(wrong.indexOf('M'), 0, ' '); // addition ' '
// DM = wrong.splice(wrong.indexOf('R'), 1); //removal 'R'
// DM = wrong.pop(); //removal last element
// DM = wrong.splice(wrong.indexOf('d'), 1, 'D'); // replacement first 'd'
// DM = wrong.splice(wrong.indexOf('ch'), 1, 'c', 'h', 'e'); // replacement 'ch'
// while (wrong.includes('i') || wrong.includes('a')) {
//   DM = wrong.splice(wrong.indexOf('i'), 1, 'e');
//   DM = wrong.splice(wrong.indexOf('a'), 1, 'e');
// } // replacement all 'd', 'e'
// console.log('string DM: ', wrong.join(''));
// -----------------------------------------------------------------------------
// Напиши скрипт сортування масиву рядків в алфавітному порядку.
// -----------------------------------------------------------------------------
// const lang = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(lang.sort());
// const num = ['x', 'M', 'o', 'd', 'a', 'R', 1, 5, 4, 7, 9, 15, 22, 31, 23,];
// console.log(num.sort((a, b) => b - a));
// console.log(num.sort());
// -----------------------------------------------------------------------------
// Напиши скрипт, який перетворює рядок на рядок із зворотнім порядоко букв.
// -----------------------------------------------------------------------------
// let string = 'Welcome to the Future';
// string = string.split('').reverse().join('');
// console.log('string: ', string);
// let reversedString = '';
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   const arrayFromString = string.split('');
//   reversedString += arrayFromString[i];
// }
// console.log('string: ', reversedString);

// -------------------- Functions (Lesson 4) --------------------

// ******************** Function declaration ********************

// const a = [15, 22, 31, 26, 23];
// console.log('calcTotal(a) = ', calcTotal(a));
// function calcTotal(numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log('calcTotal(a) = ', calcTotal(a));
// -----------------------------------------------------------------------------
// const b = [1, 2, 5, 4, 7, 34, 12, 9];
// console.log('Cannot access "calcTotalFE" before initialization');
// const calcTotalFE = function (numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// };
// console.log('calcTotalFE(b) = ', calcTotalFE(b));

// ******************** Usage Features ********************

// function findPass(passwords, adminPass) {
//   for (const password of passwords) {
//     if (password === adminPass) {
//       console.log('Hello');
//       return;
//     }
//   }
//   console.log('Wrong password');
// }
// findPass(['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'], 'qweasd');
// -----------------------------------------------------------------------------
// function findPass(passwords, adminPass) {
//   return passwords.includes(adminPass)
//     ? console.log('Hello')
//     : console.log('Wrong password');
// }
// findPass(['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'], 'qweasd');
// findPass(['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'], 'DM');
// -----------------------------------------------------------------------------
// function findMin(numbers) {
//   let minNumber = numbers[0];
//   for (const number of numbers) {
//     minNumber = minNumber < number ? minNumber : number;
//   }
//   return console.log('minNumber = ', minNumber);
// }
// findMin([1, 2, 5, 4, 7, 34, 12, 9, 15, -3, 31, 26, 23]);
// findMin([4, 7, 34, 12, 9, 15, 1, 31, 26, 23]);
// -----------------------------------------------------------------------------
// function reverse(string) {
//   let reverseString = '';
//   for (const letter of string.split('')) {
//     reverseString +=
//       letter === letter.toUpperCase()
//         ? letter.toLowerCase()
//         : letter.toUpperCase();
//   }
//   return console.log(reverseString);
// }
// reverse('dEPECHE mODE');
// -----------------------------------------------------------------------------
// console.log(normString('I have to make a Chain of Calls!!!'));
// function normString(string) {
//   return string
//     .replaceAll('!', '')
//     .replaceAll('?', '')
//     .toLowerCase()
//     .split(' ')
//     .join('-');
// }
// console.log(normString('How can I make a Chain of Calls???'));
// -----------------------------------------------------------------------------
// function multiply() {
//   let total = 1;
//   for (const varName of arguments) total *= varName;
//   return console.log('total = ', total);
// }
// multiply(2, 4, 5, 10);
// -----------------------------------------------------------------------------
// function fn(a, b, ...argToArray) {
//   Array.from(arguments);
//   console.log(arguments);
//   console.log('Array.from():', Array.from(arguments));
//   console.log('a =', a, 'b =', b, 'argToArray = ', argToArray);
// }
// fn(2, 3, 4, 5, 6);
// -----------------------------------------------------------------------------
// matchToArray([3, 7, 5, 1, 8], 0, 3, 6, 5, 2, 1, 3);

// function matchToArray(data, ...arg) {
//   let match = [];
//   for (const argItem of arg) {
//     for (const dataItem of data) {
//       if (dataItem === argItem) {
//         match.push(argItem);
//         console.log('match:', match);
//         console.log(
//           '',
//           data.indexOf(dataItem),
//           'of "data" equal to arg = ',
//           argItem
//         );
//       }
//     }
//   }
//   const message = match.length === 0 ? 'Found nothing' : `New Array [${match}]`;
//   console.log(message);
// }
// -----------------------------------------------------------------------------
// matchToData([3, 7, 5, 1, 8], 0, 3, 6, 5, 2, 1, 3);

// function matchToData(data, ...arg) {
//   let match = [];
//   for (const argItem of arg) {
//     if (data.includes(argItem)) {
//       match.push(argItem);
//     }
//   }
//   console.log('match: ', match);
//   return match;
// }
// -----------------------------------------------------------------------------

//
//
//
//

// -------------------- Objects (Lesson 5) --------------------
// -------------------- Destructuring and spread/rest (Lesson 6) --------------------
// -------------------- Callbacks and Arrow Functions (Lesson 7) --------------------
// -------------------- Iterating Array Methods (Lesson 8) --------------------
// -------------------- The keyword this (Lesson 9) --------------------
// -------------------- Prototypes and Classes (Lesson 10) --------------------
// -------------------- Destructuring and spread/rest (Lesson 11) --------------------
// -------------------- Callbacks and Arrow Functions (Lesson 12) --------------------
// -------------------- Event Delegation (Lesson 13) --------------------
// -------------------- Throttle/Debounce and Lazyload (Lesson 14) --------------------
// -------------------- Code Modularity (Lesson 15) --------------------
// -------------------- Web Storage (Lesson 16) --------------------
// -------------------- Timers and Time (Lesson 17) --------------------
// -------------------- Promises (Lesson 18) --------------------
// -------------------- HTTP Requests (Lesson 19) --------------------
// -------------------- Pagination (Lesson 20) --------------------
// -------------------- CRUD (Lesson 21) --------------------
// -------------------- Syntax async/await (Lesson 22) --------------------
