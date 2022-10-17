console.log("--- Generators --- ")

/* 
Normal Fonksiyondan çıkmanın tek yolu onu sonuna kadar çalıştırmak,
 return kullanmak veya bir hatayla karşılaşmaktır. Fonksiyonu tekrar çağırırsanız, tekrar yukarıdan çalışmaya başlar.

 Bunun aksine, bir Generator yarı yolda durabilen ve ardından kaldığı yerden devam edebilen bir fonksiyondur.

 Generator fonksiyonumuzu tanımlarken normal fonksiyona ek olarak, "*" (yıldız) karakterini kullanmmamız gerekir.


*/

function* example(){
    yield "Banana";
    yield "Apple";
    yield "Orange";
}
const firstExample = example();

firstExample;
console.log(firstExample)
// [[Prototype]]: Generator
firstExample.next();
console.log(firstExample.next());
// Object{value: 'Banana', done: false}
console.log(firstExample.next());
// Object{value: 'Apple', done: false}
console.log(firstExample.next());
// Object{value: 'Orange', done: false}
console.log(firstExample.next());
// Object{value: 'undefined', done: true}

/*
- function* fonksiyonunu kullanarak bildirdik.
- Anahtar kelimemiz yield'ı value'dan önce kullandık.
- .next() metodunu kullanarak fonksiyonumuzu bir defa çalıştırıyoruz. İlk yield keywordune ait value'yi ekrana bastıracaktır.
- .next() i en son aradığımızda, nesneyi alırız ve boşaltırız.
- .next() her çağrı arasında fonksiyonumuz duraklatılır.
*/

//Looping over an array with a generator
//create an array of fruits
const fruitList = ['Banana','Apple','Orange','Melon','Cherry','Mango'];

//create our looping generator
function* fruitLoop(arr){
    for(const fruit of arr){
        yield `I like to eat ${fruit}`
    }
}
const fruitLoopGenerator = fruitLoop(fruitList);

console.log(fruitLoopGenerator.next());
//{value: 'I like to eat Banana', done: false}
console.log(fruitLoopGenerator.next());
//{value: 'I like to eat Apple', done: false}
console.log(fruitLoopGenerator.next());
// {value: 'I like to eat Orange', done: false}
console.log(fruitLoopGenerator.next());
//{value: 'I like to eat Melon', done: false}
console.log(fruitLoopGenerator.next());
//{value: 'I like to eat Cherry', done: false}
console.log(fruitLoopGenerator.next());
// {value: 'I like to eat Mango', done: false}
console.log(fruitLoopGenerator.next());
// {value: undefined, done: true}

//Finish the generator with .return()
// .return() kullanarak belirli bir değeri döndürebilir ve jeneratörü bitirebiliriz.

function* numList(){
    yield 1;
    yield 2;
    yield 3;
}
const numsGenerator = numList();

console.log(numsGenerator.next());
//{value: 1, done: false}
console.log(numsGenerator.return());
//{value: undefined, done: true}


//Catching errors with .throw();

function* gen(){
    try{
        yield "Trying ...";
        yield "Trying harder ...";
        yield "Trying even harder ...";
    }
    catch(err){
        console.log("Error: " + err )
    }
}

const genGenerator = gen();
console.log(genGenerator.next());
//{value: 'Trying ...', done: false}
console.log(genGenerator.next());
//{value: 'Trying harder ...', done: false}
console.log(genGenerator.throw("Ooopss"));
//Error: Ooopss
//{value: undefined, done: true}

//Combining Generators with Promises

const myPromise = () => {
    return new Promise((resolve) => {
        resolve("our value is ...");
    })
}

function* promiseGen(){
    let result = "";
    yield myPromise().then(data => result = data)
    yield result + ' 2';
};

const asyncFunc = promiseGen();
const val1 = asyncFunc.next();
console.log(val1);
//{value: Promise, done: false}

val1.value.then(() => {
    console.log(asyncFunc.next())
})
//{value: 'our value is ... 2', done: false}