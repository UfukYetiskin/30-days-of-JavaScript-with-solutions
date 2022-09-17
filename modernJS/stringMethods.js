console.log("--- Additional String MEthods ---- ")

//Dizelere karşı kullanabileceğimiz birçok yöntem vardır. İşte bunlardan birkaçının listesi:

//1. indexOf()
//bir dizede belirtilen değerin il oluşumunun konumunu alır.

const indexOfStr = "This is a short sentence"
const indexStr = indexOfStr.indexOf("short");
console.log(indexStr)
//10


//2. slice()
//Bir dizenin belirtilen bölümünü yeni bir dize olarak çeker

const sliceStr = "pizza, orange, cereals"
const slice = sliceStr.slice(7, 13);
console.log(slice)//orange


//3. toUpperCase()
//Bir dizenin tüm karakterlerini büyük harfe dönüştürür.

const upperStr = "i ate an apple"
const toUpper = upperStr.toLocaleUpperCase();
console.log(toUpper);//İ ATE AN APPLE

//3. toLowerCase()
//Bir dizenin tüm karakterlerini büyük harfe dönüştürür.

const lowerStr = "I ate an Apple"
const toLower = upperStr.toLocaleLowerCase();
console.log(toLower);//i ate an apple


//4. startsWith()
//Bu yönyem, dizenin ilettiğiniz değerle başlayıp başlamadığını kontrol eder

const startStr = "ABCDEFG";
const starts= startStr.startsWith("AB");
console.log(starts)//true
//Yöntemin kontrol etmeye başlayacağı başlangıç ​​noktası olan ek bir parametre iletebiliriz.
const startsCont = startStr.startsWith("CDE", 2)
console.log(startsCont)//true

//5. endsWith()
//Benzer şekilde startsWith(), bu yeni yöntem, dizenin ilettiğimiz değerle bitip bitmediğini kontrol edecektir:

const endsStr = "ABCDEFG"
const ends = endsStr.endsWith("FG")
console.log(ends)//ture

const endsCont = endsStr.endsWith("C", 3)
console.log(endsCont)//true


//6. includes()
//Bu yöntem, dizgimizin ilettiğimiz değeri içerip içermediğini kontrol edecektir.

const includeStr = "ABCDEFG"
const include = includeStr.includes("DE")
console.log(include) //true


//7. repeat()

let hello = "Hi"
console.log(hello.repeat(10))
//"HiHiHiHiHiHiHiHiHiHi