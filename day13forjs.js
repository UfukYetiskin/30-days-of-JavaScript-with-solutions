//----------------30 Days Of JavaScript: Console Object Methods----------------
console.log('30 Days Of JavaScript: Console Object Methods');
/*
Tarayıcı konsolunda çıktı görmek için console nesne yöntemlerini ve çıktıyı tarayıcı ekranında göstermek için
document.write() kullanırız. Her iki yöntem de yalnızca test etme ve hata ayıklaam amacıyla kullanılır. DOM ile
etkileşim kurmak istediğimizde , JavaScript kullanmayı denediğimizde document.getElementById() kullanırız.
*/

//console.log()
//Tarayıcı konsolunda çıktıyı göstermek için kullanırız. Değerleri değiştirebiliriz
//ve ayrıca oturum kaparmayı %c kullanarak biçimlendirebiliriz.

console.log('30 Days of JavaScript');//30 Days of JavaScript

console.log('%d %s of JavaScript', 30, 'Days'); //30 Days of JavaScript

//CSS
//Konsolda gösterilmek istenilen mesaja still verebiliriz

console.log('%c30 Days of JavaScript', 'color:green');//yeşil renkte bir çıktı verir

console.log('%c30 Days%c %cOf%c %cJavaScript%c', 'color:green', 'color:yellow', 'color:red');

//console.warn();
//Tarayıcıda uyarı vermek için kullanırız. Örneğin, bir paketin sürmünün veya kötü uygulamaların kullanımından kaldırıldığını bildirmek için veya uyarmak için kullanılır.
console.warn('This is a warning');
console.warn('You are using React. Do not touch the DOM. Virtual Dom will take care of gandling the DOM!');

//console.error();
//Hata mesajı gösterir
console.error('This is an error message');
console.error('We all make mistakes')

//console.table()
//Verileri konsolda tablo olarak görüntüler. Bir dizi veya nesne olması gerekn bir gerekli bağımsız değişken verisini ve bir ek isteğe bağlı parametre sütununu alır.
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

//objects
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 35
}
console.table(user)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

//console.time()
//Bir işlemin ne kadar sürdüğünü izlemek için kullanabileceğiniz bir zamanlayıcı başlatır. Her zamanlayıcıya benzersiz bir ad verirsiniz ve belirli bir sayfada 10.000'e kadar zamanlayıcı çalışıyor olabilir. Aynı adla console.timeEnd() öğesini çağırdığınızda, tarayıcı, zamanlayıcı başlatıldıktan sonra geçen süreyi milisaniye cinsinden verir.

console.time('Regular for loop');
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')

//console.info();
//Tarayıcı konsolunda bilgi mesajı döndürür

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

//console.assert()
// iddia yanlışsa konsola bir hata mesajı yazar. İddia doğruysa, hiçbir şey olmaz. İlk parametre bir onaylama ifadesidir. Bu ifade yanlışsa, Onaylama başarısız hata mesajı görüntülenecektir.

console.assert(4 > 3, 'd is greater than 3')// no result 
console.assert(4 < 3, '3 is not bigger than 4'); //Onaylama başarısız: 3 is not bigger than 4

for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

//console.group();
//farklı günlük gruplarını gruplandırmaya yardımcı olabilir.

console.group('Names');
console.log(names);
console.groupEnd(); //Names   > (4) ['Asabeneh', 'Brook', 'David', 'John'

console.group('Users');
console.log(users);
console.groupEnd();

//console.count();
// çağırılma sayısını yazdırır. Bir dize etiketi parametresi alır. Bir fonksiyonun kaç kez çağrıldığını saymak çok yararlıdır.
const func = () => {
    console.count('Function has been called')
}
func()
func()
func() 
// Function has been called: 1
// Function has been called: 2
// Function has been called: 3

//console.clear();
//tarayıcıyı konsolunu temizler

//--------Exercises:Level 1

console.table(countries);

//Exercises:Level 2
console.assert(10>2*10, '10 is not bigger than 20');
console.warn('Exercises:Level 2> Example 2');
console.error('Exercises:Level 2> Example 3');

//Exercises:Level 3
console.time('while Loop');
let i = 0
while(i<=10){
    i++
    console.log(i)
}
console.timeEnd('Total Time');

