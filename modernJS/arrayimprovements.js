console.log(" --- Array Improvements --- ")

//Array.from()
//Array.from() metodu bir dizi-benzeri veya gezinilebilir bir nesneden yeni bir Dizi örneği oluşturur.

const fruits = document.querySelectorAll(".fruits p")
// fruits is a nodelist (an array-like collection) containng our three p tags
// now we convert it in an Array
const fruitsArray = Array.from(fruits)
console.log(fruitsArray)
//(3) [p, p, p]


//since now we are dealing with an array we can use map
const fruitNames = fruitsArray.map(fruit => fruit.textContent);
console.log(fruitNames)
//(3) ['Apple', 'Banana', 'Orange']

/*
Şimdi meyveleri gerçek bir diziye dönüştürdük, yani üzerinde olduğu gibi her türlü yöntemi kullanabiliriz map.

Array.from()ayrıca yazabilmemiz için ikinci bir argüman, bir mapfonksiyon alır:

const fruits = document.querySelectorAll(".fruits p");
const fruitArray = Array.from(fruits, fruit => {
  console.log(fruit);
   <p> Apple </p>
   <p> Banana </p>
   <p> Orange </p>
  return fruit.textContent;
   we only want to grab the content not the whole tag
});
console.log(fruitArray);
["Apple", "Banana", "Orange"]
Yukarıdaki örnekte , yeni oluşturulan dizimize itmek mapiçin yönteme bir işlev ilettik. .from()Bu, tüm etiketi değil, yalnızca etiketleri textContentiçerir .p

*/

//Array.of()
//Array.of()içine aktardığımız tüm argümanları içeren bir dizi oluşturacaktır.

const digits = Array.of(1,2,3,4,5);
console.log(digits)
// Array [ 1, 2, 3, 4, 5];



//Array.find()
//Array.find()sağlanan test işlevini karşılayan dizideki ilk öğenin değerini döndürür. Aksi takdirde undefinediade edilir.

const findArray = [1, 2, 3, 4, 5]

//findArray dizisinin içerisinde 3'ten büyük olan ilk elemanı döndürür.
let found = findArray.find(item => item > 3)
console.log(found) //4

//Array.findIndex()
//findIndex() methodu ile aranılan elemana sahip ilk indexi döndürür

const findStr = ["hello","hi","byebye","goodbye","hi"];

let findIndex = findStr.findIndex(item => item === "hi");
console.log(findIndex)
//1



//Array.some()
/* 
verilen öğenin dizi içerisindeki elemanlardan biriyle eşleşip eşleşmediğini kontrol eder.
*/
const someArr = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4,];

let arraySome = someArr.some(item => item > 2)
console.log(arraySome) //true

//Array.every()
//verilen öğenin tüm elemanlar ile eşleşip eşleşmediğini kontrol eder

let arrayEvery = someArr.every( item => item > 2)
console.log(arrayEvery) //false

//slice()
//Bir dizinin kbaşlangıç ve bitiş indeksine göre kopyasını almak istiyorsak kullanırız.

const numArr = [1, 2, 3, 4, 5, 6]

console.log(numArr.slice(2));
//(4) [3, 4, 5, 6]
console.log(numArr.slice(0, 3));
//(3) [1, 2, 3]
console.log(numArr)
//(6) [1, 2, 3, 4, 5, 6]


//splice()
// splice()Yöntem, mevcut öğeleri kaldırarak veya değiştirerek ve/veya yerine yeni öğeler ekleyerek bir dizinin içeriğini değiştirir."
const numArr1 = [1, 2, 3, 4, 5, 6]

console.log(numArr1.splice(2));
//(4) [3, 4, 5, 6]
console.log(numArr1.splice(0, 3))
//(2) [1, 2]
console.log(numArr1)
//[]


//includes()
//dizide belirli bir elemanın bulunup bulunmadığını kontrol eden bir araçtır. trueveya döndürür false.

const numArr2 = [1, 2, 3, 4, 5, 6]

console.log(numArr2.includes(3))
//true
console.log(numArr2.includes(9))
//false


//shift()
// Sadece ilk öğeyi diziden kaldırır ve geri döndürür. Dizi nesnenizi değiştireceğinden dikkatli olun.
const shiftArr = [1, 2, 3, 4]
const shift = shiftArr.shift()
console.log(shiftArr)
//(3) [2, 3, 4]


//Unshift()
// Bir öğeyi kaldırmak yerine dizinin başına ekler.

const unshift = shiftArr.unshift(5);
console.log(shiftArr)
//(4) [5, 2, 3, 4]


