console.log(" -- Object Literal Upgrades -- ")

//Deconstructing variables into keys and values

//this is our initial sitution: 

const name   = "İris";
const surname = "Yetişkin";
const age = 15;
const nationality = "Italy";

//Now if we wanted to create an object literal this is what we would usually do:

const iris = {
    name : name,
    surname  : surname,
    age : age,
    nationality: nationality,
}

//In ES6 we can simplify like this:
const iris1 = {
    name,
    surname,
    age,
    nationality,
}
console.log(iris1)
//{name: 'İris', surname: 'Yetişkin', age: 15, nationality: 'Italy'}

//Bizim constkullandığımız özelliklerle aynı şekilde isimlendirildiği için yazımımızı azaltabiliriz.


// Add functions to our Objects

const deniz = {
    name : "Deniz",
    surname  :"Yetişkin",
    greet : function(){
        console.log(`Hello ${this.name} ${this.surname}`)
    }
}
deniz.greet();
//Hello Deniz Yetişkin

/* 
or

const person = {
  name: "Alberto",
  greet() {
    console.log("Hello");
  },
};

person.greet();
 Hello;

 No more function, it’s shorter and it behaves the same way.


Arrow fonksiyonun anonim olduğunu unutmayalım.

 this won't work, you need a key to access the function
const person1 = {
  () => console.log("Hello"),
};

const person2 = {
  greet: () => console.log("Hello"),
}
person2.greet()
// Hello
*/

//Bir nesnenin özelliklerini dinamik olarak tanımlayın

const gumus = "gumus"

//create empty object
const kisi = {
    [gumus] : "Alberto"
}
//update the object
console.log(kisi.gumus)
//Alberto