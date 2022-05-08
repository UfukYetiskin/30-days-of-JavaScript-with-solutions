// ******* Objects *******
// Javascript'te nesne, name ve valuedan oluşan bir veri tipidir.

//Bir nesne propertylerin koleksiyonundan oluşur.
//Özelliklerin bir arada olmasını istediğimiz için özellikleri nesne içersinde birleşik tutarız
//property => name, surname -- method=> Bir nesne ile ilişkili funksniyonlara
const person = {
    name : " Artemis", 
    surname :"Yetişkin",
    age: 1,
    language :["Turkish", "Kurdish","English"],
    fullName: function(){ 
        return this.name + " " + this.surname //this oluşturulan fonksiyonun kendisine ref eder.
    },
    address:{
        city: "İzmir",
        district:"Bornova"
    }
}

// Object Literal

//literal, nesne oluştururken propertylerin değerlerinin ne olmasını belirtiriz
const person1 = {
    name :"Ümmühan",
    surname: "Gümüş Yetişkin",
    age:23,
    fullName: function(){ 
        return this.name + " " + this.surname //this oluşturulan fonksiyonun kendisine ref eder.
    }
}
console.log(person1);


//. dot Notation

console.log(person1.name);
console.log(person1.age);
console.log(person1.fullName());


person1.job = "Manager";
console.log(person1.job);

//bracket Notation

console.log(person1['name']);
console.log(person1['job']);
console.log(person1['fullName']());
console.log(person1['na' + 'me']); //name çıktı olduğu için ümmühan çıtksı verir



const person2 = {
    name : "Ufuk",
    surname : "Yetişkin",
    age:26,
    fullName: function(){ 
        return this.name + " " + this.surname //this oluşturulan fonksiyonun kendisine ref eder.
    }
}
//Bir nesne içerisine başka bir nesne ekleme
person2.address = {
    city: "İstanbul",
};
person2.address.district = "Karaköy"
console.log(person2)


//Constructor Funcsiyon kullarak JavaScript nesnesi oluşturmak

//CONSTRUCTOR ---> Yapıcı Func

//Object literal ile her bir kişi ya da kişiler için bir nesne oluştururuz. bu bir süre sonra sıkıntı çıkarabilir
//Bir tane Constructor Fonksiyon oluşturup bu fonksiyonu nesneler için şablon olarak kullanabiliriz.

function Person(name, surname, age){ //Constructor Fonksyion oluşturuldu. İçinde property olarak kullanacağımız parametreleri yazdık
    const obj = {};//boş bir nesne oluşturduk
    obj.name = name; //parametreleri obj nesnesine property olarak atıyoruz
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function(){ 
        return this.name + " " + this.surname 
    }
    return obj; //nesneyi döndürürz
}
// İçeride boş bir nesne oluşturmadan da oluşturulabilir constructor func
function Human(name, surname, age){ 

    //console.log(this) this, Person nesnesini boş olarak döndürecektir
    this.name = name;  //this.name property'e dönüşür. name ise değere dönüşür
    this.surname = surname;
    this.age = age;
    this.fullName = function(){ 
        return this.name + " " + this.surname 
    }
    //console.log(this) this, bize en son türetilmiş olan nesneyi döndürecektir.
}
const person3 = new Person("Deniz", "Yetişkin", 1); //constructor Fonksiyonu ile oluşturduğumuz boş nesneyi kullnarak burada person3 nesnesini oluştururz
const person4 = new Person("Mete", "Yetişkin", 3);
console.log(person3);
console.log(person4);

const person5 = new Human("Helen", "Akbıyık", 1);
console.log(person5); 

//Object Constructor

const person6 = new Object();
person6.name = "Ümmühan";
person6.surname = "Gümüş Yetişkin";
person6.age = 23;
person6.fullName = function (){
    return this.name + " " + this.surname 
}

//Object.create() ile nesne oluşturmak

const kisi = {
    name: "Deniz",
    surname:"Gümüş Yetişkin",
    age: 2,
    fullName : function (){
        return this.name + " " + this.surname
    }
}

const taha = Object.create(kisi); //bu metod ile kisi nesnesine ait propertyleri kullnarak yeni bir obje oluşturduk
taha.name= "Taha"; //Aralarında bir inheritance(kalıtım) var.
taha.surname="Ortak";
taha.age=27;

console.log(taha);
console.log(taha.fullName());