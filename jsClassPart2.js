//OBJE + (name, surname,...) => Person
/*Classlar nesnelerin şablonudur. Örneğin bir kütüphane programı oluştururken bir 
sayfada bütün kodu yazmak belli süre sonra sorunlar yaratır. Class kullnarak, 
kitapları nesne, öğrencileri başka bir nesne ve çalışanları da nesne olarak 
oluşturursak daha düzgün bir çıktı elde ederiz
*/
class Person {
    constructor(name,surname, age){
        this.name = name;
        this.surname =surname;
        this.age= age;
    }
    fullName(){ //fullName metodu proto nesnesinin içerisinde bulunur
        return this.name + " " + this.surname
    }

    static showName = "İris";
}

console.log(typeof Person);
const deniz = new Person("Deniz", "Gümüş Yetişkin", 2); //deniz objesine, Person sınıfından türetilmiş objedir ya da Person sınıfından üretilmiş instance'tır.
console.log(deniz);

const artemis = new Person("Artemis", "Gümüş Yetişkin", 3); //Person {name: 'Artemis', surname: 'Gümüş Yetişkin', age: 2}
console.log(artemis instanceof Person);//true

console.log(deniz.showName);//Undefined
console.log(Person.showName); //İris

//Inheritance (Kalıtım)
//Person => Engineers
//Engineer sınıfının proto'su Person sınıfıdır.
// Engineer sınıfı Person sınıfına ait bütün özelliklere sahip olacaktır.
class Engineer extends Person {};  //Engineer --> Subclass (Child), Person-->Superclass (Parent)

const iris = new Engineer("İris", "Gümüş Yetişkin", 1); //Engineer {name: 'İris', surname: 'Gümüş Yetişkin', age: 1}
console.log(iris);

console.log(artemis instanceof Person);//True
console.log(iris instanceof Person);//True
console.log(iris instanceof Engineer);//True
console.log(artemis instanceof Engineer);//False

//Person + faculty, getScore()() => Student
class Student extends Person{
    constructor(name,surname,age, faculty){ //Burada kendi constructorını oluşturduk
        super(name,surname,age); //Burada name gibi bilgileri Person sınıfından alır
        this.faculty = faculty;
    }
    getScore() {
        console.log("Yüksek puan al");
    }
}

const helen = new Student("Helen", "Akbıyık", 1 , "Management");
console.log(helen);
console.log(helen.getScore());


class extendsArray extends Array {
    shuffle() {
        this.sort(() => Math.random()-0.50);
    }
}

let myArr = new extendsArray(1,2,3,4,5);

console.log(myArr instanceof extendsArray);
console.log(myArr instanceof Array);
console.log(myArr);
myArr.shuffle();
console.log(myArr);

 