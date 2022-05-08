//Kapsam and Objects

//Scople (kapsam), değişkenlerin kapsamları şunlar olabilir; Window, Global and Local

//Window Scope, eğer bir değişken var, let veya const ile tanımlanmamış ise kapsayıcısı window olacaktır.

userName = 'Ümmühan' //Window scope

//Global Scope, global olarak tanımlanmış değişkenler aynı dosyadan her yerden erişebilir. Bu global scope fonksyion içinde ya da dosya içinde olarak farklılık gösterebilir.

let a = 'JavaScript' //Global scope, dosya içinden her yerden ulaşabiliriz.

let name = 'Ufuk'
let surName= 'Yetişkin'
function lastLearnScope(){
    console.log(name, surName)
    if(true){
        let name = 'Deniz'
        let surName = 'Yetişkin'  //buras local scope'tur block olduğu için globalde let ile yeniden tanımlanmıştır. Eğer let ile tanımlanmamış olsaydı globalden veriyi alacaktı.
        console.log(name, surName)
    }
    console.log(name, surName);
}
lastLearnScope();
//Javascript'te süslü parantez içlerine (for, while, if gibi) block scope deriz. Bunlara erişemeyiz block dışında


//Local Scope
let name1 = 'Ufuk'
let surName1= 'Yetişkin'
function lastLearnScope(){
    console.log(name, surName)
    if(true){
        let name = 'Deniz'
        let surName = 'Yetişkin'  //if değerinin içi local scope'tur
        console.log(name, surName)
    }
    console.log(name, surName);
}
lastLearnScope();

//              Objects
 const person = {}
 
 const user = {
    userName:'Artemis',
    userSurName:'Yetişkin',
    userHeight:'170',
    userWeight:'52',
    userGender:'Famale',
    isMarried: false,
    skills: ['Leader','Talktive','Friendship'],
    parents: {
        isFather:'Ufuk',
        isMother:'Ümmühan'
    },
    'phone number': 12376123123,
    getFullName: function() { //Object metodu olarak adlandırırız bu fonksiyonu
        return `${this.userName} ${this.userSurName}` //this kelimesi objenin kendisini referans eder. This'i  objenin içindeki propertylere erişmek için kullanırız. Arrow func object metodu oalrak kullanamyız. Çünkü arrow fonk içinde this objeyi referans almak yerine windowu referans alır
    },
    getSkills: () => `${user.skills}` //this kullanamadığımız için arrow fonksiyonlarında böyle kullanırız
}
console.log(user);
console.log(user.skills);
console.log(user.skills[1]);
console.log(user.parents.isMother);
console.log(user['phone number']);
console.log(user.getFullName());

let keyName = 'skills'
console.log(user[keyName])

//Setting new key for an object, objemiz tanımlandıktan sonra içindeki elemanları değiştirebiliriz

user.userHeight = 165; //objenin elemanını bu şekilde değiştrebiliriz
console.log(user.userHeight);

user.skills.push('Exciting') //Objenin içindeki bir diziye yeni bir eleman ekledik
console.log(user.skills);

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction'
});

user.country = 'Finland'
user.title = 'teacher'

user.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  // let skills = formatter.forma(this.skills) bu daha kolay yolu skill dizisin yazdırmak için
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(user)
console.log(user.getPersonInfo())

//Object Methods

let newUser = user // bu şekilde sadece user objesini referans olarak almış oluruz kopyalama olmaz. 

let newUser1 = Object.assign({}, user) //bu şekilde user objemizi kopyalamış oluruz

//let newUser1 = {...user} ile de kopyalama işlemi yapılabilir.


console.log(Object.keys(user)); // bize user objesinin keylerini döndürür.
console.log(Object.values(user)); //user objesinin değerlerini döndürür
console.log(Object.entries(user));//Object.entries() metodu ise bizlere hem key'i hem de value'yu bir array içerisinde döner ve object içerisinde kaç tane property varsa her birisi için ayrı array içerisinde ilgili değerleri sunar.

for(let [key, val] of Object.entries(user)){
    console.log(key, val);
}
for(let [key, val] of Object.entries(user)){
    console.log(`Key = ${key} - Value = ${val}`);
}

console.log(user.hasOwnProperty('country')) //Objemizde country diye bir property var mı diye kontrol eder.

//Object.freeze(user) ile artık objemize herhangi bir şey ekleme veya çıkarma yapılamaz.
//Object.seal(user) ile objemize ekleme veya silme yapamazken propertylerde değişiklik yapılabilir.


//Execerises 1


//Create an empty object called dog
const dog = {};

//Print the the dog object on the console

console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.dogName = 'Wolf';
dog.dogFoots = 30;
dog.dogAge = 3;
dog.dogColor = 'grey'
dog.dogBark = 'Woof Woof'

console.log(dog)

//Get name, legs, color, age and bark value from the dog object

console.log(dog.dogName, dog.dogAge, dog.dogBark, dog.dogColor, dog.dogFoots)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
// Find the person who has many skills in the users object.

for(let item in users ){ 
    console.log(users[item].skills);//Bu şekilde objenin içindeki objelerin skill propertylerini yazıdırırz.
}
let count = 0;
let point = 0;
for(let item in users ){ 
    count = Object.keys(users[item].skills).length // Burada users objesi içindeki oluşturulmuş objelerinden skill property'sinin sayısal verisini alırız.
    if(count>4){
        console.log(count);
    }
}
let max =0;
for(let score in users ){ 
    point = users[score].points //users objesi içindeki properylerin points propertysini yazdırır.
    console.log(point);
}





