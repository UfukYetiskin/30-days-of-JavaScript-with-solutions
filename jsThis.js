// *********** THIS ************

//This, var olan kullanım alanına göre farklı farklı nesneleri referans verir
//This, bir fonk nasıl çalıştırıldığına bağlı olarak değişen söz konusu nesnedir.

//Obj.func() --> this obj

//this--> global object --> window (global)

console.log(this); //window
console.log(this.location); //location inside of window
console.log(this.location.href); //123.0.0.1.5500/index.html
console.log(window.location.href); //123.0.0.1.5500/index.html

console.log(this === window); //true

//Function Declartion

function func1() {
    this.name ="iris";
    console.log(this);
    console.log(this.location);
    console.log(this.location.href);
    console.log(this.age);
}
//Function Expression

const func2 = function() {
    this.age=23;
    console.log(this);
    console.log(this.location);
    console.log(this.location.href);
    console.log(this.name);
}

func1()     //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
            //Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/jsKarmasaIndex.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
            //127.0.0.1:5500/jsKarmasaIndex.html
            //Undefined



func2();    //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
            //Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/jsKarmasaIndex.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
            //127.0.0.1:5500/jsKarmasaIndex.html
            //İris

const name = "Ümmühan";
console.log(name); //Ümmühan
console.log(this.name);//İris, fonk içersinde global'e tanıttıgımız 

// function Person (name, surname, age) {
//     const obj = {};
//     obj.name = name;
//     obj.surname =surname;
//     obj.age =age;
//     obj.fullName = function(){
//         return obj.name + " " + obj.surname;
//     }
//     return obj;
// }


//This, burada objeyi referans alır. 
// function Person (name, surname, age) {

//     this.name = name;
//     this.surname =surname;
//     this.age =age;
//     this.fullName = function(){
//         return obj.name + " " + obj.surname;
//     }

// }
class Person {
    constructor(name, surname,age){
        this.name = name;
        this.surname =surname;
        this.age =age;
    }
    fullName = function(){
            return this.name + " " + this.surname; 
    }
}

const deniz = new Person("Deniz", "Gümüş Yetişkin", 1);
console.log(deniz);