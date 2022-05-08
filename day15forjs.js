// -------- 30 Days Of JavaScript: Classes

/*
JavaScript, nesne yönelimli bir programlama dilidir. JavScript'teki her şey, özellikleri ve 
yöntemleriyle bir nesnedir. Bir nesne oluşturmak için sınıf oluşturuyoruz. Bir Sınıf, bir 
nesne oluşturucu veya nesneler oluşturmak için bir "plan" gibidir. Bir nesne oluşturmak için 
bir sınıfı başlatıyoruz. Sınıf, nesnenin niteliklerini ve davranışını tanımlarken, nesne ise 
sınıfı temsil eder.

Bir sınıf oluşturduğumuzda, istediğimiz zaman ondan nesne oluşturabiliriz. Bir sınıftan nesne 
oluşturmaya sınıf somutlaştırma denir.

Nesne bölümünde, bir nesne literalinin nasıl oluşturulacağını gördük. Nesne değişmezi bir 
singleton'dur. Benzer bir nesne elde etmek istiyorsak, onu yazmalıyız. Ancak, sınıf birçok 
nesne oluşturmaya izin verir. Bu, kod miktarını ve kod tekrarını azaltmaya yardımcı olur.
*/

//Class Tanımlama
//JavaScript'te bir sınıf tanımlamak için class anahtar kelimesine , CamelCase'de bir sınıfın adına ve blok koduna (iki küme parantez) ihtiyacımız var. Kişi adında bir sınıf oluşturalım.

class Person {
    //code goes here
}

//Class Örneklemesi
// Örnekleme sınıfı, bir sınıftan bir nesne oluşturmak anlamına gelir. new anahtar kelimesine ihtiyacımız var ve sınıfın adını new kelimesinden sonra çağırırız. 

const person = new Person();
console.log(person);
// Person {}
//  [[Prototype]]: Object
//      constructor: class Person
//      [[Prototype]]: Objec

// Yeni bir sınıf nesnesi oluşturduk. Sınıfın henüz herhangi bir özelliği olmadığı için nesne de boştur.

//Class Constructor, sınıf oluşturucu
/*
Constructor (yapıcı), nesnemiz için bir plan oluşturmamıza izin veren yerleşik bir işlevdir. Constructor 
işlevi, yapıcı bir anahtar sözcükle bailar ve ardından bir parantez gelir. Parantez içinde nesnenin özelliklerini parametre olarak ilerletiyoruz. Bu anahtar sözcüğü, yapıcı parametrelerini sınıfa eklemek için kullanırız.
*/

class Person1 {
    constructor(firstName, lastName) {
        console.log(this);//Person1 {}
        this.firstName = firstName;
        this.alstName = lastName;
    }
}
const person1 = new Person1();
console.log(person1); //Person1 {firstName: undefined, alstName: undefined}
const person2 = new Person1('Ümmühan', 'Yetişkin');
console.log(person2); //Person1 {firstName: 'Ümmühan', alstName: 'Yetişkin'}

//En başta da belirttiğimiz gibi bir sınıf oluşturduğumuzda, sınıfı kullanarak birçok nesne oluşturabiliriz.
const ummuhan = new Person1('Ümmühan', 'Gümüş');
const deniz = new Person1('Deniz', 'Yetişkin');
const artemis = new Person1('Artemis', 'Yetişkin');

console.log(ummuhan); //Person1 {firstName: 'Ümmühan', alstName: 'Gümüş'}
console.log(deniz); // Person1 {firstName: 'Deniz', alstName: 'Yetişkin'}
console.log(artemis); // Person1 {firstName: 'Artemis', alstName: 'Yetişkin'}

//Default values with constructor
class Person2 {
    constructor(
        firstName = 'Ufuk',
        lastName = 'Yetişkin',
        age = 26,
        country = 'TR',
        city = 'Kocaeli'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }
}
const exPerson2 = new Person2();
const ex2Person2 = new Person2('Ümmühan', 'Gümüş', '23', 'TR', 'Aydın'); //

console.log(exPerson2); //Person2 {firstName: 'Ufuk', lastName: 'Yetişkin', age: 26, country: 'TR', city: 'Kocaeli'}
console.log(ex2Person2);// Person2 {firstName: 'Ümmühan', lastName: 'Gümüş', age: '23', country: 'TR', city: 'Aydın'}

//Class methods 

class Person3 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName;
    }
}
const exPerson3 = new Person3('Meral', 'Yetişkin', 32);
console.log(exPerson3); //Person3 {firstName: 'Meral', lastName: 'Yetişkin', age: 32}
console.log(exPerson3.getFullName()); // Meral Yetişkin

//Properties with initial value - Başlangıç değeri olan özellikler
class Person4 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const personEx4 = new Person4('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person1Ex4 = new Person4('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(personEx4.score)
console.log(person1Ex4.score)

console.log(personEx4.skills)
console.log(person1Ex4.skills)
// 0
// 0
// []
// []

//setter
//Setter yöntemi, belirli özelliklerin değerini değiştirmemize izin verir. Anahtar kelime kümesini ve ardından bir işlevi kullanarak bir ayarlayıcı yöntemi yazıyoruz.

class Person5 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill);
    }
    getPersonInfo(){
        let fullName = this.getFullName();
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length-1).join(', ') +
        ` and ${this.skills[this.skills.length -1]}` 
        let formattedSkills = skills ? ` He knows ${skills}` : ''

        let info =` ${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info  
    }
    //Static Method
    static favoriteSkill(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
        const index = Math.floor(Math.random() * skills.length);
        return skills[index];
    }
    static shadowDateTime()
    {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if(hours <10){
            hours = '0' + hours;
        }
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        let dateMonthYear = date + '.' + month + '.' + year;
        let time = hours + ':' + minutes;
        let fullTime = dateMonthYear  + ' ' + time;
        return fullTime
    }
        
}

const ex1Person5 = new Person5('Ümmühan', 'Gümüş', 23, 'TR', 'Aydın');
const ex2Person5 = new Person5('Ufuk', 'Yetişkin', 26, 'TR', 'Kocaeli');

ex1Person5.setScore = 2;
ex1Person5.setSkill ='SAP';
ex1Person5.setSkill ='HTML';
ex1Person5.setSkill = 'CTO';

ex2Person5.setScore = 1;
ex2Person5.setSkill = 'HTML';
ex2Person5.setSkill = 'CSS';
ex2Person5.setSkill = 'JS';


console.log(ex1Person5.score);//2
console.log(ex1Person5.skills); //(3) ['SAP', 'HTML', 'CTO']

console.log(ex2Person5.score); //1
console.log(ex2Person5.skills);//(3) ['HTML', 'CSS', 'JS']

console.log(ex1Person5.getPersonInfo()) //Ümmühan Gümüş is 23. He lives Aydın, TR.  He knows SAP, HTML and CTO
console.log(ex2Person5.getPersonInfo()) //Ufuk Yetişkin is 26. He lives Kocaeli, TR.  He knows HTML, CSS and JS

//Static Method
// Statik anahtar kelime, bir sınıf için statik bir yöntem tanımlar. Statik yöntemler, sınıfın örneklerinde çağrılmaz. Bunun yerine, sınıfın kendisine çağrılır. Bunlar genellikle nesneler oluşturma veya klonlama işlevleri gibi yardımcı işlevlerdir. Statik yönteme bir örnek Date.now() 'dur . Now yöntemi doğrudan sınıftan çağrılır .
console.log(Person5.favoriteSkill());//Node
console.log(Person5.shadowDateTime()); //27.3.2022 15:04

//Inheritance - Miras
//Kalıtım kullanarak ana sınıfın tüm özelliklerine ve yöntemlerine erişebiliriz. Bu, kod tekrarını azaltır. Hatırlarsanız, bir Person ebeveyn sınıfımız var ve ondan çocuklar yaratacağız. Çocuk sınıfımız öğrenci, öğretmen vb. olabilir.
/*
class ChildClassName extends Class {
    //code goes here
}
*/

//Person5 sınıfından öğrenci sınıfı türetelim
class Student extends Person5 {
    saySomething(){
        console.log('im a stupid');
    }
}
const saySome = new Student('Deniz', 'Yetişkin', 'ITA', 1, 'Florensa')
console.log(saySome); //Student {firstName: 'Deniz', lastName: 'Yetişkin', age: 'ITA', country: 1, city: 'Florensa', …}
console.log(saySome.saySomething())
console.log(saySome.getFullName()) //Deniz Yetişkin
console.log(saySome.getPersonInfo()) //Deniz Yetişkin is ITA. He lives Florensa, 1.

//Overriding methods- Geçersiz kılma yöntemleri
//Gördüğünüz gibi Person Class'taki tüm yöntemlere erişmeyi başardık ve Student alt sınıfında kullandık. 
//Ebeveyn yöntemlerini özelleştirebiliriz, bir alt sınıfa ek özellikler ekleyebiliriz. Özelleştirmek 
//istiyorsak, yöntemleri ve ekstra özellikler eklemek istiyorsak, alt sınıfa da kurucu işlevi kullanmamız 
//gerekir. Yapıcı işlevinin içinde, üst sınıftan tüm özelliklere erişmek için super() işlevini çağırırız. 
//Person sınıfının cinsiyeti yoktu ama şimdi alt sınıf olan Student için cinsiyet özelliği verelim. 
//Alt sınıfta aynı yöntem adı kullanılıyorsa, üst yöntem geçersiz kılınır.

class Student1 extends Person5 {
    constructor(firstName, lastNAme, age, country, city, gender){
        super(firstName, lastNAme, age, country, city)
        this.gender = gender
    }
    saySomething(){
        console.log('Im a supid');
    }
    getPersonInfo(){
        let fullName = this.getFullName();
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length -1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? ` He knows ${skills}` : ''
        let pronoun = this.gender == `Male` ?  `He` : 'She'
        
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const student1 = new Student1(
    'Ufuk',
    'Yetişkin',
    '26',
    'TR',
    'Diyarbakır',
    'Male'
)
const student2 = new Student1('Ümmühan', 'Gümüş', 23, 'Tr', 'Aydın', 'Female');

student1.setScore = 1;
student1.setSkill = 'HTML',
student1.setSkill = 'CSS',
student1.setSkill = 'JS'

student2.setScore =2;
student2.setSkill = 'CTO';
student2.setSkill= 'SAP';
student2.setSkill = 'Finance';

console.log(student1);
console.log(student2);

console.log(student1.saySomething());
console.log(student1.getFullName());
console.log(student1.getPersonInfo());

console.log(student2.saySomething());
console.log(student2.getFullName());
console.log(student2.getPersonInfo());

//Exercies Level 1:
//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age = 0, color, legs){
        this.name =name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getInfoAnimal(){
        let animalİnfo = `${this.name}'s age:${this.age}`;
        return animalİnfo;
    }
    get getAge(){
      return  this.age
    }
    set setAge(age){
        this.age += age;
    }
}
const animal1 = new Animal('Mia', '3', 'Grey and White', 20);

console.log(animal1); //Animal {name: 'Mia', age: '3', color: 'Grey and White', legs: 20}
console.log(animal1.getInfoAnimal()); //Animal {name: 'Mia', age: '3', color: 'Grey and White', legs: 20}

//Create a Dog and Cat child class from the Animal Class.
class Cats extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
}

class Dogs extends Animal {
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
}
//Override the method you create in Animal class
const dog = new Dogs('Tarçın',0,'Orange', 30);
dog.setAge = 2;
console.log(dog); //Dogs {name: 'Tarçın', age: 2, color: 'Orange', legs: 30}

const cat = new Cats('Mia',0, 'Grey', 20 );
cat.setAge = 1;
console.log(cat); //Cats {name: 'Mia', age: 1, color: 'Grey', legs: 20}

//Exercises: Level 3

 
class statics{
    constructor(
        ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
        ){
        this.ages = ages;
    }
    getCount(){
        return this.ages.length;
    }
    getSum(){
        let total = 0;
        for(let i = 0; i < this.ages.length; i++){
            total += this.ages[i];
        }
        return total;
    }
    getMinimum(){
        this.ages.sort((a,b) => a -b);
        return this.ages[0];
    }
    getMaximum(){
        this.ages.sort((a,b) => b - a )
        return this.ages[0];
    }
    getRange(){
        this.ages.sort((a,b) => b - a );
        return this.ages[0] - this.ages[this.ages.length -1];
    }
    getMean() {
        let total = 0;
        for(let i = 0; i < this.ages.length; i++){
            total += this.ages[i];
        }
        return Math.ceil(total / this.ages.length);
    }
    getMode(){
        let emptyArr = [];
        this.ages.filter((eleman) => {
            if(eleman != eleman){
                emptyArr.push(eleman);
            }
        })
        return `'mode: ${emptyArr.length}, 'count': ${emptyArr[0]}`; 
    }
    getVaryans(){
        let ortalama = 
        this.ages.map((eleman) => {
            return eleman - this.getMean();
        })
        
    }
}
const say = new statics();
console.log('Count:', say.getCount());
console.log('Sum: ', say.getSum());
console.log('Min: ', say.getMinimum()); 
console.log('Max: ',say.getMaximum());
console.log('Range: ', say.getRange());
console.log('Median: ',say.getMean());
console.log('Mode: ', say.getMode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', say.getVaryans());

