// 1. Destructuring Assignment
// Mashq: Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.

const user = { name: "Ali", age: 25, location: "Toshkent" };
let { name, age, location } = user;
console.log(name, age, location);

// Mashq: Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.
const numbers = [10, 20, 30, 40, 50];
const arr = [1, 2, 3, 4, 5, 6];
let [first, second, ...others] = arr;
console.log(first);
console.log(second);
console.log(others);

// Mashq: Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.
const product = { title: "Telefon", price: 300, brand: "Samsung" };
function displayProduct({ title, price }) {
  console.log(title, price);
}
displayProduct(product);

// 2. Scope
// Mashq: Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.
let x = 10;
function testScope() {
  let x = 20;
  if (true) {
    let x = 30;
    console.log("Block scope:", x);
  }
  console.log("Local scope:", x);
}
testScope();
console.log("Global scope:", x);

// Mashq: Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.
function calculate() {
  if (true) {
    let result = 10;
  }
  console.log(result); // Xato
}
calculate();

// Mashq: Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.

//  let count = 5;

// function increment() {
//   count++;
//   console.log("Function scope:", count);
// }

// increment();
// if (true) {
//   count += 2;
//   console.log("Block scope:", count);
// }

// console.log("Global scope:", count);

// 3. Spread/Rest Operator
// Mashq: Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.

//  const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// Mashq: Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.

//  function squareNumbers(...numbers) {
// Bu yerda kod yozing
// }

// console.log(squareNumbers(2, 3, 4)); // [4, 9, 16]

// Mashq: Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.

//  const user = { name: "Ali", age: 25 };
// const updatedUser = {
// Bu yerda spread operatoridan foydalaning
// };

// console.log(updatedUser);

// 4. Hoisting va TDZ (Temporal Dead Zone)
// Mashq: Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.

//  console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;

// test();
// function test() {
//   console.log("Test function called");
// }

// Mashq: TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.

//  console.log(x); // Xato
// let x = 5;

// Mashq: Quyidagi kodning ishlash tartibini tushuntiring.

//  var x = 10;

// function example() {
//   console.log(x); // ?
//   var x = 20;
//   console.log(x); // ?
// }

// example();

// 5. Modul
// Mashq: Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.

//  // module.js
// export function sum(a, b) {
//   return a + b;
// }

// export function multiply(a, b) {
//   return a * b;
// }

// // main.js

// Mashq: Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.

//  // greet.js
// export default function greet(name) {
//   return `Hello, ${name}!`;
// }

// // main.js

// Mashq: Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.

//  // math.js
// export function divide(a, b) {
//   return a / b;
// }

// // main.js

// Massiv va obyektlar namunasi:
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];

// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];

// 1-5. Foydalanuvchilarga oid masalalar
// Faol foydalanuvchilarni topish:
//  Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.

// Yoshi bo‘yicha saralash:
//  Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.

// Ism bo‘yicha qidiruv:
//  Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.

// Yosh o‘rtachasini hisoblash:
//  Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.

// Foydalanuvchilarni yosh oralig‘ida qidirish:
//  Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.

// 6-10. Mahsulotlarga oid masalalar
// Kategoriya bo‘yicha qidiruv:
//  Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.

// Narxi eng yuqori mahsulot:
//  Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.

// Narxlar yig‘indisi:
//  Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.

// Narxi pasaytirilgan mahsulotlar:
//  Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.

// Muayyan narxdan yuqori mahsulotlar:
//  Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.

// 11-15. Murakkab kombinatsiyalar
// Foydalanuvchi va mahsulotlarni bog‘lash:
//  Foydalanuvchilar va mahsulotlarni ulovchi funksiya yozing: har bir foydalanuvchiga tasodifiy mahsulot biriktiriladi va natija qaytariladi.

// Eng ko‘p foydalaniladigan kategoriya:
//  Funksiya mahsulotlar ichida qaysi kategoriya eng ko‘p ishlatilganligini aniqlashi kerak.

// Faol foydalanuvchilarning o‘rtacha yoshi:
//  Faqat isActive: true qiymatiga ega foydalanuvchilarning yoshlarini o‘rtachasini qaytaradigan funksiya yozing.

// Maxsus mahsulot qidiruvi:
//  Funksiya mahsulot nomining ichida ma’lum bir so‘z qatnashgan mahsulotlarni qaytarishi kerak.

// Kombinatsiyalangan hisob-kitob:
//  Foydalanuvchilarning sonini va mahsulotlarning umumiy narxini qaytaradigan funksiya yozing.
