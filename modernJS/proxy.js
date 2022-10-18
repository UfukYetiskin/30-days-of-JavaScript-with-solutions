console.log("--- Proxy --- ")

/* 
MDN'den:
Proxy nesnesi , temel işlemler (örn. özellik arama, atama, numaralandırma, 
işlev çağırma, vb.) için özel davranışı tanımlamak için  kullanılır.

roxy, MDN’de temel işlemler için özel davranışlar tanımlamak için kullanılır şeklinde 
tanımlanmıştır. Eğer bu tanımı açacak olursak; örneğin dışarıdan gelen bir nesnenin 
hangi propertylere sahip olacağını, bu propertylerin değerlerini veya tiplerini 
bilemeyiz. Proxy tam olarak bu noktada bize bu işlemlerde yardım sağlıyor.

Proxy ile ilgili 3 temel kavram şunlardır:

> handler: içerisinde trapleri bulunduran bir nesne
> traps : nesnenin propertylerine veya value’larına ulaşmamızı sağlayan metotlar
> target: üzerinde proxy ile işlemler yapacağım nesne (fonksiyon veya array de olabilir.)


syntax

const x = new Proxy(target, handler)
*/

//our object
const dog = {breed : "German Shephard", age: 5};

//our Proxy
const dogProxy = new Proxy(dog, {
    get(target, breed){
        return target[breed].toUpperCase();
    },
    set(target, breed, value){
        console.log("Changing breed to ...");
        target[breed] = value;
    }
});
console.log(dogProxy);
//Proxy {breed: 'German Shephard', age: 5}
console.log(dogProxy.breed);
//GERMAN SHEPHARD
console.log(dogProxy.breed = "Labrador");
// Changing breed to ...
// Labrador
console.log(dogProxy.breed);
// "LABRADOR"

//Get metodunu çağırdığımızda normal akışın içine giriyoruz ve cinsin değerini büyük harfe çeviriyoruz.
//Yeni bir değer ayarlarken tekrar devreye giriyor ve değeri ayarlamadan önce kısa bir mesaj kaydediyoruz.

const validateAge = {
    set : function(object, property, value){
        if(property === "age"){
            if(value < 18){
                throw new Error("You are too young!")
            }else{
                //Default behaviour
                object[property] = value;
                return true;
            }
        }
    }
}
const user = new Proxy({}, validateAge)

// user.age= 17
// Error: You are too young!

console.log(user.age = 20);
//20


const cat = {
    _name : "Scotish",
    _age : 2,

    get name(){
        console.log(this._name)
    },
    get age(){
        console.log(this._age);
    },
    set name(value){
        this._name = value;
        console.log(this._name)
    },
    set age(value){
        this._age = value;
        console.log(this._age)
    }
}
cat.name;
//Scotish
cat.age;
//2
cat.name = "British";
//British
cat.age = 3;
//3;
cat.breed;
//undefined

const lion = {
    name : "Leo",
    age : 9,
}

const handler = {
    get : (target, property)=> {
        property in target ? console.log(target[property]) : console.log('property not found')
    },
    set : (target, property, value) => {
        target[property] = value;
        console.log(target[property])
    }
}

const lionProxy = new Proxy(lion, handler)

lionProxy.name;
//Leo
lionProxy.age;
//9
lionProxy.breed;
//property not found!
lionProxy.name = "King Max";
//King Max
lionProxy.age = 2;
//2
