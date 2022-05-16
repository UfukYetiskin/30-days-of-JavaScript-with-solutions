//Event Listeners
console.log('----Event Listeners----')
/*
Ortak HTML olayları:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. Herhangi 
bir DOM nesnesine olay dinleyici yöntemi ekleyebiliriz. HTML öğelerinde farklı olay türlerini dinlemek 
için addEventListener() yöntemini kullanıyoruz. addEventListener() yöntemi, bir olay dinleyicisi ve 
bir geri çağırma işlevi olmak üzere iki bağımsız değişken alır .
*/
console.log('syntax Event Listeners')
// selectedElement.addEventListener('eventListener', function(e){
     //olaydan sonra gerçekleşmesini istediğiniz aktivite burada olacaktır - the activity you want to occur after the event will be in here
// })
console.log('selectedElement.addEventListener("eventListener", function(e){\nolaydan sonra gerçekleşmesini istediğiniz aktivite burada olacaktır - the activity you want to occur after the event will be in here\n})')

//or

// selectedElement.addEventListener('eventlistener', e => {
     //olaydan sonra gerçekleşmesini istediğiniz aktivite burada olacaktır -the activity you want to occur after the event will be in here
// })
console.log('selectedElement.addEventListener("eventlistener", e => {\n olaydan sonra gerçekleşmesini istediğiniz aktivite burada olacaktır -the activity you want to occur after the event will be in here})')

console.log('---Click---')
//Click
/*
Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçiyoruz, ardından addEventListener yöntemini 
ekliyoruz. Olay dinleyicisi, olay tipini ve geri çağırma fonksiyonlarını argüman olarak alır.
*/

const button = document.querySelector('#clickMe');
button.addEventListener('click', e => {
    console.log('click eventi')
    console.log('e gives the event lsitener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log('e.target.textContent gives content of selected element: ', e.target.textContent)
})
//Bir olay ayrıca doğrudan HTML öğesine satır içi komut dosyası olarak eklenebilir.
//Example: onclick
const clickme =  () => {
    alert('We can attack event on HTML element');
}

//double Click
//Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçiyoruz, ardından addEventListener yöntemini ekliyoruz. Olay dinleyicisi, olay tipini ve geri çağırma fonksiyonlarını argüman olarak alır.

const dbclick = document.querySelector('#dbclick')
dbclick.addEventListener('dblclick', e => {
    console.log('dblclick - doubleclick eventi')
    console.log('e gves tge event listener object: ', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log('e.target.textContent gives content of selected element: ', e.target.textContent);
})

//Mouse Enter
//Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçiyoruz, ardından addEventListener yöntemini ekliyoruz. Olay dinleyicisi, olay tipini ve geri çağırma fonksiyonlarını argüman olarak alır.

const msEnter = document.querySelector('#mouseEnter')
msEnter.addEventListener('mouseenter', e => {
    console.log('mouseenter eventi')
    console.log('e gives the event listener object: ', e)
    console.log('e.target gives the selected element: ' , e.target)
    console.log('e.target.textContent gives the selected element: ', e.target.textContent);
})
console.log("-----Eventler----- \nclick - öğe tıklandığında \ndblclick - öğeye çift tıklandığında \nmouseenter - fare noktası öğeye girdiğinde\nmouseleave - fare işaretçisi öğeden ayrıldığında\nmousemove - fare işaretçisi öğe üzerinde hareket ettiğinde\nmouseover - fare işaretçisi öğe üzerinde hareket ettiğinde\nmouseout - fare işaretçisi öğeden dışarı çıktığında\ninput - değer giriş alanına girildiğinde\nchange -giriş alanında değer değiştiğinde\nblur -öğe odaklanmadığında\nkeydown - bir tuş kapalıyken\keyup - bir anahtar açıkken\nkeypress - herhangi bir tuşa bastığımızda\nonload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde")
/*
Artık addEventListen yöntemini ve olay dinleyicisinin nasıl ekleneceğini öğrendiniz. Birçok olay dinleyicisi türü vardır. Ancak bu meydan okumada en yaygın önemli olaylara odaklanacağız. 
Olayların listesi:

click - öğe tıklandığında
dblclick - öğeye çift tıklandığında
mouseenter - fare noktası öğeye girdiğinde
mouseleave - fare işaretçisi öğeden ayrıldığında
mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseout - fare işaretçisi öğeden dışarı çıktığında
input - değer giriş alanına girildiğinde
change -giriş alanında değer değiştiğinde
blur -öğe odaklanmadığında
keydown - bir tuş kapalıyken
keyup - bir anahtar açıkken
keypress - herhangi bir tuşa bastığımızda
onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde
*/

//Getting value from an input element
///Genellikle formları doldururuz ve formlar veri kabul eder. Form alanları, giriş HTML öğesi kullanılarak oluşturulur. İki giriş alanı, bir düğme ve bir p etiketi kullanarak bir kişinin 
//vücut kitle indeksini hesaplamamıza izin veren küçük bir uygulama yapalım
console.log('input Value')
//input Value
const kg = document.querySelector('#mass')
const height = document.querySelector('#height')
const calculater = document.querySelector('#calculate')

let bmi
calculater.addEventListener('click', e => {
    bmi = kg.value / (height.value * height.value) 
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})


//input event and change
//Yukarıdaki örnekte butona tıklayarak iki girdi alanından girdi değerlerini almayı başardık. Peki butona tıklamadan 
//değer elde etmek istiyorsak. Alan odaktayken girdi alanından hemen veri almak için change veya input olay türünü kullanabiliriz. Bakalım bununla nasıl başa çıkacağız.
const input = document.querySelector('#inputEvent')
const p = document.querySelector('p')
input.addEventListener('input', e => {
    p.textContent = e.target.value
})


//blur event
//input veya change'in aksine , blur olayı, girdi alanı odakta olmadığında meydana gelir.