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
//// create a function that recursively converts an object into an array
// const objectToArray = (obj) => {
// // create empty arr
//   let arr = [];
////We're going through the object to retrieve the keys.
//   for (let key in obj) {
//// if the key value is an object , restart the function recursively
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       arr = [...arr, [key, objectToArray(obj[key])]];
//       // arr.push([key, ...Object.entries(obj)]);
//     } else {
//// If the key is just a value, we move everything to the object we sprayed before to save progress.
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

// // create a gasket function that will catch errors or return the result
// function reliableMultiply(a, b) {
//   // start a perpetual loop that will run until the value is true
//   while (true) {
//     // Inside the loop we create a response handler using try catch
//     try {
//       // if rand < 0.5 the multiplication takes place and we get the answer 64
//       console.log("primitiveMultiply");
//       return primitiveMultiply(a, b);
//     } catch (error) {
//       // if rand > 0.85 then the error object belongs to the ErrorException class and the loop is terminated with an error
//       if (error instanceof ErrorException) {
//         console.log("ErrorException");
//         throw error;
//         // f rand < 0.85 and greater than 0.5, the error object belongs to NotificationException class and the primitiveMultiply calculation is repeated.
//       } else if (error instanceof NotificationException) {
//         console.log("NotificationException");
//         return primitiveMultiply(a, b);
//       } else {
//         // this block is not obligatory in this case, as it will not work in any of the cases, but in any case it is worth adding it, as we can't think through all the errors, but it will definitely prevent code crash and guarantee that the remaining code on the page will continue executing
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

// // create a recursion function that will initially return an array of flat path objects
// const mapObject = (value) => {
//   // rebuild
//   for (let key in value) {
//     // If the key value is an object. not a nal and not an array, run recursion.
//     if (
//       typeof value[key] === "object" &&
//       value[key] !== null &&
//       !Array.isArray(value[key])
//     ) {
//       // Sting assigns the path that led to anything other than the object.
//       string = `${string}/${key}`;
//       mapObject(value[key]);
//     } else {
//       //If the value of the key is an object. anything other than an object we start processing them, create a temporary path which we will use as a key in the future.
//       // assign the value of the first path we found to the temporary string
//       temperalString = `${string}/${key}`;

//       if (string !== temperalString) {
//         const objToAdd = {};
//         // if hasKeyByPath returns trudy, i.e. there is something on this path, we add an object with path as key and value as value to the array.
//         if (hasKeyByPath(obj, temperalString)) {
//           objToAdd[temperalString] = value[key];

//           arr.push(objToAdd);
//         }
//         // If the path led to nowhere we will cut off 1 key at a time until we get to the correct path again, then add it to the array too
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
// // last action - move path objects from the array to the object using the resultMiddlewar function
// console.log(resultMiddlewar(mapObject(obj)));

// // Outputs: {
// //   'a/b/c': 12,
// //   'a/b/d': 'Hello World',
// //   'a/e': [1,2,3]
// // }

// task 8

//In this solution, we define an internal function generateCombinations, which recursively creates combinations of numbers summing up to remaining. We start with 1 iteration (passing start = 1), excluding the zero iteration to avoid repetitions. We also filter out duplicates from the results to ensure that each combination is unique. This is done using the filter method, which checks that the current combination does not match previous combinations.After the generateCombinations loop completes, uniqueResults contains an array of unique combinations of numbers summed to num.

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
