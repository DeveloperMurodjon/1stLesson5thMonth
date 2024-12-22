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
let count = 5;
function increment() {
  count++;
  console.log("Function scope:", count);
}
increment();
if (true) {
  count += 2;
  console.log("Block scope:", count);
}
console.log("Global scope:", count);

// 3. Spread/Rest Operator
// Mashq: Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const res = [...arr1, ...arr2];

// Mashq: Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.
function squareNumbers(...numbers) {
  const res1 = numbers.map((value) => {
    return value ** 2;
  });
  return res1;
}
console.log(squareNumbers(2, 3, 4));

// Mashq: Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.
const user1 = { name: "Ali", age: 25 };
const updatedUser = { ...user1, job: "Developer", country: "Uzbekistan" };
console.log(updatedUser);

// 4. Hoisting va TDZ (Temporal Dead Zone)
// Mashq: Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.
console.log(a); // ? bu holatda deklaration kodning boshiga o'tadi va qiymat esa undefined bo'lib qoladi
var a = 10;
console.log(b); // ? bu holatda b TDZ ichida turibdi yani e'lon qilingunga qadar mavjud emas //ReferenceError: Cannot access 'b' before initialization
let b = 20;
test(); //? bu holatda funksiya to'liq body bilan ko'tariladi yani hoisting holatida ham to'liq ishlaydi
function test() {
  console.log("Test function called");
}

// Mashq: TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.
console.log(y); // Xato bu holatda y TDZ ichida
let y = 5;

// Mashq: Quyidagi kodning ishlash tartibini tushuntiring.
var e = 10; //? e global scopeda joylashgan va
function example() {
  console.log(e); // ? e funksiya ichida alohida elon qilingani sababli local scope ichidagi e dan foydalaniladi lekin e var kalit so'zidan foydalianilgani va elon qilinishidan oldin chaqirilgani sababli `undefined` natija chiqadi
  var e = 20; //? bu yerda local scope ichidagi e uchun qiymat berilgan
  console.log(e); // ?bu yerda javob 20 chiqadi
}
example();

// 5. Modul
// Mashq: Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.
// module.js
export function sum(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}
// main.js

// Mashq: Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.
// greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}

// main.js

// Mashq: Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.
// math.js
export function divide(a, b) {
  return a / b;
}
// main.js

// 1-5. Foydalanuvchilarga oid masalalar
// Faol foydalanuvchilarni topish:
//  Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.
const users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];
const isActiveTrue = users.filter((user) => {
  return user.isActive == true;
});
console.log(isActiveTrue);

// Yoshi bo‘yicha saralash:
//  Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.
const users1 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];
const sortedUsers = [...users1].sort((a, b) => a.age - b.age);
console.log(sortedUsers);

// Ism bo‘yicha qidiruv:
//  Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.
function findName(users, firstname) {
  const foundUser = users.find((user) => user.name === firstname);
  return foundUser;
}
console.log(findName(users1, `Sardor`));

// Yosh o‘rtachasini hisoblash:
//  Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.
const users2 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];
function AverageAge(users) {
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  const averageAge = totalAge / users.length;
  return averageAge;
}
console.log(AverageAge(users2));

// Foydalanuvchilarni yosh oralig‘ida qidirish:
//  Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.
const users3 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Laylo", age: 30, isActive: false },
  { id: 3, name: "Sardor", age: 22, isActive: true },
  { id: 4, name: "Madina", age: 28, isActive: false },
];
function MinAndMAx(users, minAge, maxAge) {
  const filterUsers = users.filter(
    (user) => user.age >= minAge && user.age <= maxAge
  );
  return filterUsers;
}
console.log(MinAndMAx(users3, minAge, maxAge));

// 6-10. Mahsulotlarga oid masalalar
// Kategoriya bo‘yicha qidiruv:
//  Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.
const products = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];
function CatgFinder(products, CatgName) {
  const SearchCatgr = products.filter(
    (product) => product.category == CatgName
  );
  return SearchCatgr;
}
console.log(CatgFinder(products, `books`));

// Narxi eng yuqori mahsulot:
//  Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.
const products1 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];
function maxPrice(products1) {
  const maxPrice = Math.max(...products1.map((product) => product.price));
  const maxProduct = products1.find((product) => product.price === maxPrice);
  return maxProduct;
}
console.log(maxPrice(products1));

// Narxlar yig‘indisi:
//  Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.
const products2 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];
function totPrice(products) {
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
}
console.log(totPrice(products2));

// Narxi pasaytirilgan mahsulotlar:
//  Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.
const products3 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];

function dicreasePrice(products) {
  return products.map((product) => {
    return {
      ...product,
      price: product.price * 0.9,
    };
  });
}
console.log(dicreasePrice(products3));

// Muayyan narxdan yuqori mahsulotlar:
//  Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.
const products4 = [
  { id: 1, name: "Telefon", price: 1200, category: "electronics" },
  { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
  { id: 3, name: "Stol", price: 150, category: "furniture" },
  { id: 4, name: "Kitob", price: 50, category: "books" },
];
function miniPrice(products, minPrice) {
  return products.filter((product) => product.price > minPrice);
}
console.log(miniPrice(products4, 500));

// 11-15. Murakkab kombinatsiyalar (Ixtiyoriy)
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
