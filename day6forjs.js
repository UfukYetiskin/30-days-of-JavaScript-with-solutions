//Loops (Döngüler), 

//for Loop 
/*for loop structure
for(initialization, condition, increment/decrement){
    //code goes here
}
*/

for(let i =0; i<=10 ; i++){
    console.log(i); //1 2 3 4 5 6 7 8 9 10
}

for(let i =10; i>=0; i--){
    console.log(i); //10 9 8 7 6 5 4 3 2 1
}

for(let i =0; i<=10 ; i++){
    console.log(`${i} * ${i} = ${i * i}  `); // 1 4 9 16 25 36 45 54 63 72 81 100
}

const names = ['Ümmühan', 'Sunay', 'Abdurrahman', 'Veysel', 'Fatmanur'];

for(let i = 0; i<names.length; i++){
    console.log(names[i]); //Ümmühan Sunay Abdurrahman Veysel Fatmanur
}

//Adding all elements in the array

const numbers = [1,2,3,4,5];
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum); //15

//Creating a new array based on the existing array

const numbers1 = [2, 4, 8, 10]
const newArr = []
let sum2 = 0;

for(let i=0; i<numbers1.length; i++){
    newArr.push(numbers1[i] ** 2);
}
console.log(newArr); // 4, 16, 64, 100

const countries = ['Turkey', 'Finland', 'Sweeden','England'];
const newCountries = [];

for(let i=0; i<countries.length; i++){
    newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries); //TURKEY, FINLAND, SWEEDEN, ENGLAND

//While Loop
//While'ın sonsuz döngüye girmemesi için nereye kadar dememiz lazım.
let i = 0
while(i  < countries.length){
    console.log(countries[i]);
    i++;
}//0, 1, 2, 3, 4, 5

//do while loop, do'nun while'dan farkı while koşula uyarsa döndürür ama do en az 1 kere döndürür ve koşulu sağlıyorsa devam eder

let z = 0
do{
    console.log(z);
    z++;
}while(z<= 5) //0 1 2 3 4 5

//for of loop, diziler için for of loop kullanırız. Dizideki her bir elemanın indeksi için ilgilenmiyorsak kullanırız.

for(let name of names){
    console.log('Ad:', name);
}

//Break, döngüyü durdurmak için kullanılır.

for(let i = 0; i<=5; i++){
    if(i==3){
        break
    }
    console.log(i);
}
for(let country of countries){
    if(country == 'England'){
        console.log(`${country} bulundu.`)
        break;
    }
    console.log('Country: ', country);
}

//Continue, mevcut iletrasyonu atlamak için kullanılır

for(let country of countries){
    if(country == 'Sweeden'){
        console.log(`${country} es geçildi.`)
        continue;
    }
    console.log('Country: ', country);
}

//Exewercises

const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1- Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i<=10; i++){
    console.log(i);
}
//2-Iterate 10 to 0 using for loop, do the same using while and do while loop
let p = 10;
do{
    console.log(p);
    p--;
}while(p >= 0)

//3-Iterate 0 to n using for loop
let userPrompt = prompt('bir sayi giriniz.')
for(let i = 0; i<=userPrompt; i++){
    console.log(i) 
}

//4- Write a loop that makes the following pattern using console.log():
let yildiz = '#'
for(let i = 1; i<=7; i++){
    for(let a = 1; a<= i; a++){
        document.write(`*`);
    }
    document.write(`<br>`);
}

//5- Use loop to print the following pattern:
for(let i =0; i<=10 ; i++){
    console.log(`${i} * ${i} = ${i * i}  `); // 1 4 9 16 25 36 45 54 63 72 81 100
}

//6- Using loop print the following pattern

document.write(`i       i^2         i^3 <br>`)

for(let i = 0; i<=10; i++){
    document.write(i);
    document.write(i**2);
    document.write(` ${i**3} <br> `);
}

//7- Use for loop to iterate from 0 to 100 and print only even numbers

for(let i = 0; i<=100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// 8- Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 0; i<=100; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

//9-Use for loop to iterate from 0 to 100 and print only prime number
for(let i = 0; i<=100; i++){
    if(i % 2 != 0 && i % 3 != 0 && i % 4 != 0 && i % 5 != 0 ){
        console.log(i);
    }
}

//10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sonuc = 0;
let n = 0;

while(n<100){
    n++
    sonuc+=n;
}
console.log(sonuc);

//11- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let ciftSayi = 0;
let tekSayi = 0;
let sayiArr = [];
for(let i = 0; i<100; i++){
    if(i % 2 == 0){
        ciftSayi +=i;
    }
    if(i % 2 == 1){
        tekSayi+=i;
    }
}
console.log("0'dan 100'e kadar olan tüm çift sayıların toplamı: " + ciftSayi + " 0'dan 100'e kadar olan tüm oranların toplamı ise: " + tekSayi);

//12- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
sayiArr.push(ciftSayi);
sayiArr.push(tekSayi);
console.log(sayiArr);


//13- Develop a small script which generate array of 5 random numbers
let arr = [];
for (let i=0, t=11; i<5; i++) {
    arr.push(Math.round(Math.random() * t))
    
}
console.log(arr);

//14- Develop a small script which generate array of 5 random numbers and the numbers must be unique

let arr1 = [];
while (arr1.length<5) {
    let r = Math.round(Math.random()*9) +1 ;
    if(arr1.indexOf(r)=== -1 ) arr1.push(r);
    
}
console.log(arr1);

//15-  Develop a small script which generate a six characters random id:
var result = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for (let i = 0; i < 7; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(result);

//Exercises: Level 2

//1- Develop a small script which generate any number of characters random id:
var result1 = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for (let i = 0; i < Math.ceil(Math.random()*23); i++ ) {
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(result1);

//2- Write a script which generates a random hexadecimal number.
var result2 = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for (let i = 0; i < 6; i++ ) {
    result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(`'#${result2}'`);

//3- Write a script which generates a random rgb color number.
var o = Math.round, r = Math.random, s = 255;
console.log('rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')');

//4- Using the above countries array, create the following new array.

for(let country1 of countries1){
    console.log(`"${country1}"`);
}
//5- Using the above countries array, create an array for countries length'
for(let country1 of countries1){
    console.log(`"${country1.length}"`);
}

//6-Use the countries array to create the following array of arrays:
for(let country1 of countries1){
    document.write(`'${country1}','${country1.toUpperCase(country1.substring(0,3))}', ${country1.length}', `);
}

//7-In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.


//10- Using the above countries array, find the country containing only 5 characters.
for(let country1 of countries1){
   if(country1.length == 5 ){
        console.log(`"${country1}"`);
   }
}