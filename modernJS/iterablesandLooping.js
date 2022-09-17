console.log("-- Iterables and Looping --")

// ------ the for of loop ------


//iterating over an array
let fruits = ['apple', "banana", "orange"]
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}
//apple
//banana
//orange

//i değeri 0'dan fruits değerinin uzunluğu kadarıyla düzenli şekilde artacaktır ve bu sayede biz de her bir elemanı ekrana çıktı olarak veriyoruz

//with for of

for(const fruit of fruits){
    console.log(fruit)
}
//apple
//banana
//orange

//iterating over an object
//Nesneler yinelenemezler, bu yüzden onlar üzerinde Object.keys() yeni ES6 işlevi gibi bir şey kullanarak nesnenin tüm değerlerini almalıyız.

const car = {
    maker : "BMW",
    color  :"red",
    year : "2010"
}
for(const prop of Object.keys(car)){
    const value = car[prop];
    console.log(prop, value)
}
// maker BMW
// color red
// year 2010
for(const prop of Object.entries(car)){
    console.log(prop)
}
//(2) ['maker', 'BMW']
//(2) ['color', 'red']
//(2) ['year', '2010']


//---- the for in loop ----

/* 
Yeni bir ES6 döngüsü olmasa da, onu döngüden ayıran for inşeyin ne 
olduğunu anlamak için döngüye bakalım for of.

for inDöngü biraz farklıdır çünkü bir nesnenin tüm numaralandırılabilir 
özellikleri üzerinde belirli bir sıra olmadan yinelenir.

Bu nedenle, yineleme sırasında nesnenin özelliklerini eklememeniz, 
değiştirmemeniz veya silmemeniz önerilir. Ziyaret edileceklerinin 
veya değiştirilmeden önce veya sonra ziyaret edilip edilmeyeceklerinin
garantisi yoktur.

*/

const phone = {
    maker : "Apple",
    color : "Grey",
    year : "2022"
}
for(const prop in phone){
    console.log(prop, phone[prop])
}
//marker Apple
//color Grey
//year 2022

// ----- Difference between for of and for in -----

let list= [3, 5, 6]

//for in returns a list of keys
for(let i in list){
    console.log(i) // "0", "1", "2",
}

//for of returns the values
for(let i of list){
    console.log(i) // "4", "5", "6"
}

//for in will return a list of keys whereas the for of will return a list of values of the numeric properties of the object being iterated