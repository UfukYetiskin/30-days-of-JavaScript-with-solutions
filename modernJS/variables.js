console.log("---- Variables ------ ")


console.log("-- Var -- ")
// --  Var

//var ile tanımlanan değişkenler funksiyon scope'tur, bu onları bir for döngüsü içinde bildirirsek(bu birblok kapsamıdır), for döngüsü dışında bile kullanılabilir olacaktır.

for(var i = 0; i<10; i++) {
    var leak = "I am available outside of the loop"
}
console.log(leak)
//I am available outside of the loop



function myVarFunc(){
    var functionScoped = "I am available inside this function";
    console.log(functionScoped) 
}
myVarFunc()
//I am available inside this function

// console.log(functionScoped) 
// ReferenceError: functionScoped is not defined 

//Özet
//ilk örnekte var blok kapsamında var ile tanımladığımız değişkeni dışarıdan çağırabiliyor iken fonksiyon içerisinde tanımlanmış değişken dışarıdan çağırılamıyor.

console.log("-- Let -- ")
// --  Let

//let anahtar sözcüğüyle tanımlanmış değişlenler blok kapsamlıdır. Yalnızca tanımlandıkları bloğun içerisinde ve alt bloklarında çağrılabilir ve kullanılabilir.

let x  = "global";

if(x === "global"){
    let x = "block-scope"
    console.log(x)//block-scope
}
console.log(x)//global

var y = "global"

if(y === "global"){
    var y = "block-scoped"
    console.log(y)//block-scoped
}
console.log(y)//block-scoped

//Özet
//let block scope içinde tanımlana değişkene yeni bir değer atadığımızda dış scope kapsamında değerini değiştirmedi.

console.log("-- Const -- ")
// --  Const 

//let gibi const da block scope'tur. Ancak değerlerinin yeniden atama yoluyla değişemeyeceği ve yeniden bildirilemeyeceği özelliği ile farklılık gösterir.

const constant = "I am a constant"
// constant = "I cant be reassigned" Uncaught TypeError: Assignment to constant variable.

//Özet
//Bu durumda, tüm değişkeni yeniden atamıyoruz, ancak özelliklerden sadece birini atamış oluyoruz.

//Not: const ile tanımlanmış bir nesneye yeni bir özellik tanımalyabiliriz. 

const person = {
    name : "Ufuk",
    surName : "Yetişkin"
}

person.age = 25;
person.name = "Ümmühan"

console.log(person)
// age: 25
// name: "Ümmühan"
// surName: "Yetişkin"


//HOISTED

/* 

console.log(i);
var i = 'I am a variable';

expected output: undefined

console.log(j);
let j = 'I am a let';

expected output: ReferenceError: can't access lexical declaration `j' before initialization



var tanımlanmadan önce erişilebilir, ancak değerlerine erişemiyoruz. let ve const tanımlanmadan önce erişilemez.

Diğer kaynaklarda okuyabileceğinize rağmen, hem var( letve ) hem de (ve ) kaldırmaconst işlemine tabidir , yani herhangi bir kod yürütülmeden önce işlenirler ve kapsamlarının en üstüne çıkarlar (ister global ister blok olsun).

varTemel farklılıklar , tanımlanmadan önce hala erişilebilir olmaları gerçeğinde yatmaktadır . Bu değerin olmasına neden olur undefined. Öte yandan, değişkenlerin bildirilinceye kadar geçici bir ölü bölgedelet oturmasına izin verir . Ve bu, başlatmadan önce erişildiğinde bir hataya neden olur, bu da sonuç olarak bir koda sahip olmak yerine kodda hata ayıklamayı kolaylaştırır .undefined

*/
console.log("-------------------------------")
console.log("When to use var, let and const | var, let ve const ne zaman kullanılır")

console.log("Mathias Bynes'a göre: ")
console.log("const'i varsayılan olarak kullan")
console.log("let'i yalnızca yeniden ciltleme gerekiyorsa kullanın")
console.log("var'ı ES6'da asla kullanma")

console.log("-------------------------------")

console.log("Kyle Simpson'a göre")
console.log("const'i yeniden atama veya düzenleme olmasını istemiyorsak kullanın")
console.log("let'i daha küçük kapsamlarda yerelleştirmiş değişkenler için kullanın")
console.log("var'ı birçok kapsamda paylaşılan üst düzey değişkenler için kullanın")
/* 



*/
