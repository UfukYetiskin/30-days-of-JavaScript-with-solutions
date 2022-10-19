console.log("  -  Sets, WeakSets, Maps and WeakMaps -  ")

//Set benzersiz değerleri tutan bir JavaScript nesnesidir. Her veri tipinde değer tutabilir. Fakat aynı değeri birden fazla kez içeremez.

//create our set
//syntax
const firstSet = new Set();

//add(1) ile firstSet nesnemize eleman ekleriz.
firstSet.add("First");
console.log(firstSet);
//Set(1) {'First'}


firstSet.add("Second");
console.log(firstSet);
//Set(2) {'First', 'Second'}

firstSet.add("Third");
firstSet.add("Fourth");
firstSet.add("Fifth");



firstSet.add("First")
console.log(firstSet);
//Set(2) {'First', 'Second'}

//Görüldüğü üzere firstSet değişkenine tekrar "First" değeri eklemeye çalıştık fakat set yine aynı kaldı. Çünkü Set sadece benzersiz (tekrar etmeyen) değerler alır.

//size, Bir Set nesnesinin kaç değer tuttuğunu öğrenmek için size özelliğine bakarız.
console.log(firstSet.size)
//2

//has(1), 1 değerinin set nesnesinde olup olmadığını sorgularız. 
console.log(firstSet.has("First"));
//true


//delete(1), Bir değeri silmek için delete metodu kullanılır. Bu metot bir değeri sildiğinde true, olmayan bir değeri silmeye çalıştığınızda false değerini döndürür.
firstSet.delete("First")
//true

//Loop on Set
//Set nesnesi üzerinde döngü kurmanın iki yolu vardır. .next() metodunu kullanmak ya da for of döngüsü kullanmak.

//using .next();
const iterator = firstSet.values();
console.log(iterator.next());
//{value: 'Second', done: false}


//for of
for(const number of firstSet){
    console.log(number);
}
// Second
// Third
// Fourth
// Fifth

//Remove duplicates from an array || Bir diziden kopyaları kaldırmak

const myFamily = ["Dad", "Mom", "Sisters", "Brother", "Dad", "Mom"];

const setFamily = new Set(myFamily);
console.log(setFamily);
//Set(4) {'Dad', 'Mom', 'Sisters', 'Brother'}

//Set nesnesini arraya çevirmek
const setToArray = Array.from(setFamily);
console.log(setToArray);
//(4) ['Dad', 'Mom', 'Sisters', 'Brother']

//What is a WeakSet?
//WeakSet, JavaScript’in WeakSet’teki ögeleri bellekten kaldırmasını engellemeyen özel bir tür Set dir

let dad = {name : "Daddy", age : 56};
let mom = {name : "Mommy", age : 52};

const family = new WeakSet([dad,mom]);

// for(const person of family){
//     console.log(person)
// }
//Uncaught TypeError: family is not iterable

dad = null;
console.log(family);
//WeakSet {{…}, {…}}

//What is a Map?
//Map anahtar ve değer ikilisini tutan ve değerlerin eklenme sırasını hatırlayan bir JavaScript nesnesidir. Normal bir nesneden farklı olarak anahtar için herhangi bir veri tipi kullanılabilir. String ile sınırlı değildir.

//syntax
const firstMap = new Map()

//create map
const cats = new Map();

cats.set("Pars", 2)
cats.set("Latte", 0.5);

console.log(cats);
//Map(2) {'Pars' => 2, 'Latte' => 0.5}

//size of map
console.log(cats.size)
//2

//loop for map
cats.forEach((val, key) => console.log(key, val));
//Pars 2
//Latte 0.5

//with for of
for(const [key, val] of cats){
    console.log(key, val)
}
//Pars 2
//Latte 0.5


//What is a WeakMap
//WeakMap Map in .get,.set,.has ve .delete fonksiyonlarını destekler. Ancak anahtar değer olarak sadece object,function ve NaN gibi verileri kabul eder.

let weakmap = new WeakMap()
const obj = {};
weakmap.set(obj, {});
console.log(weakmap.get(obj))
//{}
