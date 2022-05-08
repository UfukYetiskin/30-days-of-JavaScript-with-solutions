//Destructuring bir obje veya bir array icinden her bir elemanin alinip bir degisken icine kaydedilmesi.
// -------------Destructuring and Spread-----------



// --------- Destructuring

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree); // 1 2 3

//dizi içerisindeki bir elemanı atlamak istersek ,'ler arası boşluk bırakırız.
let [numberOne, , numberThree] = numbers;
console.log(numberOne, numberThree); //1, 3

const fullStack = [
    [
        'HTML', 'CSS', 'JS', 'React'
    ],
    ['Node.js', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);//(4) ['HTML', 'CSS', 'JS', 'React'] (3) ['Node.js', 'Express', 'MongoDB']


//Dizinin değerinin o dizin için tanımsız olması durumunda varsayılan değeri kullanabiliriz:
const names = [undefined, 'Brook', 'David'];
let [firstPerson = 'Asabeneh', secondPerson, thirdPerson, fourthPerson = 'John'] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); // Asabeneh Brook David John

//Dizideki bütün elemanlara değişken atayamayız. İlk birkaç eleman değişken atadıktan sonra geri kalan elemanları spread operatörü(...) ile dizi olarak alabiliriz.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) //1 2 3
console.log(rest);// (6) [4, 5, 6, 7, 8, 9]

//Döngü içerisinde Destructing

const countries = [
    ['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']
]
for (const [country, city] of countries) {
    console.log(country, city);
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo

// const fullStack = [
//     [
//         'HTML', 'CSS', 'JS','React'
//     ],
//     ['Node.js', 'Express', 'MongoDB']
// ]

for (const [lang1, lang2, lang3] of fullStack) {
    console.log(lang1, lang2, lang3);
}

// HTML CSS JS
// Node.js Express MongoDB

//Destructuring Object
//Bir objeyi parçalarken property'nin ismi değişkenin ismi ile aynı olmalıdır.
//Destructuring ile objeyi ayırırken değişkenleri tekrardan adlandırma
const rectangle = {
    width: 20,
    height: 10,
    area: 200 // area propertysi için a değişkenine atadık
}
let { width, height, area: a, perimeter = 60 } = rectangle;
console.log(width, height, a, perimeter); //20 10 200 undefined, periteter'a değer verdik ayırırken. Eğer obje içerisinde değer almış ise ayırırken değer verirsek obje içerisinde tanımlanmış değer ezer

//Destructuring kullanmadan Obje
const rect = {
    witdh: 20,
    height: 10
}
const calculatorPerimeter = rectag => {
    return 2 * (rectag.witdh + rectag.height)
}
console.log(calculatorPerimeter(rect)); //60

//Destructuring kullanarak obje
const calculatePeri = ({ witdh, height }) => {
    return 2 * (witdh + height)
}
console.log(calculatePeri(rect))//60

//Destructuring kullanamdan obhe
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
const getPersonInfo = obj => {
    const skills = obj.skills;
    const formattedSkills = skills.slice(0, -1).join(', ');
    const languages = obj.languages;
    const formattedLanguages = languages.slice(0, -1).join(', ');

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
    return personInfo
}
console.log(getPersonInfo(person));

//With Destructuring Objects
const getPersonInfo1 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(getPersonInfo1(person))

//Destructuring object during iteration
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}
// Prepare JS Test 4/1/2020 8:30 true
// Give JS Test 4/1/2020 10:00 false
// Assess Test Result 4/1/2020 1:00 false

// ------ Spread or Rest Operator
//Bir diziyi yok ettiğimizde, kalan öğeleri dizi olarak almak için yayılma operatörünü(...) kullanırız. Buna ek olarak, dizi öğelerini başka bir diziye yaymak için yayılma operatörünü kullanırız.


//bir dizide kalan elemanları bir dizide tutma

const numara = [1, 2, 3, 4, 5, 6, 7]
let [numFirst, numSec, numThrid, ...kalan] = numara

console.log(numFirst, numSec, numThrid); //1 2 3
console.log(kalan);//(4) [4, 5, 6, 7]

const countries1 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries1

console.log(gem)
console.log(fra)
console.log(nordicCountries)
// Germany
// France
// ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]

//Spread operatoru ile bir arrayi kopyalama

const evens = [0, 2, 4, 6 , 8];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9]
const oddsNumbers = [...odds];

const wholeNumbers = [...odds, ...evenNumbers];

console.log(evenNumbers);
console.log(oddsNumbers);
console.log(wholeNumbers)
// [0, 2, 4, 6, 8, 10]
// [1, 3, 5, 7, 9]
// [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

//Spread opertoru ile Obje kopyalama
const user = {
    name: 'Ufuk',
    title : 'Developer',
    country: 'Turkey',
    city: 'Paris'
}
const copiedUser = {...user}
console.log(copiedUser); //{name: 'Ufuk', title: 'Developer', country: 'Turkey', city: 'Paris'}

//Spread operatoru ile arrow func

const allNums = (...args) => {
    console.log(args)
};
allNums(1, 2, 3, 5) //(4) [1, 2, 3, 5]

const sumAllNums = (...args) => {
    let sum = 0;
    for(const numms of args){
        sum += numms;
    }
    return sum;
}
console.log(sumAllNums(1, 3, 5, 7)); //16


// ------ Exercises: Level 1

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp) //2.72 3.14 9.81 37 100


//Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries2;
console.log(fin, est, sw, den, nor) //Finland Estonia Sweden Denmark Norway

//Destructure the rectangle object by its properties or keys.
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]
for(const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
}
// Brook 75 (3) ['HTM', 'CSS', 'JS'] 16
// Alex 80 (3) ['HTM', 'CSS', 'JS'] 18
// David 75 (2) ['HTM', 'CSS'] 22
// John 85 ['HTML'] 25
// Sara 95 (3) ['HTM', 'CSS', 'JS'] 26
// Martha 80 (3) ['HTM', 'CSS', 'JS'] 18
// Thomas 90 (3) ['HTM', 'CSS', 'JS'] 20

//Exercies: Level 2
//Find the persons who have less than two skills
for (const {name, scores, skills, age} of users){
    users.filter((skill) => {
        if(skill.skills.length < 2){
            console.log(skill)
        }
    })
}

users.filter((eleman) => {
    if(eleman.skills.length < 2){
        console.log(eleman);
    }
})

//Exercises: Level 3
//Destructure the countries object print name, capital, population and languages of all countries
