// ----30 Days Of JavaScript: Web Storages
/*
Web Depolama (sessionStorage ve localStorage), geleneksel tanımlama bilgilerine göre önemli avantajlar sunan yeni bir HTML5 API'sidir. 
HTML5'ten önce, uygulama verilerinin her sunucu isteğine dahil olan çerezlerde saklanması gerekiyordu. Web depolaması daha güvenlidir 
ve büyük miktarda veri web sitesi performansını etkilemeden yerel olarak depolanabilir. Çerezlerin birçok web tarayıcısında veri depolama 
sınırı, çerez başına yaklaşık 4 KB'dir. Biz Depolar çok daha büyük verileri (en az 5MB) depolayabiliriz ve asla sunucuya aktarılmaz. Aynı 
veya bir kaynaktan gelen tüm siteler aynı verileri depolayabilir ve bunlara erişebilir.

Depolanan verilere JavaScript kullanılarak erişilebilir; bu, geleneksel olarak sunucu tarafı programlama ve ilişkisel veritabanlarını 
içeren birçok şeyi yapmak için istemci tarafı komut dosyası oluşturma yeteneğinden yararlanmanızı sağlar. İki Web Depolama nesnesi vardır:

-   SessionStorage
-   LocalStorage

localStorage, sessionStorage'a benzer, ancak localStorage'da depolanan verilerin sona erme süresi olmamasına rağmen, sessionStorage'da 
depolanan verilerin sayfa oturumu sona erdiğinde, yani sayfa kapatıldığında silinir.

LocalStorage veya sessionStorage'da depolanan verilerin sayfanın protokolüne özel olduğuna dikkat edilmelidir.

Anahtarlar ve değerler her zaman dizelerdir (nesnelerde olduğu gibi tamsayı tuşlarının otomatik olarak dizelere dönüştürüleceğini unutmayın).

--SessionStorage
sessionStorage yalnızca tarayıcı sekmesinde veya pencere oturumunda kullanılabilir. Verileri tek bir web sayfası oturumunda depolamak için 
tasarlanmıştır. Bu, pencere kapatılırsa oturum verilerinin kaldırılacağı anlamına gelir. sessionStorage ve localStorage benzer yöntemlere 
sahip olduğundan, sadece localStorage'a odaklanacağız.

--LocalStorage

HTML5 localStorage, son kullanma verisi olmadan tarayıcıda veri depolamak için kullanılan web depolama API'sinin para birimidir. Veriler, 
tarayıcı kapatıldıktan sonra bile tarayıcıda mevcut olacaktır. localStorage, tarayıcı oturumları arasında bile tutulur. Bu, tarayıcı 
kapatılıp yeniden açıldığında ve ayrıca sekmeler ve pencereler arasında anında verilerin hala mevcut olduğu anlamına gelir.

Web Depolama verileri, her iki durumda da farklı tarayıcılar arasında mevcut değildir. Örneğin, Firefox'ta oluşturulan depolama nesnelerine 
tıpkı çerezler gibi Internet Explorer'da erişilemez. Yerel depolama üzerinde çalışmak için beş yöntem vardır: setItem(), getItem(), removeItem(), clear(), key()

--Web Depolarının kullanım durumu
Web Depolarının bazı kullanım durumları şunlardır:

-verileri geçici olarak depolamak
-kullanıcının alışveriş sepetine koyduğu ürünleri kaydetme
-veriler, sayfa istekleri, birden çok tarayıcı sekmesi arasında ve ayrıca localStorage kullanılarak tarayıcı oturumları arasında kullanılabilir hale getirilebilir.
-localStorage kullanılarak tamamen çevrimdışı olarak kullanılabilir
-Web Depolama, sonraki isteklerin sayısını en aza indirmek için istemcide bazı statik veriler depolandığında harika bir performans kazancı olabilir. Görüntüler bile Base64 kodlaması kullanılarak dizelerde saklanabilir.
-kullanıcı kimlik doğrulama yöntemi için kullanılabilir

Yukarıda bahsedilen örnekler için localStorage kullanmak mantıklıdır. O halde sessionStorage'ı ne zaman kullanmamız gerektiğini merak ediyor olabilirsiniz.

Bazı durumlarda, pencere kapanır kapanmaz verilerden kurtulmak istiyoruz. Ya da uygulamanın başka bir pencerede açık olan aynı uygulamaya müdahale etmesini 
istemiyorsak. Bu senaryolar en iyi şekilde sessionStorage ile sunulur.

Şimdi bu Web Storage API'lerinden nasıl yararlanılacağını görelim.

--HTML5 Web Depolama Nesneleri
HTML web depolama, istemcide veri depolamak için iki nesne sağlar:

-window.localStorage - son kullanma tarihi olmayan verileri depolar
-window.sessionStorage - bir oturum için veri depolar (tarayıcı sekmesi kapatıldığında veriler kaybolur)Modern tarayıcıların çoğu Web Depolamayı destekler, 
ancak localStorage ve sessionStorage için tarayıcı desteğini kontrol etmek iyidir. Web Depolama nesneleri için mevcut yöntemleri görelim.

Web Depolama nesneleri:

-localStorage - localStorage nesnesini görüntülemek için
-localStorage.clear() - yerel depolamadaki her şeyi kaldırmak için
-localStorage.setItem() - verileri localStorage'da depolamak için. Bir anahtar ve bir değer parametresi alır.
-localStorage.getItem() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak bir anahtar alır.
-localStorage.removeItem() - saklanan öğeyi bir localStorage'dan kaldırmak için. Parametre olarak key alır.
-localStorage.key() - localStorage içinde saklanan bir veriyi görüntülemek için. Parametre olarak index alır.

Öğeyi localStorage'a ayarlama

Bir localStorage'da saklanacak verileri ayarladığımızda, bir dize olarak saklanacaktır. Bir diziyi veya nesneyi depoluyorsak, orijinal
erinin dizi yapısını veya nesne yapısını kaybetmediğimiz sürece, formatı korumak için önce onu dizgelendirmemiz gerekir.
LocalStorage.setItem yöntemini kullanarak verileri localStorage'da saklarız .
*/


//syntax
//localStorage.setItem('key', 'value')


//String değeri storage'da saklama
localStorage.setItem('firstName', 'Ümmühan');
console.log(localStorage);

//Sayısal bir değeri saklamak
localStorage.setItem('age', 23)
console.log(localStorage);

//Bir diziyi localStorage'da depolamak. Bir diziyi, nesneyi veya nesne dizisini depoluyorsak, önce nesneyi dizelemeliyiz.
const skills = ['HTML', 'CSS', 'JS', 'React'];
//Biçimi korumak için önce Skills dizisinin dizgilenmesi gerekir.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);//skills: "[\n    \"HTML\",\n    \"CSS\",\n    \"JS\",\n    \"React\"\n]"

let skills1 = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills1, undefined, 4)
localStorage.setItem('skill', skillJSON);

//Bir nesneyi localStorage'da depolamak. Nesneleri bir localStorage'a depolamadan önce, nesnenin dizgeleştirilmesi gerekir.
const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}

const userJSON = JSON.stringify(user, undefined, 4);
localStorage.setItem('user', userJSON);


//Getting item from localStorage

//syntax
// localStorage.getItem('key')

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills3 = localStorage.getItem('skills')
console.log(firstName, age, skills) //Ümmühan 23 (4) ['HTML', 'CSS', 'JS', 'React']

//Gördüğünüz gibi skill string formatında. Normal diziye ayrıştırmak için JSON.parse() kullanalım.

let skills4 = localStorage.getItem('skills')
let skillObj = JSON.parse(skills4, undefined, 4);
console.log(skillObj); //(4)  ['HTML', 'CSS', 'JS', 'React']


//Clearing the localStorage
//Clear yöntemi, yerel depolamada depolanan her şeyi temizleyecektir.
localStorage.clear();

//Exercises Level 1

//Store you first name, last name, age, country, city in your browser localStorage.
let myInfo = {
    name: 'Ufuk',
    lastName: 'Yetişkin',
    age: 26,
    country: 'TR',
    city: 'Kocaeli'
}
const myInfoJSON = JSON.stringify(myInfo, undefined, 4)
localStorage.setItem('myInfo', myInfoJSON);
//myInfo	{ "name": "Ufuk", "lastName": "Yetişkin", "age": 26, "country": "TR", "city": "Kocaeli" }

//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'Ümmühan',
    lastName: 'Yetişkin',
    incomes: [300, 500, 700, 200, 300],
    expenses: [100, 300, 700, 50],
    totalIncomes: function () {
        let total = 0;
        this.incomes.map((eleman) => {
            total += eleman
            return total;
        })
    },
    accountInfo: function () {
        return this.firstName + " " + this.lastName;
    },
    totalExpenses: function () {
        let sum = 0;
        this.expenses.map((eleman) => {
            sum += eleman
            return sum;
        })
    },
    get addExpense() {
        return this.expenses;
    },
    set setAddExpense(expense) {
        this.expenses.push(expense);
    },
    get addIncomes() {
        return this.expenses;
    },
    set setAddIncomes(income) {
        this.incomes.push(income);
    }
}

const personAccountJSON = JSON.stringify(personAccount, undefined, 4);
localStorage.setItem('personAccount', personAccountJSON);
console.log(localStorage);