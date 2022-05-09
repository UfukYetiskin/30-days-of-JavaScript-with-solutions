//30 Days Of JavaScript: Promises

/*
Biz insanlar, belirli bir zamanda bir faaliyette bulunma sözü veririz veya alırız. Sözümüzü tutarsak başkalarını mutlu ederiz, 
ama sözümüzü tutmazsak hoşnutsuzluğa yol açabilir. JavaScript'te söz vermenin yukarıdaki örneklerle ortak bir yanı vardır.

Bir Söz, JavaScript'te eşzamansız işlemleri işlemenin bir yoludur. Eşzamansız bir eylemin nihai başarı değeri veya başarısızlık 
nedeni ile işleyicilere izin verir. Bu, eşzamansız yöntemlerin eşzamanlı yöntemler gibi değerler döndürmesine olanak tanır: eşzamansız 
yöntem, nihai değeri hemen döndürmek yerine, gelecekte bir noktada değeri sağlama sözü verir.

Bir Söz şu durumlardan birindedir:

pending: ilk durum, ne yerine getirildi ne de reddedildi..
fulfilled: işlemin başarıyla tamamlandığı anlamına gelir.
rejected: işlemin başarısız olduğu anlamına gelir.

Bekleyen bir söz ya bir değerle yerine getirilebilir ya da bir nedenle (hata) reddedilebilir. Bu seçeneklerden herhangi biri 
gerçekleştiğinde, bir söz tarafından kuyruğa alınan ilişkili işleyiciler, o zaman yöntemi çağrılır. (Karşılık gelen bir işleyici 
eklendiğinde söz zaten yerine getirilmiş veya reddedilmişse, işleyici çağrılır, bu nedenle eşzamansız bir işlemin tamamlanması 
ile işleyicilerinin eklenmesi arasında bir yarış koşulu yoktur.)

Promise.prototype.then() ve Promise.prototype.catch() yöntemleri vaatleri döndürdüğü için zincirlenebilirler.


Bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun çalışmasını sağlayan fonksiyonlara callback fonksiyon denir. 

*/

//------------- Callbacks ---------------
//Bir geri çağırma fonksiyonu, başka bir fonksiyona geçirilen bir parametre şeklindeki fonksiyondur. Geri çağırma fonksiyonu, 
//ikinci fonksiyonun içinde çağrılır ya da icra edilir. Geri çağırma fonksiyonları, asenkron olarak icra edilirler.


//Callback fonksiyonları bağımsız bir değişken olarak başka bir fonksiyona geçirilen ve ilk fonksiyonun işlemi tamamlandıktan 
//sonra diger fonksiyonun işlevini başlatan fonksiyonlardır. Callbackler genellikle asynchronous işlemler tamamlandıktan sonra kod yürütülmesine devam etmek için kullanılır.

// Callback: İki parametre alabilen bir geri arama işlevi görelim. İlk parametre err, ikincisi ise sonuçtur. err parametresi false ise hata oluşmaz, aksi halde hata döndürür.
// Callback fonksiyonlar genellikle uyumsuz fonksiyonlarda, bir fonksiyonun başka bir fonksiyonu beklemesi gibi durumlarda kullanılırlar.
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}
const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result);
}

doSomething(callback);
// after 2 seconds it will print
//It did not go well

const didSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
}

didSomething((err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
})
// after 2 seconds it will print the skills
//["HTML", "CSS", "JS"]

//---------------- Promise Constructor ---------------------
/*
fonksiyonumuz bize bir söz veriyor. Ve mutlaka bize işin sonucunu bildiriyor. Yani başarılı olsa da başarısız durumunda kalsa da bize bir çıktı vermek zorunda.
Bir JavaScript Promise henüz tamamlanmamış ancak gelecekte belli bir noktada gerçekleşecek bir işlemin sonucunu temsil eder. Böyle bir işlemin bir örneği bir 
ağ isteğidir. Örneğin API gibi bir kaynaktan veri aldığımızda, yanıtın ne zaman alınacağını kesin olarak belirlememizin bir yolu yoktur.

Promiseler, ‘Callback Hell’ durumundan kaçınmak için ve beklenmeyen durumla karşılaşıldığında hata kontrolünün daha rahat yapılabilmesi için geliştirilmiş 
ES6 olarak bilinen ECMAScript 2015 ile bize sunulan asynchronous bir yapıdır.

Bu ağ isteğinin tamamlanmasına bağlı başka işlemlerimiz varsa bu sorunlu olabilir. Promise olmadan, sırayla yapılması gereken eylemlerle başa çıkmak için geri 
çağrıları kullanmamız gerekirdi. Yalnızca bir eşzamansız eylemimiz varsa, bu bir sorun olmak zorunda değildir. Ancak, birden fazla async (eşzamansız) adımı 
sırayla tamamlamamız gerekiyorsa, geri çağrılar yönetilemez hale gelir ve rezil callback cehennemi ile sonuçlanır. 
*/
//syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
});

//------- Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
            resolve(skills)
        }
        else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));
//(3) ['HTML', 'CSS', 'JS']

const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise2
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error))
//Something wrong has happened

/*
***************** Fetch API **********************
Fetch API, tıpkı Ajax gibi veri alma, veri gönderme işlemlerinde kullanılan asenkron bir yapıdır. Fetch ile yapılan işlemler bize resolved, rejected şeklinde 
yani promise yapısı ile döner.

Fetch API, kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür. Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi 
sağlar. Promise tabanlı olduğu için async bir yapıdır. Promise ES6 ile gelen bir özelliktir. Callback fonksiyonlarının yerine kullanabiliyoruz. Fetch API'da 
promise yapısını kullanarak bizim Ajax'ın yerine kullanabileceğimiz bir yapı sunuyor. Ayrıca Fetch API window objesi ile birlikte geliyor. Eğer window objesini 
konsolda yazdırırsak bu window objesinin altında fetch metodunu görebilirsiniz.
Fetch Interfaces
*fetch(), bu yöntem bir kaynak almak için kullanılır.

*Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.

*Request , bir kaynak talebini temsil eder.

*Response, bir isteğe verilen yanıtı temsil eder.
*/

const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        //getting the data in api
        console.log(data)
    })
    .catch(error => console.log(error));
//Something wrong has happened

/*
********** Async and Await *********
async await yapısında bir işlem bitmeden diğer işleme geçme yapmaz asenkron olan javascript dilinde bu önemli bir özellik callback, promise ile de bu işlemi 
yapabiliriz ama en temiz kod ve çalışma mantığı async await yapısıdır.

Asynchronous programlama paralel programlamayı mümkün kılar. Başka bir deyiş ile main akışı engellemeden kod yazabiliriz.
Async/Await yapısı asynchronous işlemleri daha anlaşılması kolay bir hale getiren ECMAScript 2017 ile kullanıma sunulan promise tabanlı bir Javascript özelliğidir.


Zaman uyumsuz ve bekliyor, vaatleri yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.
*/
const square = async function (n) {
    return n * n;
}
console.log(square(2));
//Promise {<fulfilled>: 4}

function addString(previous, current) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(previous + " " + current);
      }, Math.floor(Math.random() * 100) + 1);
    });
  }
  async function addAll() {
    let toPrint = await addString("", "A");
    toPrint = await addString(toPrint, "B");
    toPrint = await addString(toPrint, "C");
    console.log(toPrint);
  }
  addAll();
  
//Output: A B C

//promise

const fetchData = async () => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    }
    catch(err){
        console.log(err)
    }
}
console.log('=======async and await');
fetchData();

// Exercises Level 1

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

console.log('----- Exercises Level 1 -------')
console.log('----- Exercises Level 1 -------')
console.log('----- Exercises Level 1 -------')
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        let infoCountry = data;

        infoCountry.map((country) =>{
            console.log("Country Name:" + country.name + " Capital: " + country.capital + " Population: " + country.population);
        })
    })

const countrData = async ()  => {

    try{
        const response = await fetch(countriesAPI);
        const counrtyInfo = await response.json();
        counrtyInfo.map((country) =>{
            console.log("Country Name:" + country.name + " ----Capital: " + country.capital + " --------Population: " + country.population);
        })
    }
    catch(err){
        console.log(err)
    }
}
countrData();
console.log('----- Exercises Level 2 -------')
console.log('----- Exercises Level 2 -------')
console.log('----- Exercises Level 2 -------')
console.log('----- Exercises Level 2 -------')
//Exercises: Level 2

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

const countCatData = async () => {
    try{
        const response = await fetch(catsAPI)
        const catInfo = await response.json();

        catInfo.map((cat) => {
            console.log("Cat Name: " + cat.name + "----- "+" Cat weight: " + cat.weight.metric);
        })
    }
    catch(error){
        console.log(error)
    }
}
countCatData();
/*
fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');

        name.innerHTML = `${author.name}`;
        email.innerHTML = `${author.email}`;

        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
      });
    })

  ul.appendChild(list);
*/
console.log('----- Exercises Level 3 -------')
console.log('----- Exercises Level 3 -------')
console.log('----- Exercises Level 3 -------')
console.log('----- Exercises Level 3 -------')
const countCountriesLang = async () => {
    try{
        const response = await fetch(countriesAPI);
        const lang = await response.json();

        let totalLang= [];
        lang.map((eleman) => {
            totalLang.push(eleman.languages)
            
        })
        console.log('Languages Count: '+totalLang.length)
    }catch(error){
        console.log(error)
    }
}
countCountriesLang();