// '🍎'--------------------'🍎' Variables and Types (Lesson 1) '🍎'--------------------'🍎'

// The six values ​​that are converted by Boolean() to `false`:
// `0`, `NaN`, `null`, `undefined`, an empty string `""` or `''` and the value `false` itself.
// Everything else is converted to`true`.
// -----------------------------------------------------------------------------
// console.log('Boolean(0): ', Boolean(0));  //false
// console.log('Boolean(NaN): ', Boolean(NaN));  //false
// console.log('Boolean(null): ', Boolean(null));  //false
// console.log('Boolean(undefined): ', Boolean(undefined));  //false
// console.log('Boolean(false): ', Boolean(false));  //false
// console.log('Boolean(''): ', Boolean('')); // ?????????
// -----------------------------------------------------------------------------
// typeof null;
// console.log('typeof null: ', typeof null);
// console.log('typeof undefined: ', typeof undefined);
// console.log('typeof NaN: ', typeof NaN);
// console.log('typeof 23: ', typeof 23);
// console.log('typeof 0: ', typeof 0);
// console.log('typeof "qweasd": ', typeof 'qweasd');
// console.log('typeof "": ', typeof '');
// console.log('typeof true: ', typeof true);
// -----------------------------------------------------------------------------

// ******************** Numbers ********************

// console.log(Number('23qwe')); //NaN
// console.log(Number(23)); //23
// console.log(Number(false)); //0
// console.log(Number(true)); //1
// console.log(Number(null)); //0
// console.log(Number(undefined)); //NaN

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
// const width = '150.228245624562px';
// console.log('width: ', typeof width, width);
// const widthInteger = Number.parseInt(width);
// console.log('widthInteger: ', typeof widthInteger, widthInteger);
// const widthFloat = Number.parseFloat(width).toFixed(2);
// console.log('widthFloat: ', typeof widthFloat, widthFloat);
// -----------------------------------------------------------------------------
// let pow = 2 ** 4;
// console.log('pow =', pow);
// pow = Math.pow(2, 4);
// console.log('pow =', pow);
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
// При порівнянні з числом відбувається перетворення на число.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// -----------------------------------------------------------------------------
// console.log(5 > 4); // true
// console.log(8 >= '7'); // true.
// console.log(5 > '9'); // false
// console.log('2' > '12'); // true.
// -----------------------------------------------------------------------------
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true
// console.log("" && "Mango"); // false && true -> ''
// console.log("Mango" && ""); // true && false -> ''
// console.log("Mango" && "Poly"); // true && true -> 'Poly'
// console.log("Poly" && "Mango"); // true && true -> 'Mango'
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !'Mango' -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !'' -> !false -> true
// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true
// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
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
// const isOnLine = true;
// const isFriend = true;
// const isDdsturb = false;

// const canOpenChat = isOnLine && isFriend && !isDdsturb;
// console.log('canOpenChat: ', canOpenChat);
// -----------------------------------------------------------------------------
// const sub = 'vip';
// const sub = 'pro';
// const sub = 'free';

// const canHaveAccess = sub === 'vip' || sub === 'pro' || sub !== 'free';
// console.log('canHaveAccess: ', canHaveAccess);
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

// '🍎'--------------------'🍎' Branches and Cycles (Lesson 2) '🍎'--------------------'🍎'

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
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй `switch`.
// - Якщо до дедлайну 0 днів - виведи рядок `"Вже зараз"`
// - Якщо до дедлайну 1 день - виведи рядок `"Вже зараз"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Ще є час"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`
// -----------------------------------------------------------------------------
// const restOfDays = Number(prompt('Скільки днів'));
// switch (restOfDays) {
//   case 0:
//   case 1:
//     console.log('Вже зараз');
//     break;

//   case 2:
//     console.log('Ще є час');
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
//   if (i % 5 !== 0) {
//     continue;
//   }
//   console.log(i);
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

// '🍎'--------------------'🍎' Arrays (Lesson 3) '🍎'--------------------'🍎'

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
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// function findLongestWord(string) {
//   const stringArray = string.split(' ');
//   let longest = '';

//   for (let i = 0; i < stringArray.length; i += 1) {
//     if (longest.length < stringArray[i].length) {
//       longest = stringArray[i];
//     }
//   }
//   console.log('longest: ', longest);
//   return longest;
// }
// -----------------------------------------------------------------------------
// Create function so that it returns an array of all integers from the value min to max.
// -----------------------------------------------------------------------------
// createArrayOfNumbers(1, 5);

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log('numbers: ', numbers);
//   return numbers;
// }
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
// -----------------------------------------------------------------------------
// Об’єднати більше двох масивів
// -----------------------------------------------------------------------------
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food);
// -----------------------------------------------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//   return console.log(firstArray.concat(secondArray).slice(0, maxLength));
// }
// makeArray(['Mango'], ['Ajax', 'Poly', 'Houston'], 3);
// -----------------------------------------------------------------------------
// Отримати рандомне значення масиву
// -----------------------------------------------------------------------------
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange'];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit);

// '🍎'--------------------'🍎' Functions (Lesson 4) '🍎'--------------------'🍎'

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

// findPass(['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'], 'qweasd');

// function findPass(passwords, adminPass) {
//   for (const password of passwords) {
//     if (password === adminPass) {
//       console.log('Hello');
//       return;
//     }
//   }
//   console.log('Wrong password');
// }
// -----------------------------------------------------------------------------
// findPass(['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'], 'qweasd');
// findPass(['123qwe', '321QWE', 'qweasd', '456ASD', 'ASDewq'], 'DM');

// function findPass(passwords, adminPass) {
//   return passwords.includes(adminPass)
//     ? console.log('Hello')
//     : console.log('Wrong password');
// }
// -----------------------------------------------------------------------------
// findMin([1, 2, 5, 4, 7, 34, 12, 9, 15, -3, 31, 26, 23]);
// findMin([4, 7, 34, 12, 9, 15, 1, 31, 26, 23]);

// function findMin(numbers) {
//   let minNumber = numbers[0];
//   for (const number of numbers) {
//     minNumber = minNumber < number ? minNumber : number;
//   }
//   return console.log(
//     'minNumber =',
//     minNumber,
//     ' Math.min(...) =',
//     Math.min(...numbers)
//   );
// }
// -----------------------------------------------------------------------------
// reverse('dEPECHE mODE');

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
// -----------------------------------------------------------------------------
// console.log(normString('How can I make a Chain of Calls???'));
// console.log(normString('I have to make a Chain of Calls!!!'));

// function normString(string) {
//   return string
//     .replaceAll('!', '')
//     .replaceAll('?', '')
//     .toLowerCase()
//     .split(' ')
//     .join('-');
// }
// -----------------------------------------------------------------------------
// multiply(2, 4, 5, 10);

// function multiply() {
//   let total = 1;
//   for (const varName of arguments) total *= varName;
//   return console.log('total = ', total);
// }
// -----------------------------------------------------------------------------
// fn(2, 3, 4, 5, 6);

// function fn(a, b, ...argToArray) {
//   Array.from(arguments);
//   console.log(arguments);
//   console.log('Array.from():', Array.from(arguments));
//   console.log('a =', a, 'b =', b, 'argToArray = ', argToArray);
// }
// -----------------------------------------------------------------------------
// Write a function getCommonElements(array1, array2) that takes two arrays of
// arbitrary length in the parameters array1 and array2 and returns a new array
// consisting of those elements that are present in both of the original arrays.
// -----------------------------------------------------------------------------
// getCommonElements1([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements2([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// function getCommonElements1(array1, array2) {
//   const array = [];
//   for (const element1 of array1) {
//     for (const element2 of array2) {
//       if (element1 === element2) {
//         array.push(element1);
//       }
//     }
//   }
//   return console.log(array);
// }

// function getCommonElements2(array1, array2) {
//   const array = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }
//   return console.log(array);
// }
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
//   console.log('data: ', Math.max(...arg));

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
// The getSubscriptionPrice(type) function gets a string with the user's subscription
// type(the type parameter), checks it against the three possible types of monthly
// subscriptions, and returns the price stored in the price variable.
// -----------------------------------------------------------------------------
// getSubscriptionPrice('professional');

// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;
//   }
//   return console.log('price: ', price);
// }
// -----------------------------------------------------------------------------
// The checkPassword(password) function takes the password in the password parameter,
// checks it against the administrator password in the ADMIN_PASSWORD variable, and
// returns a message about the result of the comparison.
// -----------------------------------------------------------------------------
// checkPassword('polyhax');

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case 'jqueryismyjam':
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }
//   return console.log(message);
// }
// -----------------------------------------------------------------------------
// Write a function filterArray(numbers, value), that takes an array of numbers
// (the numbers parameter) and returns a new array containing only those elements
// of the numbers array that are greater than the value of the value parameter(number).
// -----------------------------------------------------------------------------
// filterArray([12, 24, 8, 41, 76], 20);

// function filterArray(numbers, value) {
//   const filtred = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filtred.push(numbers[i]);
//     }
//   }
//   console.log(filtred);
//   return filtred;
// }
// -----------------------------------------------------------------------------
// The checkForSpam(message) function takes a string (the message parameter),
// checks it for the forbidden words spam and sale, and returns the result of the
// check. Words in the string of the message parameter can be in arbitrary case,
// for example SPAM or sAlE.
// -----------------------------------------------------------------------------
// checkForSpam('Get best sale offers now!');

// function checkForSpam(message) {
//   let result;
//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');
//   return console.log(result);
// }
// -----------------------------------------------------------------------------
// Сгенерувати випадкові числа в межах max - min
// -----------------------------------------------------------------------------
// let max = 0;
// let min = 0;
// while (max <= min || !Boolean(max) || !Boolean(min)) {
//   max = Number.parseInt(prompt('Input MAX number'));
//   min = Number.parseInt(prompt('Input MIN number'));
// }
// console.log('min =', min);
// console.log('max =', max);
// const random = (Math.random() * (max - min) + min).toFixed(2);
// console.log('random =', random);
// -----------------------------------------------------------------------------
// Доставка в залежності від опції checkbox:
// 'Завтра з офісу', 'Сьогодні поштою', 'В зручний час зі складу'
// -----------------------------------------------------------------------------
// deliveryDay('office', 'post', 'warehouse');

// function deliveryDay(...delivery) {
//   let choice;
//   for (const type of delivery) {
//     choice = prompt('Як зручно забрати?', type);
//     if (choice !== null) break;
//   }

//   switch (choice) {
//     case 'office':
//       console.log('Завтра з офісу');
//       break;
//     case 'post':
//       console.log('Сьогодні поштою');
//       break;
//     case 'warehouse':
//       console.log('В зручний час зі складу');
//       break;
//     default:
//       console.log('Не то ввели');
//   }
// }
// ****************************************
// deliveryDay('office', 'post', 'warehouse');

// function deliveryDay() {
//   let choice;
//   for (const type of arguments) {
//     choice = prompt('Як зручно забрати?', type);
//     if (choice !== null) break;
//   }

//   switch (choice) {
//     case 'office':
//       console.log('Завтра з офісу');
//       break;
//     case 'post':
//       console.log('Сьогодні поштою');
//       break;
//     case 'warehouse':
//       console.log('В зручний час зі складу');
//       break;
//     default:
//       console.log('Не то ввели');
//   }
// }
// -----------------------------------------------------------------------------
//// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
// `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація починається з `1`.
// -----------------------------------------------------------------------------
// logItems('Mango', 'Poly', 'Ajax');
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// function logItems(items) {
//   if (typeof items === 'string') {
//     const items = Array.from(arguments);
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   } else {
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   }
// }
// -----------------------------------------------------------------------------
// Функція `findLargestNumber(numbers)`яка шукає найбільше число в масиві.
// -----------------------------------------------------------------------------
// findLargestNumber([2, 17, 94, 1, 23, 37]); // 94
// findLargestNumber([49, 4, 7, 83, 12]); // 83

// function findLargestNumber(numbers) {
//   console.log(Math.max(...numbers));
// }
// -----------------------------------------------------------------------------
// Нормалізувати рядок рядок з кількох слів (перші букви - великі, інші - маленькі)
// -----------------------------------------------------------------------------
// normString('   dEpechE   moDe');
// normString(' hAppY     NEW        yEAr!');

// function normString(string) {
//   let strArray = string.toLowerCase().trim();
//   strArray = strArray.split(' ');

// while (strArray.includes('')) {
//   strArray.splice(strArray.indexOf(''), 1);
// }
//   for (let index = 0; index < strArray.length; index += 1) {
//     {
//       const a = strArray[index].at(0).toUpperCase();
//       const b = strArray[index].replace(strArray[index].at(0), '');
//       strArray[index] = a + b;
//     }
//   }
//   const normString = strArray.join(' ');
//   console.log(string);
//   console.log(normString);
// }
// -----------------------------------------------------------------------------
// normString('   dEpechE   moDe');
// normString('hAppY     NEW        yEAr!');

// function normString(string) {
//   let strArray = string.toLowerCase().trim();
//   while (strArray.includes('')) {
//     strArray.splice(strArray.indexOf(''), 1);
//   }
//   for (let index = 0; index < strArray.length; index += 1) {
//     {
//       const a = strArray[index].at(0).toUpperCase();
//       const b = strArray[index].replace(strArray[index].at(0), '');
//       strArray[index] = a + b;
//     }
//   }
//   const normString = strArray.join(' ');
//   console.log(string);
//   console.log(normString);
// }
// // ********************
// function normString(string) {
//   const strArray = string.trim().toLowerCase().split(/\s+/);
//   let normArray = [];
//   for (const item of strArray) {
//     normArray.push(item.at(0).toUpperCase() + item.substring(1));
//   }
//   const normString = normArray.join(' ');
//   console.log(string);
//   console.log(normString);
// }
// // ********************
// function normString(string) {
//   let strArray = string.trim().toLowerCase().split(/\s+/);

//   for (let i = 0; i < strArray.length; i += 1) {
//     strArray[i] = strArray[i].at(0).toUpperCase() + strArray[i].substring(1);
//   }
//   const normString = strArray.join(' ');
//   console.log(string);
//   console.log(normString);
// }
// // ********************
// function normString(string) {
//   const strArray = string.trim().toLowerCase().split(/\s+/);
//   let normString = '';
//   for (let i = 0; i < strArray.length; i += 1) {
//     normString +=
//       ' ' + strArray[i].at(0).toUpperCase() + strArray[i].substring(1);
//   }
//   normString = normString.trim();
//   console.log(string);
//   console.log(normString);
// }

// '🍎'--------------------'🍎' Objects (Lesson 5) '🍎'--------------------'🍎'

// ******************** Object properties and methods ********************

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i] === oldName) {
//         this.books.splice(i, 1, newName);
//       }
//     }
//   },
// };
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//       }
//     }
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books);

// ******************** Iteration ********************

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';
// dog.color = 'black';

// for (const key in dog) {
//   console.log(key);
//   console.log(dog[key]);
// }
// console.log('********************');
// for (const key in dog) {
//   if (Object.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(dog[key]);
//   }
// }
// console.log('********************');
// const keys = Object.keys(dog);
// for (const key of Object.keys(dog)) {
//   console.log('key: ', key);
//   console.log('value: ', dog[key]);
// }
// console.log('********************');
// for (const value of Object.values(dog)) {
//   console.log('value: ', value);
// }
// -----------------------------------------------------------------------------
// const basketBalls = [
//   { brand: 'Wilson', price: 65 },
//   { brand: 'Spalding', price: 100 },
//   { brand: 'Nike', price: 75 },
//   { brand: 'The Rock', price: 50 },
// ];

// getBrands(basketBalls);
// function getBrands(balls) {
//   const brands = [];
//   for (const ball of balls) {
//     brands.push(ball.brand);
//     ball.amazon = true;
//   }
//   console.log('brands: ', brands);
// }
// basketBalls[1].amazon = false;
// basketBalls[3].amazon = false;
// console.table(basketBalls);

// canBuyOnAmazon(basketBalls);
// function canBuyOnAmazon(balls) {
//   const available = {
//     amazon: [],
//     denied: [],
//   };
//   for (const ball of balls) {
//     if (ball.amazon) {
//       available.amazon.push(ball.brand);
//     } else {
//       available.denied.push(ball.brand);
//     }
//   }
//   console.table(available);
// }
// // ******************** //
// Find basketball by brand
// findBallByBrand('Nike', basketBalls);

// function findBallByBrand(brandName, basketBalls) {
//   let message = 'No ball to find';
//   for (const ball of basketBalls) {
//     if (ball['brand'] === brandName) {
//       console.log(`Basketball ${ball['brand']} costs ${ball['price']}$`);
//     }
//     if (ball.brand === brandName) {
//       message = `You can buy ${ball.brand} basketball for ${ball.price}$`;
//     }
//   }
//   return console.log(message);
// }
// -----------------------------------------------------------------------------
// const userName = 'Valera';
// const email = 'valera@gmail.com';
// const userData = { userName, email };
// console.log('userData: ', userData);
// -----------------------------------------------------------------------------
// // <input name = "color" value = "green">
// const inputName = 'color';
// const inpunValue = 'green';
// const inputData = { [inputName]: inpunValue };
// console.log('inputData: ', inputData);
// -----------------------------------------------------------------------------
// const objectArray = [1, 2, 3];
// objectArray.propertyKey = 'value';
// console.log('objectArray: ', objectArray);
// -----------------------------------------------------------------------------
// function normString(string) {
//   let strArray = string.trim().toLowerCase().split(/\s+/);

//   for (let i = 0; i < strArray.length; i += 1) {
//     strArray[i] = strArray[i].at(0).toUpperCase() + strArray[i].substring(1);
//   }
//   const normString = strArray.join(' ');
// }
// normString.propertyKey = 'value';
// console.dir(normString);
// -----------------------------------------------------------------------------

//
//
//
//

// '🍎'--------------------'🍎' Destructuring and spread/rest (Lesson 6) '🍎'--------------------'🍎'

// ******************** Object Destructuring ********************

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const { title, author, genres, isPublic, rating, coverImage } = book; // Destructuring
// console.log('title: ', title);
// console.log('author: ', author);
// console.log('genres: ', genres);
// console.log('isPublic: ', isPublic);
// console.log('rating: ', rating);
// console.log('coverImage: ', coverImage); // undefined
// -----------------------------------------------------------------------------
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// -----------------------------------------------------------------------------
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// -----------------------------------------------------------------------------
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// -----------------------------------------------------------------------------

// ******************** Spread and Rest Syntax ********************

// const numbers = [2, 3, ...[10, 20, 30], 7, 8, 9];
// console.log('numbers: ', numbers);

// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a];
// console.table(b);
// console.log(a === b);
// console.log(a[0] === b[0]);
// -----------------------------------------------------------------------------
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// ******************** Destructuring ********************

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     const { potions } = atTheOldToad;
//     potions.push(potionName);
//   },
// };
// atTheOldToad.addPotion('Power potion');
// console.log(atTheOldToad.potions);
// -----------------------------------------------------------------------------
// const basketBalls = {
//   Wilson: 65,
//   Spalding: 100,
//   Nike: 75,
//   The_Rock: 50,
// };
// for (const [brand, price] of Object.entries(basketBalls)) {
//   console.log('brand: ', brand, '/ price =', price, '$');
// }

// ******************** «Parameter Object» Pattern ********************
// function deliveryDay({ name, choice = 'warehouse', good }) {
//   let message = name;
//   switch (choice) {
//     case 'office':
//       message += ', завтра з офісу заберіть ' + good;
//       break;
//     case 'post':
//       message += ', сьогодні поштою заберіть ' + good;
//       break;
//     case 'warehouse':
//       message += ', в зручний час зі складу заберіть ' + good;
//       break;
//     default:
//       message += ', не то ввели';
//   }
//   console.log(message);
// }
// const userProfile = {
//   name: 'Сергій',
//   choice: 'post',
//   type: 'postpay',
//   good: 'HDD',
// };
// const defaultProfile = {
//   name: 'Шановний клієнт',
//   type: 'prepay',
//   good: 'товар',
// };
// deliveryDay(defaultProfile);
// deliveryDay(userProfile);
// -----------------------------------------------------------------------------

//
//
//
//
//
//
//

// '🍎'--------------------'🍎' Callbacks and Arrow Functions (Lesson 7) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Iterating Array Methods (Lesson 8) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' The keyword this (Lesson 9) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Prototypes and Classes (Lesson 10) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Destructuring and spread/rest (Lesson 11) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Callbacks and Arrow Functions (Lesson 12) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Event Delegation (Lesson 13) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Throttle/Debounce and Lazyload (Lesson 14) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Code Modularity (Lesson 15) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Web Storage (Lesson 16) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Timers and Time (Lesson 17) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Promises (Lesson 18) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' HTTP Requests (Lesson 19) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Pagination (Lesson 20) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' CRUD (Lesson 21) '🍎'--------------------'🍎'
// '🍎'--------------------'🍎' Syntax async/await (Lesson 22) '🍎'--------------------'🍎'

// ******************** Питання ********************

// Яким буде результат виразів? String порівнюються посимвольно по коду символа.
// При порівнянні з числом відбувається перетворення на число.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// -----------------------------------------------------------------------------
// console.log(5 > 4); // true
// console.log(8 >= '7'); // true.
// console.log(5 > '9'); // false
// console.log('2' > '12'); // true.
// -----------------------------------------------------------------------------
//  .split(/\s+/)
// -----------------------------------------------------------------------------
