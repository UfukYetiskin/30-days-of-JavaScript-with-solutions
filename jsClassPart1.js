// JS CLASSES
/*
constructor function
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = fullName;
}

function fullName(){
    return this.name + " " + this.surname;
}

globaldeki prototype referans alır
Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
}

Person.prototype.friends = ["Elif", "Feyze", "Sena", "Hilal"];



const deniz = new Person("Deniz", "Yetişkin", 2);
const artemis = new Person("Artemis", "Yetişkin", 5);

console.log(deniz);
console.log(artemis);
console.log(deniz.fullName());
console.log(artemis.fullName());
Her ikisine de globalde tanımlanmış olan protype.friends dizisini alırlar
console.log(deniz.friends);//["Elif", "Feyze", "Sena", "Hilal"];
console.log(artemis.friends);//["Elif", "Feyze", "Sena", "Hilal"];

Referans olarak alındığı için globalden sadece artemisin dizisine eklememize rağmen globaldei dizi etkilendi.
artemis.friends.push("Derya");
console.log(artemis.friends); //["Elif", "Feyze", "Sena", "Hilal", "Derya"];
console.log(deniz.friends); //["Elif", "Feyze", "Sena", "Hilal","Derya"];
*/

//Class, özel bir fonksiyondur. 
// Class içerisinde oluşturulan functions protonun içerisine kaydolur
class Person1 {
    //buradaki constructor metodu nesne oluşumunda otomatik olarak class içerisinde çalışan metotdur
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Elif", "Feyze", "Sena", "Hilal"];
    }
    fullName1 = function(){
        return this.name + " " + this.surname;
    }
}

const deniz = new Person1("Deniz", "Yetişkin", 2);
const artemis = new Person1("Artemis", "Yetişkin", 5);

console.log(deniz);
console.log(artemis);
console.log(deniz.fullName1());
console.log(artemis.fullName1());

artemis.friends.push("Derya");
console.log(artemis.friends); //["Elif", "Feyze", "Sena", "Hilal","Derya"];
console.log(deniz.friends);//["Elif", "Feyze", "Sena", "Hilal"];

