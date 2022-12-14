// 'π'--------------------'π' Variables and Types (Lesson 1) 'π'--------------------'π'

// The six values ββthat are converted by Boolean() to `false`:
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
//  ΠΠΈΠ²Π΅Π΄ΠΈ Π½Π° Π΅ΠΊΡΠ°Π½ Π·Π°Π³Π°Π»ΡΠ½Ρ ΠΊΡΠ»ΡΠΊΡΡΡΡ Π²ΡΡΡ ΡΠ±Π»ΡΠΊ
// -----------------------------------------------------------------------------
// const goodApples = 10;
// const badApples = 5;
// const halfApples = 4;
// console.log(goodApples + badApples + halfApples / 2);
// -----------------------------------------------------------------------------
// ΠΠ°ΠΌΡΠ½ΠΈ Π²ΠΈΡΠ°Π· ΠΏΠ΅ΡΠ΅Π²ΠΈΠ·Π½Π°ΡΠ΅Π½Π½Ρ ΠΊΠΎΠΌΠ±ΡΠ½ΠΎΠ²Π°Π½ΠΈΠΌ ΠΎΠΏΠ΅ΡΠ°ΡΠΎΡΠΎΠΌ `+=`
// -----------------------------------------------------------------------------
// let students = 100;
// students = students + 50;
// console.log((students += 50));
// -----------------------------------------------------------------------------
// ΠΠΈΠ²Π΅Π΄ΠΈ Ρ ΠΊΠΎΠ½ΡΠΎΠ»Ρ Π·Π°ΠΎΠΊΡΡΠ³Π»Π΅Π½Ρ Π²Π³ΠΎΡΡ/Π²Π½ΠΈΠ· Ρ Ρ.Π΄. Π·Π½Π°ΡΠ΅Π½Π½Ρ Π·ΠΌΡΠ½Π½ΠΎΡ
// `value`. ΠΠΈΠΊΠΎΡΠΈΡΡΠΎΠ²ΡΠΉ ΠΌΠ΅ΡΠΎΠ΄ΠΈ `Math.floor()`, `Math.ceil()`,  `Math.round()`
// -----------------------------------------------------------------------------
// let value;
// value = Math.round(Math.PI * 10000) / 10000;
// value = Math.floor(3.1416);
// value = Math.ceil(3.1416);
// console.log(value);
// -----------------------------------------------------------------------------
// Π‘ΠΊΠ»Π°Π΄ΠΈ ΡΡΠ°Π·Ρ Π·Π° Π΄ΠΎΠΏΠΎΠΌΠΎΠ³ΠΎΡ ΡΠ°Π±Π»ΠΎΠ½Π½ΠΈΡ ΡΡΠ΄ΠΊΡΠ² `A has B bots in stock`
// -----------------------------------------------------------------------------
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const allBots = repairBots + defenceBots;
// console.log(`${companyName} has ${allBots} Bots in stock`);
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΊΠΈΠΉ ΡΠΎΠ·ΡΠ°ΡΠΎΠ²ΡΡ ΡΠ½Π΄Π΅ΠΊΡ ΠΌΠ°ΡΠΈ ΡΡΠ»Π° Π»ΡΠ΄ΠΈΠ½ΠΈ Ρ ΠΎΠΊΡΡΠ³Π»ΠΈΡΠΈ
// Π΄ΠΎ ΠΎΠ΄Π½ΡΡΡ ΡΠΈΡΡΠΈ. Π ΠΎΠ·Π΄ΡΠ»ΠΈΡΠΈ Π²Π°Π³Ρ Π² ΠΊΡΠ»ΠΎΠ³ΡΠ°ΠΌΠ°Ρ Π½Π° ΠΊΠ²Π°Π΄ΡΠ°Ρ Π²ΠΈΡΠΎΡΠΈ Π»ΡΠ΄ΠΈΠ½ΠΈ Ρ ΠΌΠ΅ΡΡΠ°Ρ.
// ΠΠ°Π³Π° ΡΠ° Π²ΠΈΡΠΎΡΠ° Π·Π±Π΅ΡΡΠ³Π°ΡΡΡΡΡ Ρ Π·ΠΌΡΠ½Π½ΠΈΡ `weight` ΡΠ° `height`, Π°Π»Π΅ Π½Π΅ ΡΠΊ ΡΠΈΡΠ»Π°, Π° Π²
// Π²ΠΈΠ³Π»ΡΠ΄Ρ ΡΡΠ΄ΠΊΡΠ² (ΡΠΏΠ΅ΡΡΠ°Π»ΡΠ½ΠΎ Π΄Π»Ρ Π·Π°Π²Π΄Π°Π½Π½Ρ). ΠΠ΅ ΡΡΠ»Ρ ΡΠΈΡΠ»Π° ΠΌΠΎΠΆΡΡΡ Π±ΡΡΠΈ Π·Π°Π΄Π°Π½Ρ Ρ Π²ΠΈΠ³Π»ΡΠ΄Ρ
// `24.7` Π°Π±ΠΎ `24,7`, ΡΠΎΠ±ΡΠΎ ΡΠΊ ΡΠΎΠ·Π΄ΡΠ»ΡΠ½ΠΈΠΊ Π΄ΡΠΎΠ±ΠΎΠ²ΠΎΡ ΡΠ°ΡΡΠΈΠ½ΠΈ ΠΌΠΎΠΆΠ΅ Π±ΡΡΠΈ ΠΊΠΎΠΌΠ°.
// -----------------------------------------------------------------------------
// const weight = prompt('ΠΠ²Π΅Π΄ΡΡΡ ΠΌΠ°ΡΡ, ΠΊΠ³');
// const height = prompt('ΠΠ²Π΅Π΄ΡΡΡ Π·ΡΡΡΡ, ΠΌ');
// const weightNa = weight.replace(',', '.');
// const heightNa = height.replace(',', '.');
// const massIndex = Number(weightNa / Math.pow(heightNa, 2));
// console.log(Math.round(massIndex * 100) / 100);
// -----------------------------------------------------------------------------
// Π―ΠΊΠΈΠΌ Π±ΡΠ΄Π΅ ΡΠ΅Π·ΡΠ»ΡΡΠ°Ρ Π²ΠΈΡΠ°Π·ΡΠ²? String ΠΏΠΎΡΡΠ²Π½ΡΡΡΡΡΡ ΠΏΠΎΡΠΈΠΌΠ²ΠΎΠ»ΡΠ½ΠΎ ΠΏΠΎ ΠΊΠΎΠ΄Ρ ΡΠΈΠΌΠ²ΠΎΠ»Π°.
// ΠΡΠΈ ΠΏΠΎΡΡΠ²Π½ΡΠ½Π½Ρ Π· ΡΠΈΡΠ»ΠΎΠΌ Π²ΡΠ΄Π±ΡΠ²Π°ΡΡΡΡΡ ΠΏΠ΅ΡΠ΅ΡΠ²ΠΎΡΠ΅Π½Π½Ρ Π½Π° ΡΠΈΡΠ»ΠΎ.
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
// && - ΠΏΠΎΠ²Π΅ΡΡΠ°Ρ ΠΏΠ΅ΡΡΠΈΠΉ ΡΠΊΠΈΠΉ Π΄Π°ΡΡΡ false. ΠΠ±ΠΎ ΠΎΡΡΠ°Π½Π½ΡΠΉ, ΡΠΊΡΠΎ false Π½Π΅ΠΌΠ°
// || - ΠΏΠΎΠ²Π΅ΡΡΠ°Ρ ΠΏΠ΅ΡΡΠΈΠΉ ΡΠΊΠΈΠΉ Π΄Π°ΡΡΡ true. ΠΠ±ΠΎ ΠΎΡΡΠ°Π½Π½ΡΠΉ, ΡΠΊΡΠΎ true Π½Π΅ΠΌΠ°
//  Π―ΠΊΠΈΠΌ Π±ΡΠ΄Π΅ ΡΠ΅Π·ΡΠ»ΡΡΠ°Ρ Π²ΠΈΡΠ°Π·ΡΠ²?
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
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΊΠΈΠΉ ΠΏΠ΅ΡΠ΅Π²Π΅Π΄Π΅ Π·Π½Π°ΡΠ΅Π½Π½Ρ `totalMinutes`
// (ΠΊΡΠ»ΡΠΊΡΡΡΡ ΡΠ²ΠΈΠ»ΠΈΠ½) Π² ΡΡΠ΄ΠΎΠΊ Ρ ΡΠΎΡΠΌΠ°ΡΡ Π³ΠΎΠ΄ΠΈΠ½ ΡΠ° ΡΠ²ΠΈΠ»ΠΈΠ½ `HH:MM`.
//     70 ΠΏΠΎΠΊΠ°ΠΆΠ΅ 01:10     //    450 ΠΏΠΎΠΊΠ°ΠΆΠ΅ 07:30     //    1441 ΠΏΠΎΠΊΠ°ΠΆΠ΅ 24:01
// -----------------------------------------------------------------------------
// const time = prompt('ΠΠ²Π΅Π΄ΡΡΡ ΠΊΡΠ»ΡΠΊΡΡΡΡ ΡΠ²ΠΈΠ»ΠΈΠ½');
// const timeHour = Math.floor(time / 60);
// const timeMinutes = time % 60;
// const formatTimeHour = String(timeHour).padStart(2, '0');
// const formatTimeMinutes = String(timeMinutes).padStart(2, '0');
// console.log(`${formatTimeHour}:${formatTimeMinutes}`);

// 'π'--------------------'π' Branches and Cycles (Lesson 2) 'π'--------------------'π'

// ΠΠΎΠΆΠ»ΠΈΠ²ΡΡΡΡ ΠΏΠ΅ΡΠ΅ΡΠΈΠ²Π°ΡΠΈ ΡΠΈΠΊΠ» Π΄ΠΎΡΡΡΠΎΠΊΠΎΠ²ΠΎ, Π½Π°ΠΏΡΠΈΠΊΠ»Π°Π΄ ΡΠΈΠΊΠ» Π² ΡΠΈΠΊΠ»Ρ:
// for (let i = 0; i < 500; i += 100) {
//   console.log(i);
//   console.log('----------------');
//   const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//   for (const letter of letters) {
//     if (letter === 'd') {
//       console.log(
//         'ΠΠ°ΠΊΡΠ½ΡΠΈΡΠΈ Π²ΠΊΠ»Π°Π΄Π΅Π½ΠΈΠΉ ΡΠΈΠΊΠ», ΠΏΠ΅ΡΠ΅ΠΉΡΠΈ Π΄ΠΎ Π½Π°ΡΡΡΠΏΠ½ΠΎΡ ΡΡΠ΅ΡΠ°ΡΡΡ Π±Π°ΡΡΠΊΡΠ²ΡΡΠΊΠΎΠ³ΠΎ ΡΠΈΠΊΠ»Ρ'
//       );
//       break;
//     }
//     console.log(letter);
//   }
// }
// -----------------------------------------------------------------------------
// ΠΠΈΠΊΠΎΡΠΈΡΡΠΎΠ²ΡΡΡΠΈ if..else ΡΠ° prompt, Π½Π°ΠΏΠΈΡΠΈ ΠΊΠΎΠ΄, ΡΠΊΠΈΠΉ ΠΏΠΈΡΠ°ΡΠΈΠΌΠ΅:
// `"Π―ΠΊΠ° ΠΎΡΡΡΡΠΉΠ½Π° Π½Π°Π·Π²Π° JavaScript?"`. Π―ΠΊΡΠΎ Π²Π²Π΅Π΄Π΅Π½ΠΎ `ECMAScript`, ΡΠΎ ΠΏΠΎΠΊΠ°Π·ΡΠΉ
// alert Π· ΡΡΠ΄ΠΊΠΎΠΌ`"ΠΡΠ°Π²ΠΈΠ»ΡΠ½ΠΎ!"`, Π² ΡΠ½ΡΠΎΠΌΡ Π²ΠΈΠΏΠ°Π΄ΠΊΡ - `"ΠΠ΅ Π·Π½Π°ΡΡΠ΅? ECMAScript!"`
// -----------------------------------------------------------------------------
// let nameJS;
// nameJS = prompt('Π―ΠΊΠ° ΠΎΡΡΡΡΠΉΠ½Π° Π½Π°Π·Π²Π° JavaScript?');
// if (nameJS === 'ECMAScript') {
//   alert('ΠΡΠ°Π²ΠΈΠ»ΡΠ½ΠΎ!');
// } else {
//   alert('ΠΠ΅ Π·Π½Π°ΡΡΠ΅? ECMAScript!');
// }
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ Π΄Π»Ρ Π²ΡΠ΄ΠΎΠ±ΡΠ°ΠΆΠ΅Π½Π½Ρ Π³ΠΎΠ΄ΠΈΠ½ ΡΠ° ΡΠ²ΠΈΠ»ΠΈΠ½ Ρ ΠΊΠΎΠ½ΡΠΎΠ»Ρ Π±ΡΠ°ΡΠ·Π΅ΡΠ°
// Ρ Π²ΠΈΠ³Π»ΡΠ΄Ρ ΡΡΠ΄ΠΊΠ° ΡΠΎΡΠΌΠ°ΡΡ `"14 Π³. 26 ΡΠ²."`. Π―ΠΊΡΠΎ Π·Π½Π°ΡΠ΅Π½Π½Ρ Π·ΠΌΡΠ½Π½ΠΎΡ `minutes`
// Π΄ΠΎΡΡΠ²Π½ΡΡ `0`, ΡΠΎ Π²ΠΈΠ²ΠΎΠ΄Ρ ΡΡΠ΄ΠΎΠΊ `"14 Π³."`, Π±Π΅Π· ΡΠ²ΠΈΠ»ΠΈΠ½.
// -----------------------------------------------------------------------------
// let time;
// time = prompt('ΠΠ²Π΅Π΄ΡΡΡ ΡΠ²ΠΈΠ»ΠΈΠ½ΠΈ');
// const hours = Math.floor(time / 60);
// const minutes = time % 60;
// if (minutes === 0) {
//   alert(`${hours} Π³.`);
// } else {
//   alert(`${hours} Π³. ${minutes} ΡΠ².`);
// }
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΊΠΈΠΉ Π²ΠΈΠ²ΠΎΠ΄ΠΈΡΡ Ρ ΠΊΠΎΠ½ΡΠΎΠ»Ρ ΡΡΠ΄ΠΎΠΊ `"Π¦Π΅ ΠΏΠΎΠ·ΠΈΡΠΈΠ²Π½Π΅ ΡΠΈΡΠ»ΠΎ"`, ΡΠΊΡΠΎ
// Ρ prompt ΠΊΠΎΡΠΈΡΡΡΠ²Π°Ρ Π²Π²ΡΠ² ΡΠΈΡΠ»ΠΎ Π±ΡΠ»ΡΡΠ΅ Π½ΡΠ»Ρ. Π―ΠΊΡΠΎ Π±ΡΠ»ΠΎ Π²Π²Π΅Π΄Π΅Π½ΠΎ Π½ΡΠ»Ρ, Π²ΠΈΠ²ΠΎΠ΄Ρ
// Π² ΠΊΠΎΠ½ΡΠΎΠ»Ρ ΡΡΠ΄ΠΎΠΊ `"Π¦Π΅ Π½ΡΠ»Ρ"`. Π―ΠΊΡΠΎ ΠΏΠ΅ΡΠ΅Π΄Π°Π»ΠΈ Π²ΡΠ΄'ΡΠΌΠ½Π΅ ΡΠΈΡΠ»ΠΎ, Ρ ΠΊΠΎΠ½ΡΠΎΠ»Ρ
// ΠΏΠΎΠ²ΠΈΠ½Π΅Π½ Π±ΡΡΠΈ ΡΡΠ΄ΠΎΠΊ `"Π¦Π΅ Π½Π΅Π³Π°ΡΠΈΠ²Π½Π΅ ΡΠΈΡΠ»ΠΎ"`.
// -----------------------------------------------------------------------------
// const anyNumber = Number(prompt('Add any Number'));
// if (anyNumber === 0) {
//   console.log('Π¦Π΅ Π½ΡΠ»Ρ');
// } else if (anyNumber > 0) {
//   console.log('Π¦Π΅ ΠΏΠΎΠ·ΠΈΡΠΈΠ²Π½Π΅ ΡΠΈΡΠ»ΠΎ');
// } else if (anyNumber < 0) {
//   console.log('Π¦Π΅ Π½Π΅Π³Π°ΡΠΈΠ²Π½Π΅ ΡΠΈΡΠ»ΠΎ');
// } else {
//   console.log('Π¦Π΅ Π½Π΅ ΡΠΈΡΠ»ΠΎ');
// }
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΊΠΈΠΉ ΠΏΠΎΡΡΠ²Π½ΡΡ ΡΠΈΡΠ»Π° Ρ Π·ΠΌΡΠ½Π½ΠΈΡ `a` ΡΠ° `b`. Π―ΠΊΡΠΎ ΠΎΠ±ΠΈΠ΄Π²Π°
// Π·Π½Π°ΡΠ΅Π½Π½Ρ Π±ΡΠ»ΡΡΠ΅ `100`, ΡΠΎ Π²ΠΈΠ²Π΅Π΄ΠΈ Π² ΠΊΠΎΠ½ΡΠΎΠ»Ρ ΠΌΠ°ΠΊΡΠΈΠΌΠ°Π»ΡΠ½Π΅ Π· Π½ΠΈΡ. Π ΠΏΡΠΎΡΠΈΠ»Π΅ΠΆΠ½ΠΎΠΌΡ
// Π²ΠΈΠΏΠ°Π΄ΠΊΡ Ρ ΠΊΠΎΠ½ΡΠΎΠ»Ρ ΠΏΠΎΠ²ΠΈΠ½Π½Π° Π±ΡΡΠΈ ΡΡΠΌΠ° Π·Π½Π°ΡΠ΅Π½Π½Ρ `b` ΡΠ° ΡΠΈΡΠ»Π° 1000.
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
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ ΡΠΊΠΈΠΉ ΠΏΠ΅ΡΠ΅Π²ΡΡΡΡ ΡΠΈ Π·Π°ΠΊΡΠ½ΡΡΡΡΡΡΡ Π·Π½Π°ΡΠ΅Π½Π½Ρ Π·ΠΌΡΠ½Π½ΠΎΡ `link`
// ΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠΌ `/`. Π―ΠΊΡΠΎ Π½Ρ, Π΄ΠΎΠ΄Π°ΠΉ Π΄ΠΎ ΠΊΡΠ½ΡΡ Π·Π½Π°ΡΠ΅Π½Π½Ρ `link` ΡΠ΅ΠΉ ΡΠΈΠΌΠ²ΠΎΠ». ΠΠΈΠΊΠΎΡΠΈΡΡΠ°ΠΉ
// ΠΊΠΎΠ½ΡΡΡΡΠΊΡΡΡ `if...else`. (Π²ΠΈΠΊΠΎΡΠΈΡΡΠ°Π½Π½Ρ ! ΠΎΠΏΠ΅ΡΠ°ΡΠΎΡΠ° Logical NOT)
// -----------------------------------------------------------------------------
// let link = 'https://www.edu.goit.global/learn';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ ΡΠΊΠΈΠΉ ΠΏΠ΅ΡΠ΅Π²ΡΡΡΡ ΡΠΈ Π·Π°ΠΊΡΠ½ΡΡΡΡΡΡΡ Π·ΠΌΡΠ½Π½Π° `link` ΡΠΈΠΌΠ²ΠΎΠ»ΠΎΠΌ `/`.
//  Π―ΠΊΡΠΎ Π½Ρ, Π΄ΠΎΠ΄Π°ΠΉ Π΄ΠΎ ΠΊΡΠ½ΡΡ Π·Π½Π°ΡΠ΅Π½Π½Ρ `link` ΡΠ΅ΠΉ ΡΠΈΠΌΠ²ΠΎΠ», Π°Π»Π΅ ΡΡΠ»ΡΠΊΠΈ Π²ΡΠΎΠΌΡ Π²ΠΈΠΏΠ°Π΄ΠΊΡ,
//  ΡΠΊΡΠΎ Π² `link` Ρ ΠΏΡΠ΄ΡΡΠ΄ΠΎΠΊ `"my-site"`.
// -----------------------------------------------------------------------------
// let link;
// link = 'https://www.edu.goit.global/my-site/learn';
// if(!link.endsWith('/') && link.includes('my-site')){link += '/'}
// console.log(link);
// -----------------------------------------------------------------------------
// ΠΠΈΠΊΠΎΠ½Π°ΠΉ ΡΠ΅ΡΠ°ΠΊΡΠΎΡΠΈΠ½Π³ ΠΊΠΎΠ΄Ρ Π·Π°Π΄Π°ΡΡ Π½ΠΎΠΌΠ΅Ρ 4, Π²ΠΈΠΊΠΎΡΠΈΡΡΠΎΠ²ΡΡΡΠΈ ΡΠ΅ΡΠ½Π°ΡΠ½ΠΈΠΉ ΠΎΠΏΠ΅ΡΠ°ΡΠΎΡ.
// -----------------------------------------------------------------------------
// const age = 26;
// const beverage = age >= 21 ? 'Beer' : 'Juice';
// console.log(beverage); // "Beer"
// -----------------------------------------------------------------------------
// let link;
// link = 'https://www.edu.goit.global/my-site/learn';
// !link.endsWith('/') && link.includes('my-site') ? link += '/': link ='ΠΠ΅ ΡΠΎΠΉ ΡΠ°ΠΉΡ';
// console.log(link);
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΎ Π²ΠΈΠ²ΠΎΠ΄ΠΈΡΠΈΠΌΠ΅ Π² ΠΊΠΎΠ½ΡΠΎΠ»Ρ ΡΡΠ΄ΠΎΠΊ Π·Π°Π»Π΅ΠΆΠ½ΠΎ Π²ΡΠ΄ Π·Π½Π°ΡΠ΅Π½Π½Ρ Π·ΠΌΡΠ½Π½ΠΎΡ `hours`.
// Π―ΠΊΡΠΎ Π·Π½Π°ΡΠ΅Π½Π½Ρ Π·ΠΌΡΠ½Π½ΠΎΡ `hours`:
// - ΠΌΠ΅Π½ΡΠ΅ `17`, Π²ΠΈΠ²ΠΎΠ΄Ρ ΡΡΠ΄ΠΎΠΊ `"Pending"`
// - Π±ΡΠ»ΡΡΠ΅ Π°Π±ΠΎ Π΄ΠΎΡΡΠ²Π½ΡΡ `17` Ρ ΠΌΠ΅Π½ΡΠ΅ Π°Π±ΠΎ Π΄ΠΎΡΡΠ²Π½ΡΡ 24, Π²ΠΈΠ²ΠΎΠ΄Ρ ΡΡΠ΄ΠΎΠΊ `"Expires"`
// - Π±ΡΠ»ΡΡΠ΅ `24` , Π²ΠΈΠ²ΠΎΠ΄Ρ ΡΡΠ΄ΠΎΠΊ `"Overdue"`
// -----------------------------------------------------------------------------
// let hours = prompt('ΠΠ²Π΅Π΄ΡΡΡ ΠΊΡΠ»ΡΠΊΡΡΡΡ Π³ΠΎΠ΄ΠΈΠ½');
// if (hours < 17) {
//   console.log('Pending');
// } else if (hours > 24) {
//   console.log('Overdue');
// } else {
//   console.log('Expires');
// }
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ Π΄Π»Ρ Π²ΡΠ΄ΠΎΠ±ΡΠ°ΠΆΠ΅Π½Π½Ρ ΡΠ°ΡΡ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ Π·Π΄Π°ΡΡ ΠΏΡΠΎΠ΅ΠΊΡΡ. ΠΠΈΠΊΠΎΡΠΈΡΡΠΎΠ²ΡΠΉ `switch`.
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 0 Π΄Π½ΡΠ² - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"Π‘ΡΠΎΠ³ΠΎΠ΄Π½Ρ"`
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 1 Π΄Π΅Π½Ρ - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΠ°Π²ΡΡΠ°"`
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 2 Π΄Π½Ρ - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΡΡΠ»ΡΠ·Π°Π²ΡΡΠ°"`
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 3+ Π΄Π½ΡΠ² - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΠ°ΡΠ° Ρ ΠΌΠ°ΠΉΠ±ΡΡΠ½ΡΠΎΠΌΡ"`
// -----------------------------------------------------------------------------
// const restOfDays = Number(prompt('Π‘ΠΊΡΠ»ΡΠΊΠΈ Π΄Π½ΡΠ²'));
// switch (restOfDays) {
//   case 0:
//     console.log('Π‘ΡΠΎΠ³ΠΎΠ΄Π½Ρ');
//     break;
//   case 1:
//     console.log('ΠΠ°Π²ΡΡΠ°');
//     break;
//   case 2:
//     console.log('ΠΡΡΠ»ΡΠ·Π°Π²ΡΡΠ°');
//     break;
//   default:
//     console.log('ΠΠ°ΡΠ° Ρ ΠΌΠ°ΠΉΠ±ΡΡΠ½ΡΠΎΠΌΡ');
// }
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ Π΄Π»Ρ Π²ΡΠ΄ΠΎΠ±ΡΠ°ΠΆΠ΅Π½Π½Ρ ΡΠ°ΡΡ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ Π·Π΄Π°ΡΡ ΠΏΡΠΎΠ΅ΠΊΡΡ. ΠΠΈΠΊΠΎΡΠΈΡΡΠΎΠ²ΡΠΉ `switch`.
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 0 Π΄Π½ΡΠ² - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΠΆΠ΅ Π·Π°ΡΠ°Π·"`
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 1 Π΄Π΅Π½Ρ - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΠΆΠ΅ Π·Π°ΡΠ°Π·"`
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 2 Π΄Π½Ρ - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"Π©Π΅ Ρ ΡΠ°Ρ"`
// - Π―ΠΊΡΠΎ Π΄ΠΎ Π΄Π΅Π΄Π»Π°ΠΉΠ½Ρ 3+ Π΄Π½ΡΠ² - Π²ΠΈΠ²Π΅Π΄ΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΠ°ΡΠ° Ρ ΠΌΠ°ΠΉΠ±ΡΡΠ½ΡΠΎΠΌΡ"`
// -----------------------------------------------------------------------------
// const restOfDays = Number(prompt('Π‘ΠΊΡΠ»ΡΠΊΠΈ Π΄Π½ΡΠ²'));
// switch (restOfDays) {
//   case 0:
//   case 1:
//     console.log('ΠΠΆΠ΅ Π·Π°ΡΠ°Π·');
//     break;

//   case 2:
//     console.log('Π©Π΅ Ρ ΡΠ°Ρ');
//     break;
//   default:
//     console.log('ΠΠ°ΡΠ° Ρ ΠΌΠ°ΠΉΠ±ΡΡΠ½ΡΠΎΠΌΡ');
// }
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΈΠΊΠ» for, ΡΠΊΠΈΠΉ Π²ΠΈΠ²ΠΎΠ΄ΠΈΡΡ Ρ ΠΊΠΎΠ½ΡΠΎΠ»Ρ Π±ΡΠ°ΡΠ·Π΅ΡΠ° ΡΠΈΡΠ»Π° Π·Π° Π·ΡΠΎΡΡΠ°Π½Π½ΡΠΌ
// Π²ΡΠ΄ `min` Π΄ΠΎ `max`, Π°Π»Π΅ ΡΡΠ»ΡΠΊΠΈ ΡΠΊΡΠΎ ΡΠΈΡΠ»ΠΎ ΠΊΡΠ°ΡΠ½Π΅ `5`.
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
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΊΠΈΠΉ ΠΏΠΈΡΠ°ΡΠΈΠΌΠ΅ Π»ΠΎΠ³ΡΠ½ Π·Π° Π΄ΠΎΠΏΠΎΠΌΠΎΠ³ΠΎΡ `prompt`
// - Π―ΠΊΡΠΎ Π²ΡΠ΄Π²ΡΠ΄ΡΠ²Π°Ρ Π²Π²ΠΎΠ΄ΠΈΡΡ `"admin"`, ΡΠΎ `prompt` Π·Π°ΠΏΠΈΡΡΡ ΠΏΠ°ΡΠΎΠ»Ρ
// - Π―ΠΊΡΠΎ Π½ΡΡΠΎΠ³ΠΎ Π½Π΅ Π²Π²Π΅Π΄Π΅Π½ΠΎ Π°Π±ΠΎ Π½Π°ΡΠΈΡΠ½ΡΡΠΎ ΠΊΠ»Π°Π²ΡΡΡ Esc - Π²ΠΈΠ²Π΅ΡΡΠΈ ΡΡΠ΄ΠΎΠΊ `"Π‘ΠΊΠ°ΡΠΎΠ²Π°Π½ΠΎ"`
// - Π ΡΠ½ΡΠΎΠΌΡ Π²ΠΈΠΏΠ°Π΄ΠΊΡ Π²ΠΈΠ²Π΅ΡΡΠΈ ΡΡΠ΄ΠΎΠΊ `"Π― Π²Π°Ρ Π½Π΅ Π·Π½Π°Ρ"`
// ΠΠ°ΡΠΎΠ»Ρ ΠΏΠ΅ΡΠ΅Π²ΡΡΡΡΠΈ ΡΠ°ΠΊ:
// - Π―ΠΊΡΠΎ Π²Π²Π΅Π΄Π΅Π½ΠΎ ΠΏΠ°ΡΠΎΠ»Ρ `"Π― Π°Π΄ΠΌΡΠ½"`, ΡΠΎ Π²ΠΈΠ²Π΅ΡΡΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΡΠΈΠ²ΡΡ!"`
// - ΠΠ½Π°ΠΊΡΠ΅ Π²ΠΈΠ²ΠΎΠ΄ΠΈΡΠΈ ΡΡΠ΄ΠΎΠΊ `"ΠΠ΅Π²ΡΡΠ½ΠΈΠΉ ΠΏΠ°ΡΠΎΠ»Ρ"`
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

// 'π'--------------------'π' Arrays (Lesson 3) 'π'--------------------'π'

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
// -----------------------------------------------------------------------------
// // ******************** Array whith non-number indexes ********************
// const tags = [
//   'js',
//   'nodejs',
//   'html',
//   'css',
//   'html',
//   'js',
//   'nodejs',
//   'react',
//   'js',
//   'nodejs',
//   'react',
//   'js',
// ];
// const countTags = tags.reduce((acc, tag) => {
//   if (typeof acc[tag] !== 'number') {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// }, []);
// console.table(countTags);

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
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ ΡΠΎΡΡΡΠ²Π°Π½Π½Ρ ΠΌΠ°ΡΠΈΠ²Ρ ΡΡΠ΄ΠΊΡΠ² Π² Π°Π»ΡΠ°Π²ΡΡΠ½ΠΎΠΌΡ ΠΏΠΎΡΡΠ΄ΠΊΡ.
// -----------------------------------------------------------------------------
// const lang = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(lang.sort());
// const num = ['x', 'M', 'o', 'd', 'a', 'R', 1, 5, 4, 7, 9, 15, 22, 31, 23,];
// console.log(num.sort((a, b) => b - a));
// console.log(num.sort());
// -----------------------------------------------------------------------------
// ΠΠ°ΠΏΠΈΡΠΈ ΡΠΊΡΠΈΠΏΡ, ΡΠΊΠΈΠΉ ΠΏΠ΅ΡΠ΅ΡΠ²ΠΎΡΡΡ ΡΡΠ΄ΠΎΠΊ Π½Π° ΡΡΠ΄ΠΎΠΊ ΡΠ· Π·Π²ΠΎΡΠΎΡΠ½ΡΠΌ ΠΏΠΎΡΡΠ΄ΠΎΠΊΠΎ Π±ΡΠΊΠ².
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
// ΠΠ±βΡΠ΄Π½Π°ΡΠΈ Π±ΡΠ»ΡΡΠ΅ Π΄Π²ΠΎΡ ΠΌΠ°ΡΠΈΠ²ΡΠ²
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
// ΠΡΡΠΈΠΌΠ°ΡΠΈ ΡΠ°Π½Π΄ΠΎΠΌΠ½Π΅ Π·Π½Π°ΡΠ΅Π½Π½Ρ ΠΌΠ°ΡΠΈΠ²Ρ
// -----------------------------------------------------------------------------
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange'];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit);

// 'π'--------------------'π' Functions (Lesson 4) 'π'--------------------'π'

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
// Π‘Π³Π΅Π½Π΅ΡΡΠ²Π°ΡΠΈ Π²ΠΈΠΏΠ°Π΄ΠΊΠΎΠ²Ρ ΡΠΈΡΠ»Π° Π² ΠΌΠ΅ΠΆΠ°Ρ max - min
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
// ΠΠΎΡΡΠ°Π²ΠΊΠ° Π² Π·Π°Π»Π΅ΠΆΠ½ΠΎΡΡΡ Π²ΡΠ΄ ΠΎΠΏΡΡΡ checkbox:
// 'ΠΠ°Π²ΡΡΠ° Π· ΠΎΡΡΡΡ', 'Π‘ΡΠΎΠ³ΠΎΠ΄Π½Ρ ΠΏΠΎΡΡΠΎΡ', 'Π Π·ΡΡΡΠ½ΠΈΠΉ ΡΠ°Ρ Π·Ρ ΡΠΊΠ»Π°Π΄Ρ'
// -----------------------------------------------------------------------------
// deliveryDay('office', 'post', 'warehouse');

// function deliveryDay(...delivery) {
//   let choice;
//   for (const type of delivery) {
//     choice = prompt('Π―ΠΊ Π·ΡΡΡΠ½ΠΎ Π·Π°Π±ΡΠ°ΡΠΈ?', type);
//     if (choice !== null) break;
//   }

//   switch (choice) {
//     case 'office':
//       console.log('ΠΠ°Π²ΡΡΠ° Π· ΠΎΡΡΡΡ');
//       break;
//     case 'post':
//       console.log('Π‘ΡΠΎΠ³ΠΎΠ΄Π½Ρ ΠΏΠΎΡΡΠΎΡ');
//       break;
//     case 'warehouse':
//       console.log('Π Π·ΡΡΡΠ½ΠΈΠΉ ΡΠ°Ρ Π·Ρ ΡΠΊΠ»Π°Π΄Ρ');
//       break;
//     default:
//       console.log('ΠΠ΅ ΡΠΎ Π²Π²Π΅Π»ΠΈ');
//   }
// }
// ****************************************
// deliveryDay('office', 'post', 'warehouse');

// function deliveryDay() {
//   let choice;
//   for (const type of arguments) {
//     choice = prompt('Π―ΠΊ Π·ΡΡΡΠ½ΠΎ Π·Π°Π±ΡΠ°ΡΠΈ?', type);
//     if (choice !== null) break;
//   }

//   switch (choice) {
//     case 'office':
//       console.log('ΠΠ°Π²ΡΡΠ° Π· ΠΎΡΡΡΡ');
//       break;
//     case 'post':
//       console.log('Π‘ΡΠΎΠ³ΠΎΠ΄Π½Ρ ΠΏΠΎΡΡΠΎΡ');
//       break;
//     case 'warehouse':
//       console.log('Π Π·ΡΡΡΠ½ΠΈΠΉ ΡΠ°Ρ Π·Ρ ΡΠΊΠ»Π°Π΄Ρ');
//       break;
//     default:
//       console.log('ΠΠ΅ ΡΠΎ Π²Π²Π΅Π»ΠΈ');
//   }
// }
// -----------------------------------------------------------------------------
//// ΠΠ°ΠΏΠΈΡΠΈ ΡΡΠ½ΠΊΡΡΡ `logItems(items)`, ΡΠΊΠ° ΠΎΡΡΠΈΠΌΡΡ ΠΌΠ°ΡΠΈΠ² ΡΠ° Π²ΠΈΠΊΠΎΡΠΈΡΡΠΎΠ²ΡΡ ΡΠΈΠΊΠ»
// `for`, ΡΠΊΠΈΠΉ Π΄Π»Ρ ΠΊΠΎΠΆΠ½ΠΎΠ³ΠΎ Π΅Π»Π΅ΠΌΠ΅Π½ΡΠ° ΠΌΠ°ΡΠΈΠ²Ρ Π±ΡΠ΄Π΅ Π²ΠΈΠ²ΠΎΠ΄ΠΈΡΠΈ Π² ΠΊΠΎΠ½ΡΠΎΠ»Ρ ΠΏΠΎΠ²ΡΠ΄ΠΎΠΌΠ»Π΅Π½Π½Ρ Ρ
// ΡΠΎΡΠΌΠ°ΡΡ `<Π½ΠΎΠΌΠ΅Ρ Π΅Π»Π΅ΠΌΠ΅Π½ΡΠ°> - <Π·Π½Π°ΡΠ΅Π½Π½Ρ Π΅Π»Π΅ΠΌΠ΅Π½ΡΠ°>`. ΠΡΠΌΠ΅ΡΠ°ΡΡΡ ΠΏΠΎΡΠΈΠ½Π°ΡΡΡΡΡ Π· `1`.
// -----------------------------------------------------------------------------
// logItems('Mango', 'Poly', 'Ajax');
// logItems(['π', 'π', 'π', 'π', 'π']);

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
// Π€ΡΠ½ΠΊΡΡΡ `findLargestNumber(numbers)`ΡΠΊΠ° ΡΡΠΊΠ°Ρ Π½Π°ΠΉΠ±ΡΠ»ΡΡΠ΅ ΡΠΈΡΠ»ΠΎ Π² ΠΌΠ°ΡΠΈΠ²Ρ.
// -----------------------------------------------------------------------------
// findLargestNumber([2, 17, 94, 1, 23, 37]); // 94
// findLargestNumber([49, 4, 7, 83, 12]); // 83

// function findLargestNumber(numbers) {
//   console.log(Math.max(...numbers));
// }
// -----------------------------------------------------------------------------
// ΠΠΎΡΠΌΠ°Π»ΡΠ·ΡΠ²Π°ΡΠΈ ΡΡΠ΄ΠΎΠΊ ΡΡΠ΄ΠΎΠΊ Π· ΠΊΡΠ»ΡΠΊΠΎΡ ΡΠ»ΡΠ² (ΠΏΠ΅ΡΡΡ Π±ΡΠΊΠ²ΠΈ - Π²Π΅Π»ΠΈΠΊΡ, ΡΠ½ΡΡ - ΠΌΠ°Π»Π΅Π½ΡΠΊΡ)
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

// 'π'--------------------'π' Objects (Lesson 5) 'π'--------------------'π'

// ******************** Object creation ********************

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const mycar = new Car('Eagle', 'Talon TSi', 1993);
// console.log('mycar: ', mycar);

// ******************** Object properties and methods ********************

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books);
// -----------------------------------------------------------------------------
// const bookShelf1 = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i] === oldName) {
//         this.books.splice(i, 1, newName);
//       }
//     }
//   },
// };

// bookShelf1.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf1.books);
// -----------------------------------------------------------------------------
// const bookShelf2 = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//       }
//     }
//   },
// };

// bookShelf2.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf2.books);

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

// 'π'--------------------'π' Destructuring and spread/rest (Lesson 6) 'π'--------------------'π'

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
// -----------------------------------------------------------------------------
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// -----------------------------------------------------------------------------
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// -----------------------------------------------------------------------------

// ******************** Β«Parameter ObjectΒ» Pattern ********************
// function deliveryDay({ name, choice = 'warehouse', good }) {
//   let message = name;
//   switch (choice) {
//     case 'office':
//       message += ', Π·Π°Π²ΡΡΠ° Π· ΠΎΡΡΡΡ Π·Π°Π±Π΅ΡΡΡΡ ' + good;
//       break;
//     case 'post':
//       message += ', ΡΡΠΎΠ³ΠΎΠ΄Π½Ρ ΠΏΠΎΡΡΠΎΡ Π·Π°Π±Π΅ΡΡΡΡ ' + good;
//       break;
//     case 'warehouse':
//       message += ', Π² Π·ΡΡΡΠ½ΠΈΠΉ ΡΠ°Ρ Π·Ρ ΡΠΊΠ»Π°Π΄Ρ Π·Π°Π±Π΅ΡΡΡΡ ' + good;
//       break;
//     default:
//       message += ', Π½Π΅ ΡΠΎ Π²Π²Π΅Π»ΠΈ';
//   }
//   console.log(message);
// }
// const userProfile = {
//   name: 'Π‘Π΅ΡΠ³ΡΠΉ',
//   choice: 'post',
//   type: 'postpay',
//   good: 'HDD',
// };
// const defaultProfile = {
//   name: 'Π¨Π°Π½ΠΎΠ²Π½ΠΈΠΉ ΠΊΠ»ΡΡΠ½Ρ',
//   type: 'prepay',
//   good: 'ΡΠΎΠ²Π°Ρ',
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

// 'π'--------------------'π' Callbacks and Arrow Functions (Lesson 7) 'π'--------------------'π'

// ******************** Callbacks ********************

// function greet(name) {
//   console.log(`Welcome ${name}.`);
// }
// function bye(name) {
//   console.log(`Googbye ${name}.`);
// }
// function registerGuest(name, callback) {
//   console.log(`Registering guest ${name}.`);
//   // callback(name);
// }
// registerGuest('Mango', greet);
// registerGuest('Mango', bye);

// ******************** Inline callbacks ********************

// function registerGuest(name, callback) {
//   console.log(`Registering guest ${name}.`);
//   callback(name);
// }
// // Passing the greet inline function as a callback
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}.`);
// });

// ******************** Several callbacks ********************

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Simulating the subscriberβs availability with a random number
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }
// //  // Call handling logic
// function takeCall(name) {
//   console.log(`Connecting you to ${name}, please wait...`);
// }
// //  // Answering machine activation logic
// function activateAnsweringMachine(name) {
//   console.log(
//     `The subscriber ${name} is not available, please leave a message.`
//   );
// }
// //  // Hologram record logic
// function leaveHoloMessage(name) {
//   console.log(`The subscriber ${name} is not available, recording a hologram.`);
// }
// processCall('Mango', takeCall, activateAnsweringMachine);
// processCall('Poly', takeCall, leaveHoloMessage);

// ******************** Repetition abstraction ********************

// function printValue(value) {
//   console.log(value);
// }
// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }
// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// repeat(3, printValue);
// repeat(3, prettyPrint);

// ******************** Arrow Functions ********************

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers);
// -----------------------------------------------------------------------------

//
//
//
//
//
//
//
//
//
//
//
//
//

// 'π'--------------------'π' Iterating Array Methods (Lesson 8) 'π'--------------------'π'

// ******************** .forEach ********************

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (element, index, array) {
//   console.log(`Index ${index}, value ${element}, array ${array}`);
// });

// ******************** .map() ********************

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const lower = planets.map(element => element.toLowerCase());
// console.log('lower: ', lower);
// const upper = planets.map((planet, i) => {
//   console.log(`${i} planet is ${planet}`);
//   return planet.toUpperCase();
// });
// console.log('upper: ', upper);
// -----------------------------------------------------------------------------
// const holders = [
//   { name: 'mango', score: 83 },
//   { name: 'poly', score: 59 },
//   { name: 'ajax', score: 37 },
//   { name: 'kiwi', score: 94 },
//   { name: 'houston', score: 64 },
// ];
// const names = holders.map(
//   holder =>
//     holder.name.at(0).toUpperCase() +
//     holder.name.substring(1, holder.name.length - 1) +
//     holder.name.at(holder.name.length - 1).toUpperCase()
// );
// console.log('names: ', names);

// ******************** .flatMap() ********************

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['informatics', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];
// const mapArray = students.map(student => student.courses);
// console.log('mapArray: ', mapArray);

// const flatmapArray = students.flatMap(student => student.courses);
// console.log('flatmapArray: ', flatmapArray);

// const courseList = [];
// students
//   .flatMap(student => student.courses)
//   .forEach(arg => {
//     if (!courseList.includes(arg)) {
//       courseList.push(arg);
//     }
//   });
// console.log('courseList: ', courseList);

// ******************** .filter() Method ********************

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['informatics', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];
// const courseList = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index);
// console.log('courseList: ', courseList);
// -----------------------------------------------------------------------------
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.table(best);

// ******************** .findIndex() ********************

// const numbers = [2, 10, 87, 8, 15, 101, 20, 127, 25];
// const indexOfMoreHundred = numbers.findIndex(number => number > 100);
// console.log('indexOfMoreHundred: ', indexOfMoreHundred);

// ******************** .sort() ********************

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// //  //  The ordinal number of uppercase letters is less than that of lowercase letters.
// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// ******************** .localeCompare() ********************

// const students = ['Vika', 'Andrey', 'oleg', 'Julia', 'boris', 'Katya'];
// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika']
// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Vika', 'Oleg', 'Katya', 'Julia', 'Boris', 'Andrey']
// -----------------------------------------------------------------------------
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'kiwi', score: 94 },
// ];
// const sortByName = students.sort((a, b) => a.name.localeCompare(b.name));
// console.table(sortByName);
// const sortByScore = students.sort((a, b) => b.score - a.score);
// console.table(sortByScore);

// ******************** .reduce() ********************

// const items = [2, 10, 87, 8, 15, 101, 20, 127, 25];

// const summNumbers = items.reduce(
//   (accumulator, item) => accumulator + item,
//   'numbers - '
// );
// console.log('summNumbers: ', summNumbers);

// ******************** test ********************

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics', 'biology'] },
//   { name: 'Poly', score: 59, courses: ['informatics', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology', 'chemistry'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'informatics'] },
// ];
// const sortCourseList = students
//   .flatMap(student => student.courses)
//   .filter((course, index, courseList) => courseList.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));
// console.table(sortCourseList);
// -----------------------------------------------------------------------------
// const tweets = [
//   { id: '000', position: 1, likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', position: 4, likes: 2, tags: ['html', 'css'] },
//   { id: '002', position: 2, likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', position: 6, likes: 8, tags: ['css', 'react'] },
//   { id: '004', position: 9, likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const insta = [
//   { id: '000', position: 1, likes: 3, tags: ['js', 'nodejs', 'css'] },
//   { id: '001', position: 11, likes: 6, tags: ['html', 'css', 'nodejs', 'js'] },
//   { id: '002', position: 8, likes: 11, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', position: 5, likes: 0, tags: ['css', 'react', 'nodejs'] },
//   { id: '004', position: 6, likes: 3, tags: ['js', 'nodejs', 'react'] },
// ];
// const likesTotal = tweets.reduce((total, tweet) => total + tweet.likes, 0);
// console.log('likesTotal: ', likesTotal);
// const countTotal = (array, property) =>
//   array.reduce((total, number) => total + number[property], 0);
// console.log('countTotal(tweets) position: ', countTotal(tweets, 'position'));
// console.log('countTotal(insta) likes: ', countTotal(insta, 'likes'));
// // // ****************************************
// const tagList = array =>
//   array
//     .reduce((tagsArray, item) => {
//       tagsArray.push(...item.tags);
//       return tagsArray;
//     }, [])
//     .filter((item, i, array) => array.indexOf(item) === i);
// console.log('tagList(insta): ', tagList(insta));
// // // ****************************************
// const getTagsMap = social => social.flatMap(element => element.tags);
// const getTagsReduce = social =>
//   social.reduce((acc, elem) => {
//     acc.push(...elem.tags);
//     return acc;
//   }, []);
// console.log('insta tags: ', getTagsMap(insta));
// console.log('tweets tags: ', getTagsReduce(tweets));
// const tagsTweet = getTagsMap(tweets);
// const tagsInsta = getTagsReduce(insta);

// const getTagCount = tags =>
//   tags.reduce((acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }
//     acc[tag] += 1;
//     return acc;
//   }, {});
// console.table(getTagCount(tagsTweet));
// console.table(getTagCount(tagsInsta));
// -----------------------------------------------------------------------------

//
//
//
//
//
//
//
//
//

// 'π'--------------------'π' The keyword this (Lesson 9) 'π'--------------------'π'
// 'π'--------------------'π' Prototypes and Classes (Lesson 10) 'π'--------------------'π'
// 'π'--------------------'π' Destructuring and spread/rest (Lesson 11) 'π'--------------------'π'
// 'π'--------------------'π' Callbacks and Arrow Functions (Lesson 12) 'π'--------------------'π'
// 'π'--------------------'π' Event Delegation (Lesson 13) 'π'--------------------'π'
// 'π'--------------------'π' Throttle/Debounce and Lazyload (Lesson 14) 'π'--------------------'π'
// 'π'--------------------'π' Code Modularity (Lesson 15) 'π'--------------------'π'
// 'π'--------------------'π' Web Storage (Lesson 16) 'π'--------------------'π'
// 'π'--------------------'π' Timers and Time (Lesson 17) 'π'--------------------'π'
// 'π'--------------------'π' Promises (Lesson 18) 'π'--------------------'π'
// 'π'--------------------'π' HTTP Requests (Lesson 19) 'π'--------------------'π'
// 'π'--------------------'π' Pagination (Lesson 20) 'π'--------------------'π'
// 'π'--------------------'π' CRUD (Lesson 21) 'π'--------------------'π'
// 'π'--------------------'π' Syntax async/await (Lesson 22) 'π'--------------------'π'

// ******************** ΠΠΈΡΠ°Π½Π½Ρ ********************

// Π―ΠΊΠΈΠΌ Π±ΡΠ΄Π΅ ΡΠ΅Π·ΡΠ»ΡΡΠ°Ρ Π²ΠΈΡΠ°Π·ΡΠ²? String ΠΏΠΎΡΡΠ²Π½ΡΡΡΡΡΡ ΠΏΠΎΡΠΈΠΌΠ²ΠΎΠ»ΡΠ½ΠΎ ΠΏΠΎ ΠΊΠΎΠ΄Ρ ΡΠΈΠΌΠ²ΠΎΠ»Π°.
// ΠΡΠΈ ΠΏΠΎΡΡΠ²Π½ΡΠ½Π½Ρ Π· ΡΠΈΡΠ»ΠΎΠΌ Π²ΡΠ΄Π±ΡΠ²Π°ΡΡΡΡΡ ΠΏΠ΅ΡΠ΅ΡΠ²ΠΎΡΠ΅Π½Π½Ρ Π½Π° ΡΠΈΡΠ»ΠΎ.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

// console.log(5 > 4); // true
// console.log(8 >= '7'); // true.
// console.log(5 > '9'); // false  - ΡΠΎΠΌΡ?
// console.log('2' > '12'); // true. - ΡΠΎΠΌΡ?
// -----------------------------------------------------------------------------
//  .split(/\s+/) - ΡΠΎ ΡΠ΅ Π·Π° ΡΠΈΠ½ΡΠ°ΠΊΡΠΈΡ?
// -----------------------------------------------------------------------------
//ΠΎΠΏΠ΅ΡΠ°ΡΠΎΡ return, Π²ΡΠ½ ΡΡΡ Π½Π΅ ΠΏΠΎΡΡΡΠ±Π΅Π½, Π°Π»Π΅ ΡΠΎΠΌΡ Π² Π°Π²ΡΠΎΠΏΠ΅ΡΠ΅Π²ΡΡΡΡ Π½Π΅ ΠΏΡΠΈΠΉΠΌΠ°Π»ΠΎ ΠΊΠΎΠ΄ Π±Π΅Π· Π½ΡΠΎΠ³ΠΎ, ΠΏΠΎΠΌΠΈΠ»ΠΊΠ°?

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books);
// ****************************************
// const bookShelf1 = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i] === oldName) {
//         this.books.splice(i, 1, newName);
//       }
//     }
//   },
// };

// bookShelf1.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf1.books);
// -----------------------------------------------------------------------------
// return (item.quantity += 1);
// Π΄ΠΎΡΡΠ²Π½ΡΡ ???????
// item.quantity += 1;
// return;
// -----------------------------------------------------------------------------
// ΠΏΡΠΈΠΊΠ»Π°Π΄Π½Ρ Π΄ΠΎΠ΄Π°ΡΠΊΠΎΠ²ΡΠ·Π°Π΄Π°ΡΡ.
// -----------------------------------------------------------------------------
