//---------30 Days Of JavaScript: JSON



/* JSON, JavaScript Nesne Gösterimi anlamına gelir. JSON sözdizimi, JavaScript nesne gösterimi sözdiziminden türetilmiştir, ancak
JSON biçimi yalnızca metin veya dizedir. JSON, depolama ve taşıma için hafif bir veri formatıdır. JSON, çoğunlukla bir sunucudan
 bir istemciye veri gönderildiğinde kullanılır. JSON, XML'e göre kullanımı daha kolay bir alternatiftir.

normal bir nesneden çok farklı değildir. O zaman, fark nedir? Aradaki fark, bir JSON nesnesinin anahtarının çift tırnaklı olması 
veya bir dize olması gerektiğidir. JavaScript Object ve JSON, JSON'u Object ve Object'i JSON olarak değiştirebileceğimize çok benzer.

Kıvrımlı parantez içinde bir değer dizisine sahip "users"  anahtarı vardır. Dizinin içinde farklı nesnelerimiz var ve her nesnenin anahtarı var, 
her anahtarın çift tırnak işareti olması gerekiyor. Örneğin, sadece firstName yerine "firstNaMe" kullanıyoruz, ancak nesnede çift tırnak işaretleri 
olmadan anahtarları kullanıyoruz. Bu, bir nesne ile bir JSON arasındaki en büyük farktır.


---- Converting JSON to JS Object
Çoğunlukla JSON verilerini HTTP yanıtından veya bir dosyadan alırız, ancak JSON'u bir dize olarak saklayabiliriz ve gösterim amacıyla Object olarak 
değiştirebiliriz. JavaScript'te JSON anahtar sözcüğü , parse() ve stringify() yöntemlerine sahiptir. JSON'u bir nesneye dönüştürmek istediğimizde, 
JSON.parse() kullanarak JSON'u ayrıştırırız . Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız 




JSON.stringify bir JavaScript nesnesini JSON metnine dönüştürür ve bu JSON metnini bir dizede saklar.

JSON.parse, bir JSON metni dizesini bir JavaScript nesnesine dönüştürür.
*/

//JSON.parse()

//JSON.parse(json[reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {
})
*/

const userText = `{
    "users" : [
        {
            "firstName" : "Asabaneh",
            "lastName" : "Yetayeg",
            "age" : 26,
            "email" : "asab@asb.com"
        },
        {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
        },
        {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
        }
    ]
}`
const userObj = JSON.parse(userText, undefined, 4);
console.log(userObj);
// {users: Array(3)}
// users: Array(3)
// 0: {firstName: 'Asabaneh', lastName: 'Yetayeg', age: 26, email: 'asab@asb.com'}
// 1: {firstName: 'Alex', lastName: 'James', age: 25, email: 'alex@alex.com'}
// 2: {firstName: 'Lidiya', lastName: 'Tekle', age: 28, email: 'lidiya@lidiya.com'}
// length: 3
// [[Prototype]]: Array(0)
// [[Prototype]]: Object


//Using a reviver function with JSON.parse();
//Reviver fonksiyonunu formatlayıcı olarak kullanmak için isim ve soyisim değerini formatlamak istediğimiz tuşları koyuyoruz. Diyelim ki, JSON verilerinin ad ve soyadını biçimlendirmekle ilgileniyoruz.
const usersObj = JSON.parse(userText, (key, value) => {
    let newValue = typeof value == 'string' && key != 'email' ? value.toLocaleUpperCase() : value;
    return newValue
})
console.log(usersObj);


//Converting Object to JSON
//Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız . stringify yöntemi, bir gerekli parametre ve iki isteğe
//bağlı parametre alır. Değiştirici filtre olarak kullanılır ve boşluk bir girintidir. Eğer nesnedeki anahtarlardan herhangi birini
//filtrelemek istemiyorsak, tanımsız olarak geçebiliriz.

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
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
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
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt)
/*
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
*/

//Using a Filter Array with Json.stringify();

const user = {
    firstName : 'Artemis',
    lastName : 'Yetişkin Gümüş',
    country : 'FR',
    city : 'Paris',
    email : 'artemisyetiskin@hotmail.com',
    skills : ['Leader', 'Friendship', 'Talktive', 'Creative'],
    age : 16,
    isLoggedIn : false,
    points : 100
}
const artemis = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(artemis);
// {
//     "firstName": "Artemis",
//     "lastName": "Yetişkin Gümüş",
//     "country": "FR",
//     "city": "Paris",
//     "age": 16
// }


//Exercises Level: ! 

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const persons = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

//Change skills array to JSON using JSON.stringify()

const changeSkills = JSON.stringify(skills, undefined, 4);
console.log(changeSkills);
// {
//     "firstName": "Artemis",
//     "lastName": "Yetişkin Gümüş",
//     "country": "FR",
//     "city": "Paris",
// } 

//Stringify the age variable

const changeAge = JSON.stringify(age, undefined, 4);
console.log(changeAge);
//250


//Stringify the isMarried variable
const changeMarried = JSON.stringify(isMarried, undefined, 4);
console.log(changeMarried);
//true

//Stringify the student object

const changeStudent = JSON.stringify(student, undefined, 4)
console.log(changeStudent);
// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "age": 250,
//     "isMarried": true,
//     "skills": [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "Node",
//         "Python"
//     ]
// }


//Stringify the students object with only firstName, lastName and skills properties

const studenttoStringfy = JSON.stringify(student,['firstName', 'lastName', 'skills'], 4)
console.log(studenttoStringfy);
// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "skills": [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "Node",
//         "Python"
//     ]
// }


//Parse the txt JSON to object.

const parsePerson = JSON.parse(persons);
console.log(parsePerson);
// {Alex: {…}, Asab: {…}, Brook: {…}, Daniel: {…}, John: {…}, …}
// Alex: {email: 'alex@alex.com', skills: Array(3), age: 20, isLoggedIn: false, points: 30}
// Asab: {email: 'asab@asab.com', skills: Array(8), age: 25, isLoggedIn: false, points: 50}
// Brook: {email: 'daniel@daniel.com', skills: Array(5), age: 30, isLoggedIn: true, points: 50}
// Daniel: {email: 'daniel@alex.com', skills: Array(4), age: 20, isLoggedIn: false, points: 40}
// John: {email: 'john@john.com', skills: Array(6), age: 20, isLoggedIn: true, points: 50}
// Paul: {email: 'paul@paul.com', skills: Array(7), age: 20, isLoggedIn: false, points: 40}
// Thomas: {email: 'thomas@thomas.com', skills: Array(4), age: 20, isLoggedIn: false, points: 40}
// [[Prototype]]: Object

//Find the user who has many skills from the variable stored in txt.

const skillsParse = JSON.parse(persons, (key, value) => {
    let onlySkills = typeof value == 'string' && key  == 'skills' ? value.toLocaleUpperCase() : value;
    return onlySkills;
});
console.log(skillsParse);


fetch('day16forjs.json')
.then(response => response.json())
.then(data => console.log(data));

// {users: Array(4)}
// users: Array(4)
// 0: {firstName: 'Ümmühan', lastName: 'Yetişkin', age: 23, email: 'ummuhangumus58@gmail.com'}
// 1: {firstName: 'Ufuk', lastName: 'Yetişkin', age: 26, email: 'ufukyetiskin@hotmail.com'}
// 2: {firstName: 'Deniz', lastName: 'Yetişkin', age: 1, email: 'denizyetiskin@gmail.com'}
// 3: {Alex: {…}, Asab: {…}, Brook: {…}, Daniel: {…}, John: {…}, …}
// length: 4
// [[Prototype]]: Array(0)
// [[Prototype]]: Object

fetch('day16forjs.json')
.then((response) => response.json())
.then(data =>  console.log(data.users.map((eleman) => eleman)));
// (4) [{…}, {…}, {…}, {…}]
// 0: {firstName: 'Ümmühan', lastName: 'Yetişkin', age: 23, email: 'ummuhangumus58@gmail.com'}
// 1: {firstName: 'Ufuk', lastName: 'Yetişkin', age: 26, email: 'ufukyetiskin@hotmail.com'}
// 2: {firstName: 'Deniz', lastName: 'Yetişkin', age: 1, email: 'denizyetiskin@gmail.com'}
// 3: {Alex: {…}, Asab: {…}, Brook: {…}, Daniel: {…}, John: {…}, …}
// length: 4
// [[Prototype]]: Array(0)