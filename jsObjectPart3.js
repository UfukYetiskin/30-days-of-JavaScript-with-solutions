// ********* NEW OBJECTS SYNTAX ************



//1- Shorthand Properties

//let name = "Deniz", age = 1;

const myObj = {
    name,
    age
}
console.log(myObj.name);
console.log(myObj.age);

//2- Computed Property Names

let prop1 = 'name'

//bu özellik daha çok js kütüphanelerinde kullanılır.
let myObj1 = {
    [prop1]: "arin" //Prop değişkeninin property olarak atadık
}
console.log(myObj);

//3-  Short Method Syntax

const person = {
    name : "Ümmühan",
    surname: "Gümüş",
    age: 23,
    fullName : function(){
        return this.name + " " + this.surname
    }
}

const person1 = {
    name : "Ümmühan",
    surname: "Gümüş",
    age: 23,
    fullName (){
        return this.name + " " + this.surname
    }
}

console.log(person1.fullName());

// 4- Object Destructturing, bir nesnenin içerisindeki değerleri değişkenlere atamak için kullanılır

const person2 = {
    name : "Ümmühan",
    surname: "Gümüş",
    age: 23,
    fullName (){
        return this.name + " " + this.surname
    }
}

let {name: myVar1, age:myVar2} = person2;
//let {name, age} = person2 bir değier yolu da bu
console.log(myVar1);


const kitaplar = [
    { 
        title : "Sultanın Korsanları",
        author: "Emrah Sefa Gürcan",
        pageNum: 296
    },
    { 
        title : "Karamazov Kardeşler",
        author: "Fydor Mihayloviç Dostoyevski",
        pageNum: 200
    },
    {
        title : "Kaybedenler Kulübü",
        author: "Emrah Serbest",
        pageNum: 295
    }
]
for(const {title, author} of kitaplar)
{
    console.log(title + " : " + author);
}

// 5- Spread Operator in Object Literals
//Spread operators, var olan bir nesnenin özelliklerini kopyalamada ya da nesneleri birleştirmede kulanırız.

const person3 = {
    name : "Ümmühan",
    surname: "Gümüş",
    age: 23,
    fullName (){
        return this.name + " " + this.surname
    }
}

//nesnenin özelliklerini kopyalama
let person4 = {...person3}; 
console.log(person4);


myObj1 = {
    name: "Mete",
    age: "40"
}
myObj2 = {
    job: 'Radio',
    gender: "Male"
}
//Nesneleri birleştirme
const mete = {...myObj1, ...myObj2};
console.log(mete);


// 6- REST Operator in Object Literals,

const {name, surname, age} = person3;
console.log(name);

const {name1, ...rest} = person3;
console.log(name);
console.log(rest);

//7- Object Values - Object Entries

const person5 = {
    name : "Ümmühan",
    surname: "Gümüş",
    age: 23,
    fullName (){
        return this.name + " " + this.surname
    }
}
console.log(Object.keys(person)); //bize key değerlerini döndürür. --> name, surname, age, fullName
console.log(Object.values(person));//bize value değerlerini döndürür. --> Ümmühan, Gümüş, 23