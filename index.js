// // 1 task
// // create function
// const deepEqual = (firstObj, secondObj) => {
//   // Since objects are axial elements: they will always give a false assignment when compared. So first we convert the object value to a string and compare it. This method will not work if the object has methods

//   result = JSON.stringify(firstObj) === JSON.stringify(secondObj);
//   // console.log(result);
//   return result;
// };

// deepEqual({ name: "test" }, { name: "test" }); // output true
// deepEqual({ name: "test" }, { name: "test1" }); // output false
// deepEqual(
//   { name: "test", data: { value: 1 } },
//   { name: "test", data: { value: 2 } }
// ); // output false
// deepEqual({ name: "test" }, { name: "test", age: 10 }); // false

// // 2 task
// // in this task we cane use ES6 operator yield for build the generator function.
// let index = 0;

// function* chunkArray(arr, chunkSize) {
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     // after every eteration function did stop and wait triger (.next()) it will return (done: false) while the iteration is not end. after that he return (done: true), what is mean we return all of interestion fo us part of array.
//     yield arr.slice(i, i + chunkSize);
//   }
// }

// const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

// iterator.next(); // { value: [1,2,3], done: false }
// iterator.next(); // { value: [4,5,6], done: false }
// iterator.next(); // { value: [7,8], done: false }
// iterator.next(); // { value: undefined, done: true }

// 3 task

// // принимаем 1 аргумент
// function bulkRun(functionsAndArgs) {
//   // создвем массив промисов который будет хранить промисы.
//   const promises = functionsAndArgs.map(([func, args]) => {
//     // промис ожидает резольва , мы передаем функции аргументы, используя оператор ...args.
//     return new Promise((resolve) => {
//       func(...args, resolve);
//     });
//   });
//   // Мы возвращаем результат Promise.all(promises), который ожидает завершения всех промисов в массиве promises
//   return Promise.all(promises);
// }

// const f1 = (cb) => {
//   cb(1);
// };

// const f2 = (a, cb) => {
//   cb(a);
// };

// const f3 = (a, b, cb) => {
//   setTimeout(() => cb([a, b]), 1000);
// };

// bulkRun([
//   [f1, []],
//   [f2, [2]],
//   [f3, [3, 4]],
// ]).then(console.log); // Output: [1, 2, [3, 4]]

// // task 4

// // create a function that recursively converts an array into an object
// const arrayToObject = (arr) => {
//   // create an object to which we will add objects.
//   const obj = {};
//   // crawl the array that came into the function and immediately destruct the array into key and value
//   arr.forEach(([key, value]) => {
//     // if the value is another array, we call the function recursively and in the future the key will be assigned the value of the returned
//     if (Array.isArray(value)) {
//       obj[key] = arrayToObject(value);
//     } else {
//       // f the value is not an array, it will be immediately assigned to the key
//       obj[key] = value;
//     }
//   });

//   // Return the finished object, either as a result of recursion or as a final result
//   return obj;
// };

// var arr = [
//   ["name", "developer"],
//   ["age", 5],
//   [
//     "skills",
//     [
//       ["html", 4],
//       ["css", 5],
//       ["js", 5],
//     ],
//   ],
// ];

// let result = arrayToObject(arr);
// console.log(result);

// task 5

// const objectToArray = (obj) => {
//   let arr = [];

//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       arr = [...arr, [key, objectToArray(obj[key])]];
//       // arr.push([key, ...Object.entries(obj)]);
//     } else {
//       arr = [...arr, [key, obj[key]]];
//     }
//   }

//   return arr;
// };

// const obj = {
//   name: "developer",
//   age: 5,
//   skills: {
//     html: 4,
//     css: 5,
//     js: 5,
//   },
// };

// let resutl = objectToArray(obj);

// console.log(resutl);

// task 6

// function NotificationException() {}
// function ErrorException() {}
// function primitiveMultiply(a, b) {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     return a * b;
//   } else if (rand > 0.85) {
//     throw new ErrorException();
//   } else {
//     throw new NotificationException();
//   }
// }

// // создаем функцию прокладку которая будет отлавливать ошибки или возвращать результат
// function reliableMultiply(a, b) {
//   // запускаем вечный цикл который будет работать до тех пор пока значение true
//   while (true) {
//     // Внутри цикла создаем обработчик ответов с помощью try catch
//     try {
//       // если значение rand < 0.5 происходит умножение и мы получаем ответ 64
//       console.log("primitiveMultiply");
//       return primitiveMultiply(a, b);
//     } catch (error) {
//       // если значение rand > 0.85 то обьект error принадлежит классу ErrorException и выполнение цикла прекращается ошибкой
//       if (error instanceof ErrorException) {
//         console.log("ErrorException");
//         throw error;
//         // если значение rand < 0.85 и больше 0.5 то обьект error принадлежит классу NotificationException и выполнение вычисления primitiveMultiply повторяется
//       } else if (error instanceof NotificationException) {
//         console.log("NotificationException");
//         return primitiveMultiply(a, b);
//       } else {
//         // этот блок не является обязательным в данном случае, так как не сработает не в одном из случаев, но в любом случае стоит его добавлять, так как не все ошибки мы можем продумать, но он точно предотвратит падение кода и гарантирует продолжение выполнение оставшегося кода на странице
//         throw error;
//       }
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

// task 7

// let string = "";
// let temperalString = "";
// const arr = [];
// let resultObj = {};

// const hasKeyByPath = (obj, temperalString) => {
//   const keys = temperalString.split("/").filter((key) => key !== "");
//   // console.log(keys);

//   for (const key of keys) {
//     if (obj && obj.hasOwnProperty(key)) {
//       obj = obj[key];
//     } else {
//       return false; // Если ключ не найден, возвращаем false
//     }
//   }

//   return true;
// };

// const slicer = (str) => {
//   const result = str.slice(0, 2) + str.slice(4);
//   return result;
// };

// // создаем функцию  рекурсии которая будет изначально возвращать массив с обьектами плоских путей
// const mapObject = (value) => {
//   // перебераем
//   for (let key in value) {
//     // Если значение ключа это обьект. не нал и не массив запускаем рекурсию
//     if (
//       typeof value[key] === "object" &&
//       value[key] !== null &&
//       !Array.isArray(value[key])
//     ) {
//       // стинге присваиваем путь который привел к чему угодно кроме обькта
//       string = `${string}/${key}`;
//       mapObject(value[key]);
//     } else {
//       // Если значение ключа это обьект. все что угодно кроме обьекта мы начинаем их обработку, создаем временный путь который в дальнейшем будем использовать в виде ключа.
//       // временной строке присваиваем значение первого пути который нашли
//       temperalString = `${string}/${key}`;

//       if (string !== temperalString) {
//         const objToAdd = {};
//         // если hasKeyByPath возвращает тру, то есть по этому пути есть что-то мы добавляем в массив обьект с путем в виде ключа и значением в виде значения.
//         if (hasKeyByPath(obj, temperalString)) {
//           objToAdd[temperalString] = value[key];

//           arr.push(objToAdd);
//         }
//         // Если путь привел в никуда мы будем отрезать по 1 ключу до тех пор пока не дойдем снова до правильного пути, после чего добавим его тоже в массив
//         if (!hasKeyByPath(obj, temperalString)) {
//           objToAdd[slicer(temperalString)] = value[key];
//           arr.push(objToAdd);
//           console.log(hasKeyByPath(obj, slicer(temperalString)));
//         }
//       }
//     }
//   }

//   return arr;
// };

// const obj = {
//   a: {
//     b: {
//       c: 12,
//       d: "Hello World",
//     },
//     e: [1, 2, 3],
//   },
// };

// const resultMiddlewar = (arrToObj) => {
//   const mergedObject = arrToObj.reduce((result, obj) => {
//     return { ...result, ...obj };
//   }, {});

//   return mergedObject;
// };
// // последнее действие - выносим обьекты путей из массива в обьект  спомощью функции resultMiddlewar
// console.log(resultMiddlewar(mapObject(obj)));

// // Outputs: {
// //   'a/b/c': 12,
// //   'a/b/d': 'Hello World',
// //   'a/e': [1,2,3]
// // }

// task 8

//В этом решении мы определяем внутреннюю функцию generateCombinations, которая рекурсивно создает комбинации чисел суммирующихся до remaining. Мы начинаем с 1 итерации (передавая start = 1), исключая нулевую итерацию, чтобы избежать повторений. Мы также фильтруем дубликаты из результатов, чтобы гарантировать, что каждая комбинация уникальна. Это делается с помощью метода filter, который проверяет, что текущая комбинация не совпадает с предыдущими комбинациями.После завершения цикла generateCombinations, uniqueResults содержит массив уникальных комбинаций чисел, суммирующихся до num.

// function combos(num) {
//   function generateCombinations(remaining, currentCombo, start) {
//     if (remaining === 0) {
//       result.push([...currentCombo]);
//       return;
//     }

//     for (let i = start; i <= remaining; i++) {
//       currentCombo.push(i);
//       generateCombinations(remaining - i, currentCombo, i);
//       currentCombo.pop();
//     }
//   }

//   const result = [];
//   generateCombinations(num, [], 1);

//   // Фильтруем дубликаты
//   const uniqueResults = result.filter((combo, index, self) => {
//     return self.findIndex((c) => c.join(",") === combo.join(",")) === index;
//   });

//   return uniqueResults;
// }

// console.log(combos(3));
// console.log(combos(10));

// task 9 = решить не смог
