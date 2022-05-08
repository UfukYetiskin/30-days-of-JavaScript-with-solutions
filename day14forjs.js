//------30 Days Of JavaScript: Error handling
/*
JavaScript gevşek yazılmış bir dildir. Bazı zamanlar tanımsız bir değişkene erişmeye çalıştığınızda veya tanımsız bir işlevi çağırdığınızda vb. bir çalışma zamanı hatası alırsınız.

Python veya Java'ya benzer JavaScript, try-catch-finally bloğunu kullanarak çalışma zamanı hatalarını yakalamak için bir hata işleme mekanizması sağlar.

dene  { 
   hata verebilecek kod 
}  yakala  ( err )  { 
   hata oluşursa çalıştırılacak kod 
}  son olarak  { 
   hata olup olmadığına bakılmaksızın çalıştırılacak kod 
}
try : try bloğunda hata oluşturabilecek şüpheli kodu sarın. try ifadesi, yürütülürken hatalara karşı test edilecek bir kod bloğu tanımlamamızı sağlar.

catch : bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

nihayet : nihayet blok, bir hata oluşmasından bağımsız olarak her zaman yürütülür. nihayet bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.



Hata Adı	            Açıklaması

RangeError	            Sayı sınırı hatası
ReferenceError	        Referans hatası
SyntaxError	            Sözdizimi hatası
TypeError	            Tür hatası
URIError	            encodeURI() fonksiyonu hatası
*/

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err) //ReferenceError: fistName is not defined at day14forjs.js:23:20
}
/*
throw: throw ifadesi özel bir hata oluşturmamıza izin verir. Bir dize, sayı, boole veya bir nesne aracılığıyla yapabiliriz. Bir istisna atmak için throw ifadesini kullanın. Bir istisna attığınızda, ifade istisnanın değerini belirtir.

throw 'Error2' > bir metin değeriyle bir istisna 
throw 42 > 42 değeriyle bir istisna
throw true > true  değeriyle bir istisna 
throw new Error('Required')  > generates an error object with the message of Required

*/
const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()


//Error Types

//ReferenceError: Geçersiz bir başvuru oluştu. Bildirilmemiş bir değişken kullanırsak bir ReferenceError atılır.
let firstName1 = 'Asabeneh'
let fullName1 = firstName1 + ' ' 

//1console.log(fullName1)//Uncaught ReferenceError: lastName1 is not defined at day14forjs.js:56:36

//SyntaxError: Bir sözdizimi hatası oluştu
let square = 2 // x 2  //burası
console.log(square)

console.log('Hello, world'); //Uncaught SyntaxError: Unexpected identifier

//TypeError: Bir tür hatası oluştu

let num = 10
//console.log(num.toLowerCase()) //Uncaught TypeError: num.toLowerCase is not a function at <anonymous>:2:17

//Exercises 

let sayi = 0;
try{
    sayi = xSayisi + 3
    console.log(sayi)
}
catch(err){
    console.log('Hata Türü: ', err.name)
    console.log('Hata Mesajı: ', err.message);
}
finally{

}

window.document.getElementById('arananId').innerText='<h1>Evet tıkladınız. Helal size!</h1>';
