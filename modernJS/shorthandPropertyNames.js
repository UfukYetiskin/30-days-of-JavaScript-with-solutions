console.log("-- Shorthand Property Names (kısayol obje anahtarı isimleri) --")

/* 
JavaScript objesi, key-value(anahtar-değer) sistemiyle çalışan bir
veri tipidir. Bir obje oluştururken, değer değişkeninden geliyorsa,
anahtarın açıkça belirtilmesine gerek yoktur. değişkenin direkt olarak
objeye girilmesi, değişkenin ismini anahtar olarak, değerini ise değer olarak atar.

*/
const isim = "İris"
const yas = 23;
const kullanici_objesi = {isim, yas};
console.log(kullanici_objesi);
// { isim: "İris", yas: 23 }

//React örneği

function Sayac ({baslangicDegeri, adim}){
    //Burada object destruction var.
    const [sayac, setSayac] = useCounter({ baslangicDegeri, adim }); // Burada kısayol kullanım var.
    return <button onClick={setSayac}>{sayac}</button>;
}