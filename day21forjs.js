//Document Object Models (DOM) Day-1
/*
HTML belgesi bir JavaScript Nesnesi olarak yapılandırılmıştır. Her HTML öğesinin, onu işlemeye yardımcı 
olabilecek farklı özellikleri vardır. JavaScript kullanarak HTML öğelerini almak, oluşturmak, eklemek veya kaldırmak mümkündür

Document Object Model(Doküman Nesne Modeli)'in kısaltması olan DOM dokümanlara erişmek için olan bir W3C standardıdır.
DOM dokümandaki nesnelere erişmek ve içeriğini, stilini, yapısını değiştirmek için kullanılır.

*/
console.log('------ Getting Element ------')
//Getting Element

//Getting elements by tag name
/*
getElementsByTagName() : dize parametresi olarak bir etiket adı alır ve bu yöntem bir HTMLCollection nesnesi döndürür. HTMLCollection, 
HTML öğelerinin dizi benzeri bir nesnesidir. length özelliği, koleksiyonun boyutunu sağlar. Bu yöntemi ne zaman kullanırsak kullanalım, 
bireysel öğelere indeks kullanarak veya her bir öğe boyunca döngüden sonra erişiriz. Bir HTMLCollection, tüm dizi yöntemlerini desteklemez, 
bu nedenle forEach yerine normal for döngüsü kullanmalıyız.

HTMLCollection arayüzü, elemanların jenerik bir koleksiyonunu temsil eder (doküman düzeninde) ve listeden seçmek için bazı metotlar ve property’ler önerir.

HTMLCollection’ın, koleksiyondaki itemlerin sayısını geri dönen uzunluk property’si (length property) vardır.

HTMLCollection listesini, varsayılan şekilde “forEach” kullanarak yinelemek (iterate) mümkün değildir.

*/
//syntax
//document.getElementsByTagName('tagname');

const allTitles = document.getElementsByTagName('h1');
console.log(allTitles);//TMLCollection(4) [h1#first-title.title, h1#second-title.title, h1#third-title.title, h1, first-title: h1#first-title.title, second-title: h1#second-title.title, third-title: h1#third-title.title]
console.log(allTitles.length) //4

for(let i = 0; i<allTitles.length; i++){
    console.log(allTitles[i])//prints each elements in the HTMLCollection
}
/*
<h1 class='title' id='first-title'>First Title</h1>
<h1 class='title' id='second-title'>Second Title</h1>
<h1 class='title' id='third-title'>Third Title</h1>
<h1></h1>
*/



//Getting elements by class name
/*
getElementsByClassName() yöntemi, bir HTMLCollection nesnesi döndürür. HTMLCollection, HTML öğelerinin 
bir dizi benzeri listesidir. length özelliği, koleksiyonun boyutunu sağlar. Tüm HTMLCollection öğeleri arasında döngü yapmak mümkündür.
*/
const allh1Tags = document.getElementsByClassName('title');

for(let i = 0; i<allh1Tags.length; i++){
    console.log(allh1Tags[i]);
}
/*
<h1 class='title' id='first-title'>First Title</h1>
<h1 class='title' id='second-title'>Second Title</h1>
<h1 class='title' id='third-title'>Third Title</h1>
*/

//Get elements by id
//getElementsById() , tek bir HTML öğesini hedefler. Argüman olarak # olmadan kimliği iletiyoruz.

let firstTitle = document.getElementById('first-title');
console.log(firstTitle);
//<h1>First Title</h1>

//Getting elements by using querySelector methods
/*
Document.querySelector yöntemi , etiket adına, kimliğe veya sınıf adına göre bir HTML veya HTML öğeleri seçebilir.

querySelector : HTML öğesini etiket adına, kimliğine veya sınıfına göre seçmek için kullanılabilir. Etiket adı kullanılıyorsa, yalnızca ilk öğeyi seçer.
*/
let firstTitle1 = document.querySelector('h1'); //select the first available h1 element
let firstTitle2 = document.querySelector('#first-title'); //select id with first-title
let firstTitle3 = document.querySelector('.title');

//querySelectorAll : etiket adına veya sınıfına göre html öğelerini seçmek için kullanılabilir. Dizi yöntemlerini destekleyen dizi benzeri bir nesne 
//olan bir nodeList döndürür. Her bir nodeList öğesi arasında döngü yapmak için for döngüsü veya forEach kullanabiliriz

const allTitles1 = document.querySelectorAll('h1') // querySelectorAll : etiket adına veya sınıfına göre html öğelerini seçmek için kullanılabilir. Dizi yöntemlerini destekleyen dizi benzeri bir nesne olan bir nodeList döndürür. Her bir nodeList öğesi arasında döngü yapmak için for döngüsü veya forEach kullanabiliriz
console.log(allTitles1.length);//4
for(let i = 0; i<allTitles1.length; i++){
    console.log(allTitles1[i])
}
allTitles1.forEach(title => console.log(title))
const allTitles2 = document.querySelectorAll('.title')// the same goes for selecting using class

console.log('---- Adding attribute-------')
//Adding attribute
//HTML'nin açılış etiketine, öğe hakkında ek bilgi veren bir nitelik eklenir. Ortak HTML özellikleri: id, class, src, style, href,disabled, title, alt. Dördüncü başlık için id ve sınıf ekleyelim.
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'


//Adding attribute using setAttribute
//setAttribute() yöntemi , herhangi bir html niteliğini ayarlar. Özniteliğin türü ve özniteliğin adı olmak üzere iki parametre alır. Dördüncü başlık için class ve id niteliğini ekleyelim.
const titles1 = document.querySelectorAll('h1')
titles1[3].setAttribute('class', 'title')//Burada ilk değer attribute'in türü, sonraki değer de adı olacak
titles1[3].setAttribute('id', 'fourth-title');

//Adding attribute without setAttribute
//Bir öznitelik ayarlamak için normal nesne ayarlama yöntemini kullanabiliriz ancak bu, tüm öğeler için geçerli olamaz. Bazı nitelikler DOM nesne özelliğidir ve doğrudan ayarlanabilirler. Örneğin id ve sınıf
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//Adding class using classList  -classList kullanarak sınıf ekleme
//Sınıf listesi yöntemi, ek sınıf eklemek için iyi bir yöntemdir. Bir sınıf varsa orijinal sınıfı geçersiz kılmaz, bunun yerine öğe için ek sınıf ekler.
//another way to setting an attribute: append the class, doesn't over ride -- bir özniteliği ayarlamanın başka bir yolu: sınıfı ekleyin, 
titles[3].classList.add('title', 'header-title');

//Removing class using remove
//klemeye benzer şekilde, bir öğeden sınıfı da kaldırabiliriz. Bir elementten belirli bir sınıfı kaldırabiliriz.
titles[3].classList.remove('title', 'header-title');


//---- Adding Text to HTML Element---------
console.log('---- Adding Text to HTML Element---------')

//HTML, bir açılış etiketinin, bir kapanış etiketinin ve bir metin içeriğinin yapı bloğudur. textContent veya *innerHTML özelliğini kullanarak bir metin içeriği ekleyebiliriz .


// Adding Text content using textContent - textContent kullanarak Metin içeriği ekleme -
//textContent özelliği, bir HTML öğesine metin eklemek için kullanılır .
const titles5 = document.querySelectorAll('h1')
titles5[3].textContent = 'Fourth Title'

//Adding Text Content using innerHTML
//Çoğu insan textContent ve innerHTML arasında kafa karıştırır . textContent , bir HTML öğesine metin eklemek içindir, ancak innerHTML, alt öğe olarak bir metin veya HTML öğesi veya öğeleri ekleyebilir.

//Text Content
const titles6 = document.querySelectorAll('h1')
titles6[3].textContent = 'Deniyoruz'

//Inner HTML
//Bir üst öğeye tamamen yeni bir alt içeriği değiştirmek istediğimizde innerHTML özelliğini kullanırız. Atadığımız değer, bir HTML öğeleri dizisi olacak.

const lists = `
    <li>30Daysof JavaScript</li>
    <li>30Daysof JavaScript</li>
    <li>30Daysof JavaScript</li>
    <li>30Daysof JavaScript</li>
    <li>30Daysof JavaScript</li>
`
const ul = document.querySelector('ul')
ul.innerHTML=lists;

//innerHTML özelliği, bir üst öğenin tüm alt öğelerini kaldırmamıza da izin verebilir. RemoveChild() kullanmak yerine aşağıdaki yöntemi tavsiye ederim.

console.log('------Adding style----------')
//------- Adding style --------

//Adding Style Color
//Başlıklarımıza biraz stil ekleyelim. Elemanın çift indeksi varsa, ona yeşil renk, kırmızı renk veririz.
const titles7 = document.querySelectorAll('h1');
titles7.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if(i % 2 === 0){
        title.style.color = 'green'
    }else{
        title.style.color = 'red'
    }
})

//Adding Style Background Color
//Başlıklarımıza biraz stil ekleyelim. Elemanın çift indeksi varsa, ona yeşil renk, kırmızı renk veririz.
const titles8 = document.querySelectorAll('h1')
titles8.forEach((title, index) => {
    if(index % 2 ){
        title.style.backgroundColor = 'grey'
    }else{
        title.style.backgroundColor = 'blue'
    }
})

//Adding Style Font Size
const titlesFont = document.querySelectorAll('li')
titlesFont.forEach((item, index) => {
    if(index % 2  === 0){
        item.style.fontSize = '36px'
    }else{
        item.style.fontSize = '16px';
    }
})