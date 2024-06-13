let values = [12, 323, 43, 45, 45, 46, 12, 3, 23];

console.log(values[0]);
console.log(values[5]);

console.log("leght", values.length);
let sum = 0;
for (let i = 0; i < values.length; i++) {
  //   console.log(i);
  sum += values[i];
  console.log(values[i]);
}
console.log(sum);

//bodlogo1

let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log("bod1.1: ", fruits[0]);
console.log("bod1.2: ", fruits[fruits.length - 1]);
console.log("bod1.3: ", fruits[2]);

//bodlogo2

let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 1) {
    count = count + 1;
  }
}
console.log("bod2.1: ", count);

let count2 = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    count2 = count2 + 1;
  }
}
console.log("bod2.2: ", count2);

//bodlogo3

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

console.log("bod3.1: ", array.length);

//
let sum3_2 = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum3_2 += arrayOfNumbers[i];
}
console.log("bod3.2: ", sum3_2);

//
let avg3_3 = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  avg3_3 += arrayOfNumbers[i];
}
console.log("bod3.3: ", avg3_3 / arrayOfNumbers.length);

//
console.log("bod3.4: ", sum3_2);

//
let sum3_5 = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 == 0) {
    sum3_5 += arrayOfNumbers[i];
  }
}
console.log("bod3.5: ", sum3_5);

//
let sum3_6 = 1;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 == 1) {
    sum3_6 = sum3_6 * arrayOfNumbers[i];
  }
}
console.log("bod3.6: ", sum3_6);

//
let max = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (max < arrayOfNumbers[i]) {
    max = arrayOfNumbers[i];
  }
}
console.log("bod3.7: ", max);

//
let min = 10000000000;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (min > arrayOfNumbers[i]) {
    min = arrayOfNumbers[i];
  }
}
console.log("bod3.7: ", min);
