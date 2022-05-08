/* Fetch API window objesinde bulunan web istekleri yapabileceğimiz ve cevaplarını kolaylıkla işleyebileceğimiz asenkron çalışan bir metoddur. Fetch API' nin yerine jQuery.ajax() ve XMLHttpRequest kullanılabilinir.
Fetch API, tıpkı Ajax gibi veri alma, veri gönderme işlemlerinde kullanılan asenkron bir yapıdır. Fetch ile yapılan işlemler bize resolved, rejected şeklinde yani promise yapısı ile döndüğü için fetch kullanımını daha iyi anlayabilmek için promise yapısını bilmemiz gerekir. 
*/
/* Json dosyasından veri çektik*/
fetch("settings.json".then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
}));    


/* API üzerinden veri çektik bir web sitesinden */
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))