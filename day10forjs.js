//--------------- Set -----------------
//Set her değerin sadece birer kez olabileceği yapılardır
// Set bir kümedir. Set, sadece benzersiz elemanları(her elemandan bir tane) tkümesinde tutar. Set benzersiz değerlerin bir arada tutulabildiği bir veri yapısıdır.


const companies = new Set();
console.log(companies);//Set(0) {size: 0}


const family = new Set(['Vahap', 'Filiz', 'Meral', 'Ferat', 'Gurbet', 'Ufuk']);
for(const members of family){
    console.log('kim: ' + members)
}
//Set ile oluşturulan değişkeni bir diziye çevirmemiz gerekmektedir map fonksiyonunu kullanmamız için
[...family].map((uye) => {
    console.log(uye)
})
//Creating set from array
const languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French']

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); //Set(4) {'English', 'Finnish', 'French', 'Spanish'}

//Set, yinelenebilir bir nesnedir ve her öğeyi yineleyebiliriz.

for(const language of setOfLanguages){
    console.log(language);
}
//English
//Finnish
//French
//Spanish

//Set' eleman ekleme

const universities = new Set(); //Boş bir set oluşturduk
console.log(universities.size) //0

universities.add('PAÜ');
universities.add('KOÜ');
universities.add('KTÜ');
universities.add('İTÜ');
universities.add('BÜ')

console.log(universities.size)//4 elemnts of Set
console.log(universities); // Set(4) {'PAÜ', 'KOÜ', 'KTÜ', 'İTÜ'}


for(const universty of universities){
    console.log(universty);
}
//PAÜ
//KOÜ
//KTÜ
//İTÜ

const childs = ['Deniz', 'Artemis', 'Uzay']
const childSet = new Set();
//childs dizisindeki elemanları childSet içerisine ekliyoruz
for(let child of childs){
    childSet.add(child)
}
console.log(childSet);


//Set'ten bir eleman silmek

console.log(universities.delete('KTÜ')); //true
console.log(universities.size) // 3 eleman kaldı

//childSet içerisindeki bütün elemanları sildik.
for(let child of childSet){
    childSet.delete(child)
}
console.log(childSet)


// Set içerisinde eleman kontrol etmek
console.log(universities.has('İTÜ')); //true
console.log(universities.has('BOÜ')); //false

//Kontrol için tekradan childSet içerisine eleman ekledik.
for(let child of childs){
    childSet.add(child)
}
console.log(childSet.has('Vahap'))//false
console.log(childSet.has('Artemis'))//true

//Clearing the set, set'in içindeki bütün elemanları silme 

universities.clear();
console.log(universities); //Set(0) {size: 0}

childSet.clear()
console.log(childSet)//Set(0) {size: 0}

const cars = ['Audi', 'Suzuki', 'Audi', 'Mercedes', 'BMW', 'Mercedes', 'Skoda', 'Toyota', 'Mercedes'];
const carsSet = new Set(cars);

console.log(`Set: ${carsSet}, Set Size: ${carsSet.size}`);  //Set: [object Set], Set Size: 6
console.log(carsSet) //Set(6) {'Audi', 'Suzuki', 'Mercedes', 'BMW', 'Skoda', …}

const counts =[]

for(const c of carsSet){
    const filterCars = cars.filter((crs) => crs === c );
    console.log(filterCars)//
    counts.push({car: c, count: filterCars.length})
}
console.log(counts);
/*
{car: 'Audi', count: 2}
{car: 'Suzuki', count: 1}
{car: 'Mercedes', count: 3}
{car: 'BMW', count: 1}
{car: 'Skoda', count: 1}
{car: 'Toyota', count: 1}
*/

//Set ile bir dizideki elemanları tekrar edilmeden yazdırmak
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers); //Set(5) {5, 3, 2, 9, 4}

//Set'leri birleştirme
// spread operatörünü kullanarak 2 diziyi birleştirebiliriz
let a = [ 1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let C = new Set(c)
console.log(C); //Set(6) {1, 2, 3, 4, 5, 6}

//Kümelerin kesişimi
//filter metodu ile 2 kümenin kesişim noktasını bulabiliriz.

let d = [ 1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)
console.log(F);
//Set(3) {3, 4, 5}

//Kümeler arasındaki farkı bulma
//filter metodu ile iki küme arasındaki eleman farklılıklarını buluruz

let g = d.filter((num) => !E.has(num))
console.log(g);
//(2) [1, 2]

//------------- Map -------------------
//Map, anahtar değere sahip veriler tutan bir yapıdır(collection). Tıpkı Obje gibi. Fakat aralarındaki en önemli farklardan biri Mapler anahtar değer olarak herhangi bir tipte olabilirler.

const map = new Map();
console.log(map); // Map(0) {size: 0}

//Bir diziden Map oluşturma
const cities = [
    ['Kocaeli', 'İzmit'],
    ['Ankara', 'Çankaya'],
    ['Denizli', 'Pamukkale'],
    ['Diyarbakır', 'Silvan']
]
const city = new Map(cities)
console.log(city); // Map(4) {'Kocaeli' => 'İzmit', 'Ankara' => 'Çankaya', 'Denizli' => 'Pamukkale', 'Diyarbakır' => 'Silvan'}
console.log(city.size); //4

//Map' bir değer ekleme

const countiesMap = new Map();
console.log(countiesMap.size);//0
countiesMap.set('Turkey', 'Ankara')
countiesMap.set('Sweden', 'Stockholm');
countiesMap.set('Norway', 'Oslo');
console.log(countiesMap);// Map(3) {'Turkey' => 'Ankara', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
console.log(countiesMap.size);//3

//Map'ten değer çekme
console.log(countiesMap.get('Turkey'));//Ankara

//Map içerisinde bir anahtarı kontrol etme
//Check if a key exists in a map using has method. It returns true or false.
console.log(countiesMap.has('Norway')); //true
console.log(countiesMap.has('Ghana'));//false

//Map'teki bütün değerleri almak için döngü
for(const country of countiesMap){
    console.log(country);
}
/* 
(2) ['Turkey', 'Ankara']
(2) ['Sweden', 'Stockholm']
(2) ['Norway', 'Oslo']
*/

for(const [country, city1] of countiesMap){
    console.log(country, city1)
}
/*
Turkey Ankara
Sweden Stockholm
Norway Oslo 
*/

// -------- Exercises: Level 1

//create an empty set
const emptySet = new Set();
//Create a set containing 0 to 10 using loop
for(let i= 0; i <= 10; i++) {
    emptySet.add(i);
}
console.log(emptySet);
//Remove an element from a set
emptySet.delete(10);
console.log(emptySet);
//Clear a set
emptySet.clear();
console.log(emptySet)

//Create a set of 5 string elements from array
const stringArray = ['Vahap', 'Filiz', 'Meral', 'Ferat', 'Gurbet', 'Ümmühan', 'Mehtap', 'Balaz']
const setStringArray = new Set(stringArray);

//Create a map of countries and number of characters of a country
const charMapArr = [
    ['Finland', 1],
    ['Sweden', 2],
    ['India', 3],
    ['Germany', 4]
]

// Exercises: Level 2
const k = [4, 5, 8, 9]
const l = [3, 4, 5, 7]
const setK = new Set(k)
const setL = new Set(l)
const countries = ['Finland', 'Sweden', 'Norway']
//Find a union b

const m = [...k, ...l];
const setM = new Set(m)
console.log(setM)

//Find a intersection b
const findIntersection = k.filter((num) => setL.has(num));
const newFindIntersection = new Set(findIntersection);
console.log(newFindIntersection);

const diffrence = k.filter((num) => !setL.has(num))
const newDiff = new Set(diffrence)
console.log(newDiff);
