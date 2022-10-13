console.log("--- Classes --- ")
/*
Sınıflar nesne yönelimli (object oriented) programlamanın en önemli 
öğesidir. Sınıflar sayesinde programlar parçalara bölünür ve 
karmaşıklığı azalır. Yaratılan metodlar ve özellikler bir sınıfın 
içerisinde yer alır ve bir sınıf defalarca kullanılabilir. 
*/
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet= function(){
    console.log("Hello, my name is " + this.name)
}

const alberto = new Person("Alberto", 26);
const caroline = new Person("Caroline", 26)

alberto.greet();
//Hello, my name is Alberto
caroline.greet();
//Hello my name is Caroline

// PersonOluşturduğumuz tüm yeni örnekler için erişilebilir kılmak için prototipe yeni bir yöntem ekledik .
// Tamam, şimdi prototip kalıtım bilginizi tazelediğime göre, şimdi sınıflara bir göz atalım.

//Create Class || Sınıf oluşturmak
//bir sınıf oluşturmanın iki yolu vardır: 
// - class declaration
// - class expression

/*
- class declaration

class Person {

}
- class expression

const person = class Person {
}
*/

//Class declaration hoisted değildir. Class'ı çağırmadan önce oluşturmamız gerekmektedir.


class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello, my name is " + this.name + " I am " + this.age + " years old.");
    }
    farewell(){
        console.log("Goodbye my love");
    }
}

const iris = new Student("İris", 23);
iris.greet();
//Hello, my name is İris I am 23 years old.
iris.farewell();
//Goodbye my love

//Static Methods
//Şu anda yarattığımız iki yeni yönteme her yeni örnek tarafından erişilebilir greet()ve - peki ya diziler için olduğu gibi yalnızca kendisi tarafından erişilebilen bir yöntem istiyorsak?farewell()PersonclassArray.of()

class Animal {
    constructor(name, age){
        this.name = name;
        this.age  = age;
    }
    static info(){
        console.log("Woof Woof")
    }
}
const dogo = new Animal("Dogo", 2);
//dogo.info();
//dogo.info is not a function

Animal.info();
//Woof Woof

//static fonksiyon oluşturduğumuzda class ile ürettiğimiz bir değişkende info'ya ulaşamayız. Sadece sınıf'ın kendisi ulaşabilir.

//Set and Get
//Class'ımız içerisinde değerlerle oynamak için set ve get metodlarını kullanabiliriz.

class Worker{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.nickname= "";
    }
    set nicknames(value){
        this.nickname = value;
        console.log(this.nickname)
    }
    get nicknames(){
        console.log(`Your nick name is ${this.nickname}`)
    }
}

const vahap = new Worker("Vahap", 52);

//ilk olarak setter metodunu çağırırız
vahap.nicknames = "Abdulvahap";
//Abdulvahap

//getter metodunu çağırdığımızda
vahap.nicknames;
//Your nick name is Abdulvahap


//Extending our clas || Genişleyen class
//Önceden oluşturmuş olduğumuz bir class'tan bir şeyler almak veya kullanmak istiyorsak, class'ı miras alabiliriz.

//our inital class

class Insan{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`)
    }
}

//our new clas
class Child extends Insan{
    constructor(name, age, gender){
        super(name, age)
        this.gender = gender;
    }
}
//Neden kurduk super(name,age)? Sınıfımız Adult'den adı ve yaşı miras Personaldığından, onları yeniden bildirmemize gerek yoktur. Super, bizim için yeni bir Kişi yaratacaktır.
const deniz = new Child("Deniz", 1, "Female");
deniz.greet();
//Hello, my name is Deniz and i am 1 years old


