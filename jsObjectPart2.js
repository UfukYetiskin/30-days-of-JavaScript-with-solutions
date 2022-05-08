//OBJECTS - PART II

/*JavaScript'te tüm nesneler başka bir nesneden türetilerek oluşturulur. Yeni bir nesne oluşturduğumuz 
zaman kendinden daha önce oluşturulmuş nesneden oluşturulur. Bir önceki nesneye de üretilen nesnenin 
Prototype'ı denir.
*/

const person = {
    name : "Ümmühan",
    surname : "Gümüş",
    age : 23,
    fullName: function(){
        return this.new + " " + this.surname
    }
}
console.log(person)
console.log(person.name)
console.log(person.fullName());
//console.log(person.job);
console.log(person.toString());
console.log(person.hasOwnProperty("name")); //hasownproperty metodu ile person objesinin name property'sine sahip olup olmadığını sorgular


//Object + name, surname, age, fullName() ----> person 
//person nesnesinin prototype'ı Object'tir. Bu sayede prototeype'ın sahip olduğu metodları kullanabilir. Örn. toString()

const myObj = {}; //boş nesne oluşturuldu
console.log(myObj);
console.log(myObj.toString());


//Constructor Funk
function Person(name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name +  " " + this.surname;
    }
}

const deniz = new Person("Deniz", "Yetişkin", "1");
console.log(deniz);

// OBJECT + name, surname, age, fullName() ----> Person -----> deniz
//Deniz'in prototype'ı Person, Person'ın prototype'ı Object

console.log(deniz.toString());
console.log(deniz.hasOwnProperty("age"));
console.log(deniz.__proto__); //denizin prototype'ını verir

const artemis = new Person("Artemis", "Yetişkin" , 3);
console.log(artemis);
artemis.job="Doktor";
console.log(artemis);

// OBJECT + name, surname, age, fullName() ----> Person + job -----> artemis

console.log(artemis.toString()); // [object Object]

artemis.toString = function() {
    return "Artemis Gümüş Yetişkin";
}
console.log(artemis.toString()); // Artemis Gümüş Yetişkin


//Person objesinin fullname ve surname prototype'ına default değişken tanımladığımız için artık constructor'da bunları belirtmemize gerek yoks
Person.prototype.fullName = function() {
    return this.name +  " " + this.surname;
}

Person.prototype.surname = "Gümüş Yetişkin";

console.log(deniz);
console.log(artemis);

//Inheritance,  bir nesnenin özelliğinin farklı nesneler tarafından kullanılmasıdır.

const person1 = {
    name : "XXXXXX",
    surname : "XXXXXX",
    age : 0,
    fullName: function(){
        return this.new + " " + this.surname
    }
}

const jon = Object.create(person1);
console.log(jon); // {} çıktı veir
console.log(jon.name); //XXXXXX çıktısı verir.

jon.name = "Jon";
console.log(jon);//Jon çıktısı verir

jon.age =29;
console.log(jon);//Jon 29 çıktısı verir

console.log("surname" in jon); //surname property'si arin nesnesinde var mı diye bakılır
